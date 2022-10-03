import styled from 'styled-components';

export const TechnicalOverview = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 45%;
  padding-bottom: 30px;
`;
export const InfoItem = styled.div`
  font-size: 16px;
  text-transform: uppercase;
  font-weight: 500;
  border-bottom: 1px solid #ffff;
  padding: 8px 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 768px) {
    font-size: 14px;
  }
`;
export const Unit = styled.div`
  text-transform: lowercase;
  color: #ffff;
`;
export const TechnicalMain = styled.div`
  margin-bottom: 25px;
`;
export const TechnicalTitle = styled.h2`
  text-transform: uppercase;
  font-size: 16px;
  margin-bottom: 10px;
  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const WikiLink = styled.a`
  margin-top: 15px;
  text-decoration: none;
  color: #ffff;
  font-size: 18px;
  font-weight: 500;
`;
