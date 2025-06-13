// LeaderBoardTable.styles.js
import styled from 'styled-components';

export const LbtRoot = styled.div`
  width: 100%;
  padding-left: 0;
  padding-right: 0;
  display: flex;
  justify-content: center;

  @media (min-width: 768px) {
    padding-left: 0;
    padding-right: 0;
  }
`;

export const LbtContainer = styled.div`
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 2px 8px 0 rgba(16, 24, 40, 0.10);
  border: 1px solid #e5e7eb;
  overflow: hidden;
  padding: 28px 36px 18px 36px;
  margin-bottom: 10px;
  max-width: 100%;
  width: 100%;
  margin-left: 0;
  margin-right: 0;
  box-sizing: border-box;

  @media (max-width: 1200px) {
    padding: 18px 12px 12px 12px;
  }

  @media (max-width: 1024px) {
    padding: 12px 4vw;
  }

  @media (max-width: 900px) {
    padding: 8px 2vw;
  }

  @media (max-width: 768px) {
    padding: 6px 0;
    border-radius: 0;
    box-shadow: none;
  }

  @media (max-width: 500px) {
    border-radius: 12px;
  }
`;

export const LbtTableWrapper = styled.div`
  overflow-x: auto;
  margin: 0;
  max-width: 100%;
  width: 100%;
`;

export const LbtTable = styled.table`
  width: 100%;
  min-width: 900px;
  border-collapse: separate;
  border-spacing: 0;
  border-radius: 16px;
  font-size: 15px;
  max-width: 100%;
  margin: 0;
  border: none;

  th, td {
    border-bottom: 1px solid #e7e7e7;
  }

  th:last-child, td:last-child {
    border-right: none;
  }

  thead tr {
    border-bottom: 1px solid #e7e7e7;
  }

  tbody tr:last-child td {
    border-bottom: none;
  }

  @media (max-width: 1024px) {
    font-size: 14px;
    min-width: 700px;
  }

  @media (max-width: 900px) {
    min-width: 600px;
  }

  @media (max-width: 768px) {
    min-width: 500px;
    font-size: 13px;
  }

  @media (max-width: 500px) {
    font-size: 12px;
    border-radius: 16px;
  }
`;

export const LbtTableHead = styled.thead`
  background: #ecebeb;
  border: none;
  color: #595a5d;
`;

export const LbtTableTH = styled.th`
  padding: 16px 24px;
  background: #ecebeb;
  border: none;
  border-bottom: 1px solid #e5e7eb;
  border-right: none;

  &:first-child {
    border-top-left-radius: 32px;
    border-bottom-left-radius: 32px;
  }

  &:last-child {
    border-top-right-radius: 32px;
    border-bottom-right-radius: 32px;
  }

  @media (max-width: 500px) {
    padding: 12px 6px;
    font-size: 14px;
    border-radius: 0 !important;

    &:first-child {
      border-top-left-radius: 16px !important;
      border-bottom-left-radius: 16px !important;
    }

    &:nth-child(3) {
      border-top-right-radius: 16px !important;
      border-bottom-right-radius: 16px !important;
    }
  }
`;

export const LbtTableRow = styled.tr`
  color: #444;
  font-size: 13.5px;
  height: 55px;
`;

export const LbtTableTD = styled.td`
  padding: 16px 24px;
  text-align: center;
`;

export const LbtMobileControls = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;

  @media (min-width: 768px) {
    display: none;
  }
`;

export const LbtDesktopControls = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  margin-bottom: 24px;
  gap: 0;
  width: 100%;

  @media (min-width: 768px) {
    justify-content: space-between;
    gap: 12px;
  }
`;

export const LbtSearchWrapper = styled.div`
  position: relative;
  flex: 1;
  max-width: 400px;
`;

export const LbtSearchInput = styled.input`
  width: 60%;
  height: 40px;
  padding-left: 46px;
  padding-right: 16px;
  font-size: 15px;
  font-weight: 400;
  background: #f1f3f4;
  border-radius: 9999px;
  border: none;
  outline: none;
  box-shadow: none;
  color: #222;

  @media (max-width: 768px) {
    width: 100%;
    font-size: 15px;
    height: 44px;
    border-radius: 8px;
    padding-left: 36px;
  }
`;

export const LbtCheckBtn = styled.button`
  width: 197px;
  min-width: 180px;
  height: 37px;
  background: #ff2847;
  color: #fff;
  font-size: 17px;
  border-radius: 7px;
  border: none;
  font-weight: 300;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-left: 24px;
  transition: background 0.2s;

  &:hover {
    background: #e11d48;
  }

  @media (max-width: 768px) {
    min-width: 0;
    width: 48%;
    font-size: 17px;
    height: 44px;
    border-radius: 8px;
    margin-left: 8px;
    padding: 0;
  }
`;
