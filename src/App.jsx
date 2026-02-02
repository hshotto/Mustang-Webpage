import MustangHome from "./pages/Mustanghome";
import Menu from "./components/Menu";
import 'antd/dist/reset.css'; // antd 스타일 import
import History from "./pages/History";

export default function App() {
  return (
    <div style={{position: "relative", backgroundColor: "transparent", minHeight: "100vh"}}>
      <Menu />
      <MustangHome />
      <History />
    </div>
  );
} 