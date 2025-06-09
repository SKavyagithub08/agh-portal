import React, { useState } from "react";
import { Search, SlidersHorizontal, ChevronLeft, ChevronRight } from "lucide-react";
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
	const [showFilter] = useState(false); // keep for mobile modal logic if needed

	return (
		<div className="lbt-root">
			<div className="lbt-container">
				{/* Mobile Search/Filter/Pagination */}
				<div className="lbt-mobile-controls">
					<div className="lbt-mobile-search-row">
						{/* Search Bar */}
						<div className="lbt-mobile-search-wrapper">
							<input
								type="text"
								placeholder="Search"
								className="lbt-mobile-search-input"
								style={{ boxShadow: "none", fontWeight: 400 }}
							/>
							<span className="lbt-mobile-search-icon">
								<Search size={15} />
							</span>
						</div>
						{/* Filter Icon (can be removed if not needed for mobile) */}
						<button
							className="lbt-mobile-filter-btn"
							// onClick={() => setShowFilter(true)}
							style={{ display: "none" }} // Hide filter button
						>
							<SlidersHorizontal size={20} className="lbt-mobile-filter-icon" />
						</button>
						{/* Pagination */}
						<button className="lbt-mobile-pagination-btn">
							<ChevronLeft size={20} className="lbt-mobile-pagination-icon" />
						</button>
						<span className="lbt-mobile-pagination-current">
							1
						</span>
						<button className="lbt-mobile-pagination-btn">
							<ChevronRight size={20} className="lbt-mobile-pagination-icon" />
						</button>
					</div>
					<button
						className="lbt-mobile-check-btn"
					>
						Check My Position
					</button>
				</div>

				{/* Remove SidebarFilters/modal for filters */}

				{/* Desktop Search & Button Row */}
				<div className="lbt-desktop-controls">
					{/* Search Bar */}
					<div className="lbt-desktop-search-wrapper">
						<input
							type="text"
							placeholder="Search here..."
							className="lbt-desktop-search-input"
							style={{
								boxShadow: "none",
								fontWeight: 400,
							}}
						/>
						<span className="lbt-desktop-search-icon">
							<Search size={15} />
						</span>
					</div>
					<button
						className="lbt-desktop-check-btn"
						style={{ minWidth: 180 }}
					>
						Check My Position
					</button>
				</div>
				{/* Table */}
				<div className="lbt-table-wrapper">
					<table className="lbt-table">
						<thead className="lbt-table-head">
							<tr>
								<th className="lbt-table-th lbt-table-th-left">Rank</th>
								<th className="lbt-table-th">Student Name</th>
								<th className="lbt-table-th">Department</th>
								<th className="lbt-table-th">Year</th>
								<th className="lbt-table-th">Course Completion %</th>
								<th className="lbt-table-th">Average Score</th>
								<th className="lbt-table-th lbt-table-th-right">Email</th>
							</tr>
						</thead>
						<tbody>
							{leaderboardData.map(
								([rank, name, dept, year, comp, score, email], idx) => (
									<tr
										key={rank}
										className={`lbt-table-row ${
											idx !== leaderboardData.length - 1
												? "lbt-table-row-border"
												: ""
										}`}
									>
										<td className="lbt-table-td">{rank}</td>
										<td className="lbt-table-td">{name}</td>
										<td className="lbt-table-td">{dept}</td>
										<td className="lbt-table-td">{year}</td>
										<td className="lbt-table-td">{comp}</td>
										<td className="lbt-table-td">{score}</td>
										<td className="lbt-table-td">{email}</td>
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
