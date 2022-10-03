import styled from 'styled-components';
import { ReactComponent as Logo } from 'icons/cib-spacex.svg';

export const MainLogo = styled(Logo)`
  position: absolute;
  left: -20px;
  top: 4px;
  width: 150px;
  height: 50px;
  fill: #ffffff;
`;

export const LogOutBtn = styled.button`
  font-size: 24px;
  font-weight: 600;
  text-transform: uppercase;
  color: #ffffff;
  background-color: transparent;
  border: none;
`;

export const StyledMenu = styled.nav`
  position: relative;
  display: none;
  flex-direction: column;
  justify-content: center;
  background-image: linear-gradient(
    to bottom,
    #000000,
    #000000,
    #000000,
    #000000,
    #000000,
    #181818,
    #292929,
    #3b3b3b,
    #676767,
    #969797,
    #c8caca,
    #fdffff
  );
  height: 100vh;
  z-index: 1000;
  padding: 2rem;
  position: fixed;
  top: 0;
  right: 0;
  transition: transform 0.3s ease-in-out;
  transform: ${({ open }) => (open ? 'translateX(0)' : 'translateX(100%)')};

  @media (max-width: 768px) {
    width: 100%;
    display: flex;
  }

  a {
    font-size: 2rem;
    text-transform: uppercase;
    color: #ffffff;
    padding-bottom: 2rem;
    font-weight: bold;
    letter-spacing: 0.5rem;
    text-decoration: none;
    transition: color 0.3s linear;

    @media (max-width: 768px) {
      font-size: 1.5rem;
      text-align: center;
    }
  }
`;

export const PositionUserStatus = styled.div`
  position: absolute;
  top: 30px;
  left: 45px;
`;
