import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
import Sidebar from "./Sidebar";
import "../LeaderBoardTable.css";

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
    <div className="lbt-root">
      {/* Only render Sidebar for mobile filter modal */}
      {showFilter && <Sidebar mobileOpen={showFilter} onMobileClose={() => setShowFilter(false)} />}
      <div className="lbt-container">
        {/* Controls Row: Only one set of controls visible at a time */}
        <div className="lbt-controls-combo">
          <div className="lbt-mobile-search-row">
            <div className="lbt-mobile-search-wrapper">
              <input
                type="text"
                placeholder="Search"
                className="lbt-mobile-search-input"
              />
              <span className="lbt-mobile-search-icon">
                <Search size={18} />
              </span>
            </div>
            <button
              className="lbt-mobile-filter-btn"
              onClick={() => setShowFilter(true)}
            >
              <SlidersHorizontal size={22} className="lbt-mobile-filter-icon" />
            </button>
            <button className="lbt-mobile-pagination-btn">
              <ChevronLeft size={20} className="lbt-mobile-pagination-icon" />
            </button>
            <span className="lbt-mobile-pagination-current">1</span>
            <button className="lbt-mobile-pagination-btn">
              <ChevronRight size={20} className="lbt-mobile-pagination-icon" />
            </button>
          </div>
          <button className="lbt-mobile-check-btn">Check My Position</button>
        </div>
        <div className="lbt-desktop-controls">
          <div className="lbt-desktop-search-wrapper">
            <input
              type="text"
              placeholder="Search here..."
              className="lbt-desktop-search-input"
            />
            <span className="lbt-desktop-search-icon">
              <Search size={15} />
            </span>
          </div>
          <button className="lbt-desktop-check-btn">Check My Position</button>
        </div>
        {/* Table */}
        <div className="lbt-table-wrapper">
          <table className="lbt-table">
            <thead className="lbt-table-head">
              <tr>
                <th className="lbt-table-th lbt-table-th-left">Rank</th>
                <th className="lbt-table-th">Student Name</th>
                <th className="lbt-table-th lbt-table-th-right">Department</th>
                <th className="lbt-table-th hide-mobile">Year</th>
                <th className="lbt-table-th hide-mobile">Course Completion %</th>
                <th className="lbt-table-th hide-mobile">Average Score</th>
                <th className="lbt-table-th hide-mobile">Email</th>
              </tr>
            </thead>
            <tbody>
              {leaderboardData.map(
                ([rank, name, dept, year, comp, score, email], idx) => (
                  <tr
                    key={rank}
                    className={`lbt-table-row ${idx !== leaderboardData.length - 1
                      ? "lbt-table-row-border"
                      : ""
                      }`}
                  >
                    <td className="lbt-table-td">{rank}</td>
                    <td className="lbt-table-td">{name}</td>
                    <td className="lbt-table-td">{dept}</td>
                    <td className="lbt-table-td hide-mobile">{year}</td>
                    <td className="lbt-table-td hide-mobile">{comp}</td>
                    <td className="lbt-table-td hide-mobile">{score}</td>
                    <td className="lbt-table-td hide-mobile">{email}</td>
                  </tr>
                )
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default LeaderBoardTable;