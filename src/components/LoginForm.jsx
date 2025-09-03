import { useState } from "react";
import { login, register } from "../service/auth"; // 우리가 만든 API 헬퍼

export default function LoginForm({ onLoggedIn }) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [msg, setMsg] = useState("");
  const [loading, setLoading] = useState(false);

  // ➜ 이게 "버튼 핸들러": 로그인 버튼/폼 제출 시 실행
  const handleLogin = async (e) => {
    e.preventDefault();              // 기본 제출(새로고침) 막기
    setMsg("");
    setLoading(true);
    try {
      const r = await login({ email, password }); // /api/login 호출
      onLoggedIn?.(r.user);        // 부모에게 "로그인 성공" 알림
      setMsg("로그인 성공");
    } catch (err) {
      setMsg(err.message || "로그인 실패");
    } finally {
      setLoading(false);
    }
  };

  // ➜ 회원가입 버튼 핸들러
  const handleRegister = async () => {
    setMsg("");
    setLoading(true);
    try {
      await register({ email, password }); // /api/register 호출
      setMsg("회원가입 완료. 이제 로그인하세요.");
    } catch (err) {
      setMsg(err.message || "회원가입 실패");
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleLogin} style={{ color:"#eee", background:"#222", minHeight:"100vh", padding:24 }}>
      <h1>로그인</h1>

      <label>이메일</label>
      <input
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        placeholder="you@example.com"
        autoComplete="email"
      />

      <label style={{ marginTop: 8 }}>비밀번호</label>
      <input
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        autoComplete="current-password"
      />

      {/* type="submit" → Enter 눌러도 로그인됨 */}
      <button type="submit" disabled={loading} style={{ marginTop: 12 }}>
        {loading ? "처리중..." : "로그인"}
      </button>

      {/* 회원가입은 별도 버튼(onClick 핸들러) */}
      <button type="button" onClick={handleRegister} disabled={loading} style={{ marginLeft: 8 }}>
        회원가입
      </button>

      <p style={{ color: "tomato" }}>{msg}</p>
    </form>
  );
}
