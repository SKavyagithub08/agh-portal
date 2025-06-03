import React from "react";
import { FaTrophy } from "react-icons/fa";

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
  <div className="flex justify-center">
    <div className="flex flex-col gap-3.5 md:flex-row md:gap-6 px-2 md:px-6">
      {topStudents.map((student, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-4 md:p-5 w-full md:w-[320px] flex flex-col justify-between"
        >
         
          <div className="flex items-center justify-between mb-3">
            <div className="flex items-center gap-3">
              <img
                src={student.avatar}
                alt="avatar"
                className="w-8.5 h-8.5 rounded-full object-cover border border-gray-300"
              />
              <div className="leading-tight">
                <p className="text-[12.5px] font-bold text-[#1a1a1a]">
                  {student.name}
                </p>
                <p className="text-sm text-[#889] font-small">
                  {student.dept} | {student.year}
                </p>
              </div>
            </div>
            <FaTrophy color={trophyColors[index]} size={40} />
          </div>

          
          <div className="flex justify-between text-center text-[12.5px] mt-1 gap-x-2.5">
            <div>
              <p className="text-[#ff3e3e] font-semibold">Active Days</p>
              <p className="text-[#1a1a1a] font-medium">{student.days}</p>
            </div>
            <div>
              <p className="text-[#ff3e3e] font-semibold">Average Score</p>
              <p className="text-[#1a1a1a] font-medium">{student.score}</p>
            </div>
            <div>
              <p className="text-[#ff3e3e] font-semibold">Course Completion</p>
              <p className="text-[#1a1a1a] font-medium">{student.completion}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
);

export default StatCards;
