import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeaderboardPage from "./components/LeaderboardPage";

export default function App() {
  return (
    <div className="flex flex-col h-screen">
      <Navbar />
      <div className="flex flex-1 overflow-hidden">
        <Sidebar />
        <main className="flex-1 overflow-y-auto bg-[#f5f5f5]">
          <LeaderboardPage />
        </main>
      </div>
    </div>
  );
}

