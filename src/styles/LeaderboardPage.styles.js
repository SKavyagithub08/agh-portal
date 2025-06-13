import styled from "styled-components";

// Set the background to light grey to match the layout
export const LeaderboardPageWrapper = styled.div`
  display: flex;
  min-height: 100vh;
  width: 100%;
  background: #f5f5f5; /* Updated from #f9fafb to #f5f5f5 for consistency */

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const SidebarArea = styled.div`
  flex: 0 0 260px;
  background-color: #f5f5f5; /* Match the layout background */
  border-right: 1px solid #e5e7eb;

  @media (max-width: 768px) {
    display: none;
  }
`;

export const MainArea = styled.div`
  flex: 1;
  padding: 32px 24px;
  max-width: 1100px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 32px;
  box-sizing: border-box;
  background: #f5f5f5; /* Ensure main area has grey background */

  @media (max-width: 1024px) {
    padding: 24px 16px;
  }

  @media (max-width: 768px) {
    padding: 20px 12px;
    gap: 24px;
  }

  @media (max-width: 480px) {
    padding: 16px 8px;
    gap: 16px;
  }
`;
