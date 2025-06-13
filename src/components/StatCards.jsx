// src/components/StatCards.jsx
import React from "react";
import { FaTrophy } from "react-icons/fa";
import {
  StatCardsRoot,
  StatCardsList,
  StatCard,
  StatCardHeader,
  StatCardHeaderLeft,
  StatCardAvatar,
  StatCardHeaderInfo,
  StatCardName,
  StatCardDept,
  StatCardStats,
  StatCardStat,
  StatCardLabel,
  StatCardValue
} from "../styles/StatCards.styles";

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
  <StatCardsRoot>
    <StatCardsList>
      {topStudents.map((student, index) => (
        <StatCard key={index}>
          <StatCardHeader>
            <StatCardHeaderLeft>
              <StatCardAvatar src={student.avatar} alt="avatar" />
              <StatCardHeaderInfo>
                <StatCardName>{student.name}</StatCardName>
                <StatCardDept>
                  {student.dept} | {student.year}
                </StatCardDept>
              </StatCardHeaderInfo>
            </StatCardHeaderLeft>
            <FaTrophy
              color={trophyColors[index]}
              size={44}
              style={{ marginLeft: 8 }}
            />
          </StatCardHeader>
          <StatCardStats>
            <StatCardStat>
              <StatCardLabel>Active Days</StatCardLabel>
              <StatCardValue>{student.days}</StatCardValue>
            </StatCardStat>
            <StatCardStat>
              <StatCardLabel>Average Score</StatCardLabel>
              <StatCardValue>{student.score}</StatCardValue>
            </StatCardStat>
            <StatCardStat>
              <StatCardLabel>Course Completion</StatCardLabel>
              <StatCardValue>{student.completion}</StatCardValue>
            </StatCardStat>
          </StatCardStats>
        </StatCard>
      ))}
    </StatCardsList>
  </StatCardsRoot>
);

export default StatCards;
