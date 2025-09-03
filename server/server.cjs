require("dotenv").config();
const express = require("express");
const cors = require("cors");
const bcrypt = require("bcrypt");
const session = require("express-session");
const { RedisStore } = require("connect-redis");
const { createClient } = require("redis");
const mysql = require("mysql2/promise");

const app = express();

// 1) MySQL 연결 풀
const db = mysql.createPool({
    host: process.env.MYSQL_HOST || 'localhost',
    user: process.env.MYSQL_USER || 'root',
    password: process.env.MYSQL_PASSWORD || '',
    database: process.env.MYSQL_DB || 'myapp',
    waitForConnections: true,
    connectionLimit: 10,
  });

// 2) Redis 클라이언트
const redisClient = createClient({ url: process.env.REDIS_URL || 'redis://localhost:6379' });
redisClient.on("error", (e) => console.error("Redis error:", e));
(async () => { await redisClient.connect(); })();

// 3) 프록시 안 쓰고 직접 접근되는 경우를 대비해 CORS 허용
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// 4) JSON 바디 파서
app.use(express.json());

// 5) 세션(저장소를 Redis로)
app.use(session({
    name: "sid",
    secret: process.env.SESSION_SECRET || 'default-secret-key',
    resave: false,
    saveUninitialized: false,
    store: new RedisStore({ client: redisClient, prefix: "sess:" }),
    cookie: {
      httpOnly: true,
      secure: false,     // HTTPS면 true
      sameSite: "lax",   // 분리된 포트 환경에 무난
      maxAge: 1000 * 60 * 60 * 2, // 2h
    },
  }));

  // 6) 최초 실행 시 users 테이블 확보(없으면 생성)
async function ensureUsersTable() {
    await db.query(`
      CREATE TABLE IF NOT EXISTS users (
        id INT AUTO_INCREMENT PRIMARY KEY,
        email VARCHAR(100) NOT NULL UNIQUE,
        password VARCHAR(255) NOT NULL,
        name VARCHAR(100) DEFAULT '',
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `);
  }
  ensureUsersTable().catch(console.error);

  // 7) Health 체크
app.get("/api/health", (req, res) => res.json({ ok: true }));

// 8) 회원가입: 이메일 중복 확인 → bcrypt 해시 저장
app.post("/api/register", async (req, res) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) return res.status(400).json({ error: "email/password required" });
  
      const [exists] = await db.query("SELECT id FROM users WHERE email = ?", [email]);
      if (exists.length) return res.status(409).json({ error: "email already exists" });
  
      const hash = await bcrypt.hash(password, 12);
      await db.query("INSERT INTO users (email, password) VALUES (?, ?)", [email, hash]);
  
      res.status(201).json({ ok: true });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "server error" });
    }
  });

  // 9) 로그인: 이메일 조회 → bcrypt 비교 → 세션에 최소정보 저장
app.post("/api/login", async (req, res) => {
    try {
      const { email, password } = req.body || {};
      if (!email || !password) return res.status(400).json({ error: "email/password required" });
  
      const [rows] = await db.query("SELECT id, email, password FROM users WHERE email = ?", [email]);
      if (!rows.length) return res.status(401).json({ error: "invalid credentials" });
  
      const user = rows[0];
      const ok = await bcrypt.compare(password, user.password);
      if (!ok) return res.status(401).json({ error: "invalid credentials" });
  
      req.session.user = { id: user.id, email: user.email };
      res.json({ ok: true, user: req.session.user });
    } catch (e) {
      console.error(e);
      res.status(500).json({ error: "server error" });
    }
  });
  
// 10) 내 정보: 세션 확인
app.get("/api/me", (req, res) => {
    if (!req.session.user) return res.status(401).json({ error: "not authenticated" });
    res.json({ ok: true, user: req.session.user });
  });

// 11) 로그아웃: 세션 파괴
app.post("/api/logout", (req, res) => {
    req.session.destroy((err) => {
      if (err) return res.status(500).json({ error: "logout failed" });
      res.clearCookie("sid");
      res.json({ ok: true });
    });
  });
  
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API server on http://localhost:${PORT}`));