require("dotenv").config();
const express = require("express");
const cors = require("cors");

const app = express();

// CORS 설정
app.use(cors({ origin: "http://localhost:5173", credentials: true }));

// JSON 바디 파서
app.use(express.json());

// Health 체크
app.get("/api/health", (req, res) => res.json({ ok: true }));

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`API server on http://localhost:${PORT}`));