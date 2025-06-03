
// import React from "react";
// import { FaTrophy } from "react-icons/fa";

// const trophyColors = ["#FFD700", "#C0C0C0", "#CD7F32"];

// const topStudents = [
//   {
//     name: "Muskan Verma",
//     dept: "IT",
//     year: "2025",
//     days: "105/200",
//     score: "92/100",
//     completion: "82%",
//     avatar: "https://i.pravatar.cc/50?img=5",
//   },
//   {
//     name: "Muskan Verma",
//     dept: "IT",
//     year: "2025",
//     days: "105/200",
//     score: "92/100",
//     completion: "82%",
//     avatar: "https://i.pravatar.cc/50?img=5",
//   },
//   {
//     name: "Muskan Verma",
//     dept: "IT",
//     year: "2025",
//     days: "105/200",
//     score: "92/100",
//     completion: "82%",
//     avatar: "https://i.pravatar.cc/50?img=5",
//   },
// ];

// const StatCards = () => (
//   <div className="flex gap-6 px-6 mb-8">
//     {topStudents.map((student, index) => (
//       <div
//         key={index}
//         className="bg-white rounded-2xl shadow-lg p-6 w-[360px] flex flex-col justify-between"
//       >
//         <div className="flex items-center justify-between mb-4">
//           <div className="flex items-center gap-3">
//             <img
//               src={student.avatar}
//               alt="avatar"
//               className="w-12 h-12 rounded-full object-cover border border-gray-200"
//             />
//             <div className="leading-tight">
//               <p className="text-[1.05rem] font-semibold text-[#1a1a1a]">
//                 {student.name}
//               </p>
//               <p className="text-sm text-[#8c8c8c] font-medium">
//                 {student.dept} | {student.year}
//               </p>
//             </div>
//           </div>
//           <FaTrophy color={trophyColors[index]} size={44} />
//         </div>

//         <div className="flex justify-between text-center text-sm">
//           <div>
//             <p className="text-[#ff3e3e] font-semibold">Active Days</p>
//             <p className="text-[#181818] font-medium">{student.days}</p>
//           </div>
//           <div>
//             <p className="text-[#ff3e3e] font-semibold">Average Score</p>
//             <p className="text-[#181818] font-medium">{student.score}</p>
//           </div>
//           <div>
//             <p className="text-[#ff3e3e] font-semibold">Course Completion</p>
//             <p className="text-[#181818] font-medium">{student.completion}</p>
//           </div>
//         </div>
//       </div>
//     ))}
//   </div>
// );

// export default StatCards;


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
    <div className="flex gap-6 flex-wrap max-w-6xl w-full justify-center px-4">
      {topStudents.map((student, index) => (
        <div
          key={index}
          className="bg-white rounded-xl shadow-md p-5 w-[320px] flex flex-col justify-between"
        >
          {/* Top Section */}
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

          {/* Stats */}
          <div className="flex justify-between text-center text-[12px] mt-2">
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
