// src/styles/StatCards.styles.js
import styled from "styled-components";

export const StatCardsRoot = styled.div`
  width: 100%;
  padding: 1rem;
`;

export const StatCardsList = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;

  @media (min-width: 768px) {
    flex-direction: row;
  }
`;

export const StatCard = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.1);
  padding: 16px;
  flex: 1;
`;

export const StatCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const StatCardHeaderLeft = styled.div`
  display: flex;
  align-items: center;
`;

export const StatCardAvatar = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 8px;
  background: #fff;
  box-shadow: 0 2px 8px rgba(16, 24, 40, 0.1);
`;

export const StatCardHeaderInfo = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StatCardName = styled.p`
  font-size: 1rem;
  font-weight: 600;
  margin: 0;
`;

export const StatCardDept = styled.p`
  font-size: 0.875rem;
  color: #555;
  margin: 0;
`;

export const StatCardStats = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 16px;
`;

export const StatCardStat = styled.div`
  text-align: center;
  flex: 1;
`;

export const StatCardLabel = styled.p`
  color: #ff3e3e;
  font-weight: 700;
  margin-bottom: 0;
  letter-spacing: 0.01em;
  font-size: 11.66px;
`;


export const StatCardValue = styled.p`
  font-size: 1rem;
  font-weight: 500;
  margin: 4px 0 0;
`;
