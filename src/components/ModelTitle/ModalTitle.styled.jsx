import styled from 'styled-components';

export const Title = styled.h2`
  margin-bottom: 20px;
  font-weight: 400;
  font-size: 20px;
  padding-left: 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const FirstFlight = styled.div`
  margin-bottom: 20px;
  padding-left: 50px;
  @media (max-width: 768px) {
    padding: 0;
  }
`;
export const WrapperTitle = styled.div`
  margin-bottom: 40px;
`;
export const Modal = styled.p`
  font-size: 34px;
  font-weight: 500;
  @media (max-width: 768px) {
    /* font-size: 22px; */
  }
`;
export const Description = styled.p`
  line-height: 26px;
  margin-bottom: 15px;
  padding-left: 50px;
  @media (max-width: 768px) {
    font-size: 16px;
    line-height: 24px;
    padding: 0;
  }
`;
export const Date = styled.p`
  font-size: 26px;
`;
export const FirstFlightTitle = styled.p`
  margin-bottom: 15px;
  font-size: 20px;
`;
export const Button = styled.button`
  width: 120px;
  height: 40px;
  font-size: 14px;
  background-color: #000000;
  border: 2px solid #ffffff;
  color: #ffffff;
  margin-bottom: 15px;
  :hover {
    border: none;
    color: #000000;
    background-color: #ffffff;
  }
`;
