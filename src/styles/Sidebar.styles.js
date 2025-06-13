// src/styles/Sidebar.styles.js
import styled from 'styled-components';

export const SidebarContainer = styled.div`
  width: 260px;
  background: #fff;
  border-right: 1px solid #e5e7eb;
  font-family: 'Poppins', sans-serif;
  font-size: 15px;
  color: #374151;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 900px) {
    display: none !important;
  }
`;

export const SidebarScroll = styled.div`
  flex: 1;
  overflow-y: auto;
  padding: 18px;
  padding-bottom: 56px;
  box-sizing: border-box;

  &::-webkit-scrollbar {
    width: 6px;
  }
  &::-webkit-scrollbar-thumb {
    background-color: #e5e5e5;
    border-radius: 6px;
  }
  &::-webkit-scrollbar-track {
    background: #fff;
  }
`;

export const SidebarSection = styled.div`
  margin-bottom: 22px;
`;

export const SidebarSectionTitle = styled.h2`
  color: #888;
  font-weight: 500;
  margin-bottom: 8px;
  font-size: 13px;
  letter-spacing: 0.01em;
  padding-left: 2px;
`;

export const SidebarSearchWrapper = styled.div`
  position: relative;
  margin-bottom: 12px;
`;

export const SidebarSearchIcon = styled.div`
  position: absolute;
  left: 12px;
  top: 9px;
  height: 16px;
  width: 16px;
  color: #bdbdbd;
`;

export const SidebarSearchInput = styled.input`
  width: 70%;
  padding: 7px 12px 7px 34px;
  font-size: 14px;
  border: 1px solid #e5e7eb;
  border-radius: 6px;
  outline: none;
  background: #f8f9fa;
  transition: border 0.2s;

  &:focus {
    border-color: #d1d5db;
    box-shadow: 0 0 0 1px #d1d5db;
  }
`;

export const SidebarCheckboxGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: 7px;
`;

export const SidebarCategoryGroup = styled.div`
  display: flex;
  gap: 12px;
`;

export const SidebarYearGroup = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 10px 6px;
`;

export const SidebarCheckboxLabel = styled.label`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 13px;
  font-weight: 400;
`;

export const SidebarCheckbox = styled.input`
  width: 16px;
  height: 16px;
  border-radius: 4px;
  border: 1px solid #d1d5db;
  accent-color: #6366f1;
`;

export const SidebarCheckboxText = styled.span`
  font-size: 13px;
  font-weight: 400;
`;

export const SidebarClearBtn = styled.button`
  color: #0251fc;
  font-size: 14px;
  font-weight: 510;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0;
  text-align: left;
`;

export const SidebarShowBtn = styled.button`
  background: #6366f1;
  color: #fff;
  padding: 8px 28px;
  border-radius: 8px;
  font-weight: 600;
  font-size: 16px;
  border: none;
  cursor: pointer;
  box-shadow: 0 1px 3px 0 rgba(16, 24, 40, 0.08);
  transition: background 0.18s;
  width: 45%;

  &:hover {
    background: #4f46e5;
  }
`;

export const SidebarModalOverlay = styled.div`
  position: fixed;
  inset: 0;
  z-index: 100;
  background: rgba(0, 0, 0, 0.18);
  display: flex;
  justify-content: center;
  align-items: flex-start;
`;

export const SidebarModalPanel = styled.div`
  background: #fff;
  width: 95vw;
  max-width: 370px;
  margin-top: 190px;
  border-radius: 14px;
  box-shadow: 0 8px 32px rgba(16, 24, 40, 0.18);
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  animation: slideIn 0.22s ease;

  @keyframes slideIn {
    from {
      transform: translateY(40px);
      opacity: 0;
    }
    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
`;

export const SidebarModalHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 18px;
  font-size: 18px;
  font-weight: 600;
  color: #222;
  background: #fff;
  border-bottom: 1px solid #e5e7eb;
`;

export const SidebarModalCloseBtn = styled.button`
  background: none;
  border: none;
  font-size: 26px;
  color: #888;
  cursor: pointer;
  line-height: 1;
  padding: 0;
`;

export const SidebarFooter = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 16px 20px;
  background: #fff;
  border-top: 1px solid #e5e7eb;

  @media (max-width: 900px) {
    position: sticky;
    bottom: 0;
    z-index: 10;
    border-bottom-left-radius: 14px;
    border-bottom-right-radius: 14px;
    box-shadow: 0 -1px 8px rgba(16, 24, 40, 0.04);
  }
`;