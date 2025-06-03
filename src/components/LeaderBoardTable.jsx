import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight, X } from "lucide-react";

const leaderboardData = [
	["04", "Luca Romano", "CSE", "2025", "80%", "80/100", "luca@gmail.com"],
	["05", "Mateo García", "EEE", "2025", "75%", "70/100", "mate@gmail.com"],
	["06", "Chen Wei", "CSE", "2025", "72%", "70/100", "chenwa@gmail.com"],
	["07", "Diego Santos", "CSE", "2025", "70%", "60/100", "diego@gmail.com"],
	["08", "Elena Petrova", "IT", "2025", "70%", "60/100", "elena@gmail.com"],
	["09", "Diego Santos", "CSE", "2025", "68%", "58/100", "diego@gmail.com"],
];

const SidebarFilters = ({ onClose }) => {
  const departments = [
    "CSE", "AI & DS", "IT", "CSE (AI & ML)", "ECE", "CSE (CC)", "Cyber Security"
  ];
  const categories = ["UG", "PG"];
  const years = [2022, 2023, 2024, 2025, 2026, 2027];

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState(["UG", "PG"]);
  const [selectedYears, setSelectedYears] = useState([]);

  const toggle = (item, list, setList) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const clearAll = () => {
    setSelectedDepartments([]);
    setSelectedCategories([]);
    setSelectedYears([]);
  };

  return (
    <div className="relative w-full max-w-[370px] h-[90vh] bg-white rounded-2xl flex flex-col shadow-lg">
      {/* Sticky Header */}
      <div className="sticky top-0 z-10 bg-white rounded-t-2xl border-b flex items-center justify-between px-5 py-4">
        <span className="text-xl font-semibold">Filters</span>
        <button onClick={onClose}>
          <X size={28} />
        </button>
      </div>
      {/* Scrollable Content */}
      <div className="flex-1 overflow-y-auto px-5 pb-32 pt-2">
        {/* Filter Department */}
        <div className="mb-6">
          <h2 className="text-[#888] font-medium mb-2">Filter Department</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
            <input
              placeholder="Search Department"
              className="w-full pl-10 pr-3 py-2 text-[16px] border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div className="space-y-4">
            {departments.map(dep => (
              <label key={dep} className="flex items-center gap-3 text-[16px]">
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dep)}
                  onChange={() => toggle(dep, selectedDepartments, setSelectedDepartments)}
                  className="w-5 h-5 rounded border-gray-300 accent-[#6366f1]"
                />
                <span>{dep}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Course Category */}
        <div className="mb-6">
          <h2 className="text-[#888] font-medium mb-2">Course Category</h2>
          <div className="flex flex-col gap-4">
            {categories.map(cat => (
              <label key={cat} className="flex items-center gap-3 text-[16px]">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggle(cat, selectedCategories, setSelectedCategories)}
                  className="w-5 h-5 rounded border-gray-300 accent-[#6366f1]"
                />
                <span>{cat}</span>
              </label>
            ))}
          </div>
        </div>
        {/* Passing Year */}
        <div className="mb-6">
          <h2 className="text-[#888] font-medium mb-2">Passing Year</h2>
          <div className="grid grid-cols-3 gap-y-4 gap-x-4">
            {years.map(year => (
              <label key={`year-${year}`} className="flex items-center gap-3 text-[16px]">
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => toggle(year, selectedYears, setSelectedYears)}
                  className="w-5 h-5 rounded border-gray-300 accent-[#6366f1]"
                />
                <span>{year}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      {/* Fixed Footer */}
      <div className="absolute bottom-0 left-0 w-full border-t bg-white rounded-b-2xl flex items-center justify-between px-5 py-4">
        <button
          onClick={clearAll}
          className="text-[#6366f1] text-[16px] font-medium"
        >
          Clear All
        </button>
        <button
          className="bg-[#6366f1] text-white px-7 py-2 rounded-lg font-semibold text-[17px]"
        >
          Show Results
        </button>
      </div>
    </div>
  );
};

const LeaderBoardTable = () => {
	const [showFilter, setShowFilter] = useState(false);

	return (
		<div className="w-full px-2 md:px-6">
			<div className="bg-white rounded-[10px] shadow-md overflow-hidden px-2 md:px-8 pt-7 pb-2">
				{/* Mobile Search/Filter/Pagination */}
				<div className="flex flex-col gap-3 mb-4 md:hidden">
					<div className="flex items-center gap-1">
						{/* Search Bar */}
						<div className="relative flex-1">
							<input
								type="text"
								placeholder="Search"
								className="w-full h-[35px] pl-8 pr-2 text-[13px] font-normal bg-[#f5f5f5] rounded-full border-0 outline-none placeholder:text-[#a2a2a2] shadow-none"
								style={{ boxShadow: "none", fontWeight: 400 }}
							/>
							<span className="absolute left-2.5 top-1/2 -translate-y-1/2 text-[#bdbdbd]">
								<Search size={15} />
							</span>
						</div>
						{/* Filter Icon */}
						<button
							className="bg-[#f5f5f5] rounded-full p-2 flex items-center justify-center ml-5"
							onClick={() => setShowFilter(true)}
						>
							<SlidersHorizontal size={20} className="text-[#888]" />
						</button>
						{/* Pagination */}
						<button className="bg-[#ffff] rounded-lg p-2 ml-2">
							<ChevronLeft size={20} className="text-[#888]" />
						</button>
						<span className="border border-[#e5e5e5] rounded-lg px-4 py-1 text-[17px] font-medium bg-white">
							1
						</span>
						<button className="bg-[#ffff] rounded-lg p-2 mr-2">
							<ChevronRight size={20} className="text-[#888]" />
						</button>
					</div>
					<button
						className="w-full px-7 h-[44px] bg-[#ff2847] text-white text-[17px] rounded-[7px] shadow-none hover:bg-[#e11d48] transition-all font-semibold"
					>
						Check My Position
					</button>
				</div>

				{/* Filter Modal for Mobile */}
				{showFilter && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-transparent md:hidden">
						<SidebarFilters onClose={() => setShowFilter(false)} />
					</div>
				)}

				{/* Desktop Search & Button Row (unchanged) */}
				<div className="hidden md:flex flex-row items-center justify-between mb-6 gap-3">
					{/* Search Bar */}
					<div className="relative flex-1 max-w-full md:max-w-[330px]">
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
					<button
						className="w-full md:w-auto px-7 h-[40px] bg-[#ff2847] text-white text-[17px] rounded-[5px] shadow-none hover:bg-[#e11d48] transition-all flex items-center justify-center"
						style={{ minWidth: 180 }}
					>
						Check My Position
					</button>
				</div>
				{/* Table */}
				<div className="overflow-x-auto">
					<table className="w-full text-sm text-left min-w-[500px]">
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
		</div>
	);
};

export default LeaderBoardTable;
