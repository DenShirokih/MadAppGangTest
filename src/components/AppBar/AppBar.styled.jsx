import styled from 'styled-components';
import { ReactComponent as Logo } from 'icons/logo.svg';
import { NavLink } from 'react-router-dom';

export const Header = styled.header`
  padding: 10px 30px 10px 0px;
  background-color: #000000;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;
  margin-bottom: 50px;
`;

export const MainLogo = styled(Logo)`
  display: flex;
  align-items: center;
  width: 300px;
  height: 50px;
`;
export const Links = styled(NavLink)`
  font-size: 20px;
  color: #ffffff;
  text-decoration: none;
  :not(:last-child) {
    margin-right: 20px;
  }
`;
export const Navigation = styled.div`
  display: flex;
  align-items: center;
`;
