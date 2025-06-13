// App.jsx
import React from "react";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import LeaderboardPage from "./components/LeaderboardPage";
import {
  LayoutRoot,
  LayoutMain,
  LayoutSidebar,
  LayoutContent
} from "./styles/Layout.styles"; // ✅ Importing styled-components from layout styles

export default function App() {
  return (
    <LayoutRoot>
      <Navbar />
      <LayoutMain>
        <LayoutSidebar>
          <Sidebar />
        </LayoutSidebar>
        <LayoutContent>
          <LeaderboardPage />
        </LayoutContent>
      </LayoutMain>
    </LayoutRoot>
  );
}
