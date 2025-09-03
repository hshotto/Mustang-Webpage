import { useEffect, useState } from "react";
import LoginForm from "./components/LoginForm";
import { me, logout } from "./service/auth";
import MustangHome from "./components/Mustanghome";

export default function App() {
  const [user, setUser] = useState(null);

  // 새로고침 시 세션 확인
  useEffect(() => {
    me().then(r => setUser(r.user)).catch(() => {});
  }, []);

  if (!user) {
    // 로그인 전: 폼 보여주고, 성공 시 setUser 호출
    return <LoginForm onLoggedIn={setUser} />;
  }

  // 로그인 후: 간단 페이지
  return (
    <div style={{position: "relative", backgroundColor: "transparent", minHeight: "100vh"}}>
      {/* 우측 상단 로그인 정보 */}
      <div style={{
        position: "fixed",
        top: "10px",
        right: "10px",
        zIndex: 1000,
        display: "flex",
        gap: "8px",
        alignItems: "center",
        padding: "6px 12px",
        background: "rgba(0,0,0,0.8)",
        color: "white",
        borderRadius: "6px",
        fontSize: "12px",
        border: "1px solid #333"
      }}>
        <span style={{opacity: 0.8}}>{user.email}</span>
        <button 
          style={{
            background: "transparent",
            border: "1px solid #555",
            color: "white",
            padding: "2px 8px",
            borderRadius: "3px",
            fontSize: "11px",
            cursor: "pointer"
          }} 
          onClick={async ()=>{ await logout(); setUser(null); }}
        >
          로그아웃
        </button>
      </div>

      {/* 여기서 머스탱 페이지 렌더 */}
      <MustangHome />
    </div>
  );
}