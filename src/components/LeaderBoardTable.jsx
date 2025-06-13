import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "./Sidebar"; 
import {
  LbtRoot,
  LbtContainer,
  LbtTableWrapper,
  LbtTable,
  LbtTableHead,
  LbtTableTH,
  LbtTableTD,
  LbtTableRow,
  LbtMobileControls,
  LbtDesktopControls,
  LbtSearchWrapper,
  LbtSearchInput,
  LbtCheckBtn
} from "../styles/LeaderBoardTable.styles";

const leaderboardData = [
  ["04", "Luca Romano", "CSE", "2025", "80%", "80/100", "luca@gmail.com"],
  ["05", "Mateo García", "EEE", "2025", "75%", "70/100", "mate@gmail.com"],
  ["06", "Chen Wei", "CSE", "2025", "72%", "70/100", "chenwa@gmail.com"],
  ["07", "Diego Santos", "CSE", "2025", "70%", "60/100", "diego@gmail.com"],
  ["08", "Elena Petrova", "IT", "2025", "70%", "60/100", "elena@gmail.com"],
  ["09", "Diego Santos", "CSE", "2025", "68%", "58/100", "diego@gmail.com"],
];

const LeaderBoardTable = () => {
  const [showFilter, setShowFilter] = useState(false);

  return (
    <LbtRoot>
      {showFilter && (
        <Sidebar mobileOpen={showFilter} onMobileClose={() => setShowFilter(false)} />
      )}
      <LbtContainer>
        {/* Mobile Controls */}
        <LbtMobileControls>
          <div style={{ display: "flex", alignItems: "center", gap: "4px" }}>
            <div style={{ position: "relative", flex: 1 }}>
              <LbtSearchInput placeholder="Search" />
              <span
                style={{
                  position: "absolute",
                  left: "10px",
                  top: "50%",
                  transform: "translateY(-50%)",
                  color: "#bdbdbd"
                }}
              >
                <Search size={18} />
              </span>
            </div>
            <button
              style={{
                background: "#f5f5f5",
                borderRadius: "9999px",
                padding: "8px",
                border: "none",
                cursor: "pointer"
              }}
              onClick={() => setShowFilter(true)}
            >
              <SlidersHorizontal size={22} />
            </button>
            <button style={{ marginLeft: "4px" }}>
              <ChevronLeft size={20} />
            </button>
            <span style={{ padding: "4px 16px", borderRadius: "8px", fontWeight: 500 }}>
              1
            </span>
            <button style={{ marginLeft: "2px" }}>
              <ChevronRight size={20} />
            </button>
          </div>
          <LbtCheckBtn>Check My Position</LbtCheckBtn>
        </LbtMobileControls>

        {/* Desktop Controls */}
        <LbtDesktopControls>
          <LbtSearchWrapper>
            <LbtSearchInput placeholder="Search here..." />
            <span
              style={{
                position: "absolute",
                left: "20px",
                top: "50%",
                transform: "translateY(-50%)",
                color: "#bdbdbd"
              }}
            >
              <Search size={15} />
            </span>
          </LbtSearchWrapper>
          <LbtCheckBtn>Check My Position</LbtCheckBtn>
        </LbtDesktopControls>

        {/* Table */}
        <LbtTableWrapper>
          <LbtTable>
            <LbtTableHead>
              <tr>
                <LbtTableTH style={{ borderTopLeftRadius: "32px" }}>Rank</LbtTableTH>
                <LbtTableTH>Student Name</LbtTableTH>
                <LbtTableTH style={{ borderTopRightRadius: "32px" }}>Department</LbtTableTH>
                <LbtTableTH>Year</LbtTableTH>
                <LbtTableTH>Course Completion %</LbtTableTH>
                <LbtTableTH>Average Score</LbtTableTH>
                <LbtTableTH>Email</LbtTableTH>
              </tr>
            </LbtTableHead>
            <tbody>
              {leaderboardData.map(([rank, name, dept, year, comp, score, email], idx) => (
                <LbtTableRow key={rank}>
                  <LbtTableTD>{rank}</LbtTableTD>
                  <LbtTableTD>{name}</LbtTableTD>
                  <LbtTableTD>{dept}</LbtTableTD>
                  <LbtTableTD>{year}</LbtTableTD>
                  <LbtTableTD>{comp}</LbtTableTD>
                  <LbtTableTD>{score}</LbtTableTD>
                  <LbtTableTD>{email}</LbtTableTD>
                </LbtTableRow>
              ))}
            </tbody>
          </LbtTable>
        </LbtTableWrapper>
      </LbtContainer>
    </LbtRoot>
  );
};

export default LeaderBoardTable;
