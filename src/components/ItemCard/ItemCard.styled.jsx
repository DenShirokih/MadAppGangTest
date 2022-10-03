import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { ReactComponent as ActiveLogo } from 'icons/activeLogo.svg';
import { ReactComponent as DisableLogo } from 'icons/disableLogo.svg';

export const Card = styled.img`
  position: relative;
  width: 100%;
  height: 300px;
  margin-bottom: 20px;
  @media (max-width: 768px) {
    width: 400px;
    height: auto;
  }
`;
export const Wrapper = styled.div`
  position: relative;
  text-decoration: none;
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const Model = styled.h2`
  padding-bottom: 20px;
`;
export const NavLink = styled(Link)`
  text-decoration: none;
  color: #ffffff;
  :hover {
    background-color: #ffffff;
    color: #000000;
  }
`;

export const ActiveLike = styled(ActiveLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
`;

export const DisableLike = styled(DisableLogo)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 30px;
  height: 30px;
`;

export const HideInput = styled.input`
  padding: 10px;
  display: none;
  border: none;
  border-radius: 50%;
  width: 30px;
  height: 30px;
  background-color: transparent;
`;

export const Like = styled.label`
  position: absolute;
  bottom: 75px;
  right: 6px;
  width: 45px;
  height: 45px;
  border: 1px solid #f2f2f2;
  border-radius: 50%;
  background-color: #ffffff;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;

export const Container = styled.div`
  position: relative;
  flex-basis: 40%;
  color: #ffffff;
  text-transform: uppercase;
  transition-property: background-color, color;
  transition-duration: 500ms;
  :hover > a {
    color: #000000;
  }
  :hover {
    background-color: #ffffff;
  }
`;
