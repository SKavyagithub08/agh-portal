import './App.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeaderboardPage from "./components/LeaderboardPage";
import "./Layout.css";

export default function App() {
  return (
    <div className="layout-root">
      <Navbar />
      <div className="layout-main">
        <div className="layout-sidebar">
          <Sidebar />
        </div>
        <main className="layout-content">
          <LeaderboardPage />
        </main>
      </div>
    </div>
  );
}

