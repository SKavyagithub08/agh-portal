import React, { useState } from "react";
import { Search, X } from "lucide-react";
import {
  SidebarContainer,
  SidebarScroll,
  SidebarSection,
  SidebarSectionTitle,
  SidebarSearchWrapper,
  SidebarSearchIcon,
  SidebarSearchInput,
  SidebarCheckboxGroup,
  SidebarCategoryGroup,
  SidebarYearGroup,
  SidebarCheckboxLabel,
  SidebarCheckbox,
  SidebarCheckboxText,
  SidebarFooter,
  SidebarClearBtn,
  SidebarShowBtn,
  SidebarModalOverlay,
  SidebarModalPanel,
  SidebarModalHeader,
  SidebarModalCloseBtn
} from "../styles/Sidebar.styles";

const SidebarContent = ({
  selectedDepartments,
  selectedCategories,
  selectedYears,
  toggleSelection,
  departments,
  categories,
  years,
  setSelectedDepartments,
  setSelectedCategories,
  setSelectedYears,
}) => (
  <>
    
      {/* Filter Department */}
      <SidebarSection>
        <SidebarSectionTitle>Filter Department</SidebarSectionTitle>
        <SidebarSearchWrapper>
          <SidebarSearchIcon>
            <Search size={16} />
          </SidebarSearchIcon>
          <SidebarSearchInput placeholder="Search Department" />
        </SidebarSearchWrapper>
        <SidebarCheckboxGroup>
          {departments.map(dep => (
            <SidebarCheckboxLabel key={dep}>
              <SidebarCheckbox
                type="checkbox"
                checked={selectedDepartments.includes(dep)}
                onChange={() =>
                  toggleSelection(dep, selectedDepartments, setSelectedDepartments)
                }
              />
              <SidebarCheckboxText>{dep}</SidebarCheckboxText>
            </SidebarCheckboxLabel>
          ))}
        </SidebarCheckboxGroup>
      </SidebarSection>

      {/* Course Category */}
      <SidebarSection>
        <SidebarSectionTitle>Course Category</SidebarSectionTitle>
        <SidebarCategoryGroup>
          {categories.map(cat => (
            <SidebarCheckboxLabel key={cat}>
              <SidebarCheckbox
                type="checkbox"
                checked={selectedCategories.includes(cat)}
                onChange={() =>
                  toggleSelection(cat, selectedCategories, setSelectedCategories)
                }
              />
              <SidebarCheckboxText>{cat}</SidebarCheckboxText>
            </SidebarCheckboxLabel>
          ))}
        </SidebarCategoryGroup>
      </SidebarSection>

      {/* Passing Year */}
      <SidebarSection>
        <SidebarSectionTitle>Passing Year</SidebarSectionTitle>
        <SidebarYearGroup>
          {years.map(year => (
            <SidebarCheckboxLabel key={year}>
              <SidebarCheckbox
                type="checkbox"
                checked={selectedYears.includes(year)}
                onChange={() =>
                  toggleSelection(year, selectedYears, setSelectedYears)
                }
              />
              <SidebarCheckboxText>{year}</SidebarCheckboxText>
            </SidebarCheckboxLabel>
          ))}
        </SidebarYearGroup>
      </SidebarSection>
   
  </>
);

const Sidebar = ({ mobileOpen, onMobileClose }) => {
  const departments = [
    "CSE", "AI & DS", "IT", "CSE (AI & ML)", "ECE", "CSE (CC)", "Cyber Security", "CS BS"
  ];
  const categories = ["UG", "PG"];
  const years = [2022, 2023, 2024, 2025, 2026, 2027, 2028];

  const [selectedDepartments, setSelectedDepartments] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);

  const toggleSelection = (item, list, setList) => {
    setList(list.includes(item) ? list.filter(i => i !== item) : [...list, item]);
  };

  const clearAll = () => {
    setSelectedDepartments([]);
    setSelectedCategories([]);
    setSelectedYears([]);
  };

  return (
    <>
      {/* Desktop Sidebar */}
      {!mobileOpen && (
        <SidebarContainer>
           <SidebarScroll>
               <SidebarContent
         
            selectedDepartments={selectedDepartments}
            selectedCategories={selectedCategories}
            selectedYears={selectedYears}
            toggleSelection={toggleSelection}
            departments={departments}
            categories={categories}
            years={years}
            setSelectedDepartments={setSelectedDepartments}
            setSelectedCategories={setSelectedCategories}
            setSelectedYears={setSelectedYears}
          />
          </SidebarScroll>
          <SidebarFooter>
            <SidebarClearBtn onClick={clearAll}>Clear All</SidebarClearBtn>
          </SidebarFooter>
        </SidebarContainer>
      )}

      {/* Mobile Sidebar Modal */}
      {mobileOpen && (
        <SidebarModalOverlay onClick={onMobileClose}>
          <SidebarModalPanel onClick={e => e.stopPropagation()}>
            <SidebarModalHeader>
              Filters
              <SidebarModalCloseBtn onClick={onMobileClose} aria-label="Close">
                <X size={26} />
              </SidebarModalCloseBtn>
            </SidebarModalHeader>
            <SidebarScroll> 

            <SidebarContent
              selectedDepartments={selectedDepartments}
              selectedCategories={selectedCategories}
              selectedYears={selectedYears}
              toggleSelection={toggleSelection}
              departments={departments}
              categories={categories}
              years={years}
              setSelectedDepartments={setSelectedDepartments}   // ✅ Add this
              setSelectedCategories={setSelectedCategories}     // ✅ Add this
               setSelectedYears={setSelectedYears}               // ✅ Add this
            />
            </SidebarScroll>
            <SidebarFooter>
              <SidebarClearBtn onClick={clearAll}>Clear All</SidebarClearBtn>
              <SidebarShowBtn onClick={onMobileClose}>Show Results</SidebarShowBtn>
            </SidebarFooter>
          </SidebarModalPanel>
        </SidebarModalOverlay>
      )}
    </>
  );
};

export default Sidebar;
