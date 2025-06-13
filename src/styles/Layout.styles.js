import styled from 'styled-components';

export const LayoutRoot = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  background: #f5f5f5; /* Light grey background for entire app */
  overflow: hidden;
`;

export const LayoutMain = styled.div`
  display: flex;
  flex: 1;
  height: calc(100vh - 64px);
  overflow: hidden;
  flex-direction: row;
  background: #f5f5f5;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const LayoutSidebar = styled.div`
  display: none;
  width: 260px;
  min-width: 260px;
  max-width: 260px;
  background: #f5f5f5; /* Match main background */
  border-right: 1px solid #e0e0e0;
  height: 100%;
  box-sizing: border-box;
  font-family: 'Inter', sans-serif;
  font-size: 20px;
  color: #222;
  z-index: 2;

  @media (min-width: 768px) {
    display: block;
  }
`;

export const LayoutContent = styled.main`
  flex: 1;
  width: 100%;
  min-width: 0;
  min-height: 0;
  background: #f5f5f5;
  padding: 30px 32px;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1;
  height: 100%;
  box-sizing: border-box;
  justify-content: flex-start;

  @media (max-width: 1200px) {
    padding: 24px;
  }

  @media (max-width: 900px) {
    padding: 20px 16px;
  }

  @media (max-width: 600px) {
    padding: 16px 12px;
  }

  @media (max-width: 400px) {
    padding: 12px 8px;
  }
`;

export const CardContainer = styled.div`
  background: #fff; /* Card content white */
  border-radius: 18px;
  box-shadow: 0 6px 24px rgba(16, 24, 40, 0.13);
  padding: 24px 32px;
  margin-bottom: 32px;
  width: 100%;
  max-width: 1100px;
  overflow-x: auto;
  box-sizing: border-box;

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 12px;
  }

  @media (max-width: 480px) {
    padding: 16px;
    margin-bottom: 20px;
  }
`;

export const TableContainer = styled(CardContainer)`
  overflow-x: auto;
`;

export const LayoutContentChildren = styled.div`
  background: none;
  box-shadow: none;
  width: 100%;
`;
