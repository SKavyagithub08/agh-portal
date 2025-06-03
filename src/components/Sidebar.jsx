import { Search } from "lucide-react";
import { useState } from "react";

export default function Sidebar() {
  const departments = [
    "CSE", "AI & DS", "IT", "CSE (AI & ML)", "ECE", "CSE (CC)", "Cyber Security", "CS BS"
  ];
  const categories = ["UG", "PG"];
  const years = [2022, 2023, 2023, 2024, 2025, 2026, 2027, 2028];

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const toggleSelection = (item, list, setList) => {
    setList(
      list.includes(item)
        ? list.filter(i => i !== item)
        : [...list, item]
    );
  };

  const clearAll = () => {
    setSelectedDepartments([]);
    setSelectedCategories([]);
    setSelectedYears([]);
  };

  return (
    <aside className="w-[260px] min-w-[260px] bg-white border-r border-gray-200 font-sans text-sm text-gray-700 flex flex-col h-[calc(100vh-64px)]">
      {/* Scrollable content */}
      <div className="flex-1 overflow-y-auto px-6 py-6 custom-scroll">
        {/* Filter Department */}
        <div className="mb-6">
          <h2 className="text-gray-700 font-medium mb-2">Filter Department</h2>
          <div className="relative mb-4">
            <Search className="absolute left-3 top-2.5 h-4 w-4 text-gray-400" />
            <input
              placeholder="Search Department"
              className="w-full pl-9 pr-3 py-2 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-gray-300"
            />
          </div>
          <div className="space-y-3">
            {departments.map(dep => (
              <label key={dep} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dep)}
                  onChange={() => toggleSelection(dep, selectedDepartments, setSelectedDepartments)}
                  className="w-5 h-5 rounded border-gray-300 text-gray-600 focus:ring-0"
                />
                <span className="text-[16px]">{dep}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Course Category */}
        <div className="mb-6">
          <h2 className="text-gray-700 font-medium mb-3">Course Category</h2>
          <div className="flex gap-6">
            {categories.map(cat => (
              <label key={cat} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
                  className="w-5 h-5 rounded border-gray-300 text-gray-600 focus:ring-0"
                />
                <span className="text-[16px]">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Passing Year */}
        <div className="mb-6">
          <h2 className="text-gray-700 font-medium mb-3">Passing Year</h2>
          <div className="grid grid-cols-3 gap-y-4 gap-x-4">
            {years.map(year => (
              <label key={year} className="flex items-center space-x-3">
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => toggleSelection(year, selectedYears, setSelectedYears)}
                  className="w-5 h-5 rounded border-gray-300 text-gray-600 focus:ring-0"
                />
                <span className="text-[16px]">{year}</span>
              </label>
            ))}
          </div>
        </div>
      </div>

      {/* Fixed Clear All Button */}
      <div className="px-6 py-4 ">
        <button
          onClick={clearAll}
          className="text-blue-700 text-[15px] font-medium "
        >
          Clear All
        </button>
      </div>
    </aside>
  );
}
