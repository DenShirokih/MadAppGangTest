import styled from 'styled-components';

export const DragonWelcome = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  margin-bottom: 50px;
  font-family: 'Source Sans Pro', sans-serif;
`;

export const DragonTitle = styled.h1`
  display: block;
  margin-bottom: 20px;
  letter-spacing: -1px;
  font-size: 80px;
`;

export const Subscribe = styled.p`
  font-size: 24px;
  @media (max-width: 768px) {
    text-align: center;
  }
`;
