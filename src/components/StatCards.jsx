import React from "react";
import { FaTrophy } from "react-icons/fa";
import "../StatCards.css";

const trophyColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

const topStudents = [
  {
    name: "Muskan Verma",
    dept: "IT",
    year: "2025",
    days: "105/200",
    score: "92/100",
    completion: "82%",
    avatar: "https://i.pravatar.cc/50?img=5",
  },
  {
    name: "Muskan Verma",
    dept: "IT",
    year: "2025",
    days: "105/200",
    score: "92/100",
    completion: "82%",
    avatar: "https://i.pravatar.cc/50?img=5",
  },
  {
    name: "Muskan Verma",
    dept: "IT",
    year: "2025",
    days: "105/200",
    score: "92/100",
    completion: "82%",
    avatar: "https://i.pravatar.cc/50?img=5",
  },
];

const StatCards = () => (
  <div className="statcards-root">
    <div className="statcards-list">
      {topStudents.map((student, index) => (
        <div key={index} className="statcard">
          <div className="statcard-header">
            <div className="statcard-header-left">
              <img
                src={student.avatar}
                alt="avatar"
                className="statcard-avatar"
                style={{
                  boxShadow: "0 2px 8px 0 rgba(16,24,40,0.10)",
                  background: "#fff",
                  marginRight: 8,
                }}
              />
              <div className="statcard-header-info">
                <p className="statcard-name">{student.name}</p>
                <p className="statcard-dept">
                  {student.dept} | {student.year}
                </p>
              </div>
            </div>
            <FaTrophy
              color={trophyColors[index]}
              size={44}
              style={{
                marginLeft: 8,
                background: "transparent",
                borderRadius: "50%",
              }}
            />
          </div>
          <div className="statcard-stats">
            <div>
              <p className="statcard-label">Active Days</p>
              <p className="statcard-value">{student.days}</p>
            </div>
            <div>
              <p className="statcard-label">Average Score</p>
              <p className="statcard-value">{student.score}</p>
            </div>
            <div>
              <p className="statcard-label">Course Completion</p>
              <p className="statcard-value">{student.completion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatCards;
