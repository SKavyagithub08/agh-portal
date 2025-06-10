import { Search, X } from "lucide-react";
import { useState } from "react";
import "../Sidebar.css";

export default function Sidebar({ mobileOpen, onMobileClose }) {
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

  // Sidebar content as a function for reuse
  const sidebarContent = (
    <>
      <div className="sidebar-scroll">
        {/* Filter Department */}
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Filter Department</h2>
          <div className="sidebar-search-wrapper">
            <Search className="sidebar-search-icon" />
            <input
              placeholder="Search Department"
              className="sidebar-search-input"
            />
          </div>
          <div className="sidebar-checkbox-group">
            {departments.map(dep => (
              <label key={dep} className="sidebar-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedDepartments.includes(dep)}
                  onChange={() => toggleSelection(dep, selectedDepartments, setSelectedDepartments)}
                  className="sidebar-checkbox"
                />
                <span className="sidebar-checkbox-text">{dep}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Course Category */}
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Course Category</h2>
          <div className="sidebar-category-group">
            {categories.map(cat => (
              <label key={cat} className="sidebar-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedCategories.includes(cat)}
                  onChange={() => toggleSelection(cat, selectedCategories, setSelectedCategories)}
                  className="sidebar-checkbox"
                />
                <span className="sidebar-checkbox-text">{cat}</span>
              </label>
            ))}
          </div>
        </div>

        {/* Passing Year */}
        <div className="sidebar-section">
          <h2 className="sidebar-section-title">Passing Year</h2>
          <div className="sidebar-year-group">
            {years.map(year => (
              <label key={year} className="sidebar-checkbox-label">
                <input
                  type="checkbox"
                  checked={selectedYears.includes(year)}
                  onChange={() => toggleSelection(year, selectedYears, setSelectedYears)}
                  className="sidebar-checkbox"
                />
                <span className="sidebar-checkbox-text">{year}</span>
              </label>
            ))}
          </div>
        </div>
      </div>
      <div className="sidebar-footer">
        <button onClick={clearAll} className="sidebar-clear-btn">
          Clear All
        </button>
        {/* Show Results button for mobile modal */}
        {mobileOpen && (
          <button className="sidebar-show-btn" onClick={onMobileClose}>
            Show Results
          </button>
        )}
      </div>
    </>
  );

  return (
    <>
      {/* Desktop sidebar */}
      <aside className="sidebar">{sidebarContent}</aside>
      {/* Mobile sidebar modal */}
      {mobileOpen && (
        <div className="sidebar-modal-overlay" onClick={onMobileClose}>
          <div
            className="sidebar-modal-panel"
            onClick={e => e.stopPropagation()}
          >
            <div className="sidebar-modal-header">
              Filters
              <button
                className="sidebar-modal-close-btn"
                onClick={onMobileClose}
                aria-label="Close"
              >
                <X size={26} />
              </button>
            </div>
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  );
}
