import React from "react";
import { Search } from "lucide-react";

const leaderboardData = [
	["04", "Luca Romano", "CSE", "2025", "80%", "80/100", "luca@gmail.com"],
	["05", "Mateo García", "EEE", "2025", "75%", "70/100", "mate@gmail.com"],
	["06", "Chen Wei", "CSE", "2025", "72%", "70/100", "chenwa@gmail.com"],
	["07", "Diego Santos", "CSE", "2025", "70%", "60/100", "diego@gmail.com"],
	["08", "Elena Petrova", "IT", "2025", "70%", "60/100", "elena@gmail.com"],
	["09", "Diego Santos", "CSE", "2025", "68%", "58/100", "diego@gmail.com"],
];

const LeaderBoardTable = () => (
	<div className="w-full px-6">
		{/* Card containing both search bar and table */}
		<div className="bg-white rounded-[10px] shadow-md overflow-hidden px-8 pt-7 pb-2">
			{/* Search & Button Row */}
			<div className="flex items-center justify-between mb-6">
				{/* Search Bar */}
				<div className="relative flex-1 max-w-[330px]">
					<input
						type="text"
						placeholder="Search here..."
						className="w-full h-[45px] pl-11.5 pr-4 text-[15px] font-normal bg-[#f2f2f2] rounded-full border-0 outline-none placeholder:text-[#a2a2a2] shadow-none"
						style={{
							boxShadow: "none",
							fontWeight: 400,
						}}
					/>
					<span className="absolute left-5 top-1/2 -translate-y-1/2 text-[#bdbdbd]">
						<Search size={15} />
					</span>
				</div>
				{/* Button */}
				<button
					className="ml-7 px-7 h-[40px] bg-[#ff2847] text-white text-[17px] rounded-[5px] shadow-none hover:bg-[#e11d48] transition-all flex items-center"
					style={{ minWidth: 180 }}
				>
					Check My Position
				</button>
			</div>

			{/* Table */}
			<table className="w-full text-sm text-left">
				<thead className="bg-[#e6e6e6] text-[#636363] text-[13.5px] font-semibold">
					<tr>
						<th className="px-6 py-4 rounded-tl-2xl rounded-bl-2xl">Rank</th>
						<th className="px-6 py-4">Student Name</th>
						<th className="px-6 py-4">Department</th>
						<th className="px-6 py-4">Year</th>
						<th className="px-6 py-4">Course Completion %</th>
						<th className="px-6 py-4">Average Score</th>
						<th className="px-6 py-4 rounded-tr-2xl rounded-br-2xl">Email</th>
					</tr>
				</thead>
				<tbody>
					{leaderboardData.map(
						([rank, name, dept, year, comp, score, email], idx) => (
							<tr
								key={rank}
								className={`text-[#444] text-[13.5px] ${
									idx !== leaderboardData.length - 1
										? "border-b border-[#eee]"
										: ""
								}`}
							>
								<td className="px-6 py-4">{rank}</td>
								<td className="px-6 py-4">{name}</td>
								<td className="px-6 py-4">{dept}</td>
								<td className="px-6 py-4">{year}</td>
								<td className="px-6 py-4">{comp}</td>
								<td className="px-6 py-4">{score}</td>
								<td className="px-6 py-4">{email}</td>
							</tr>
						)
					)}
				</tbody>
			</table>
		</div>
	</div>
);

export default LeaderBoardTable;
