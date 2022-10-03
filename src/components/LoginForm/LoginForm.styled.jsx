import styled from 'styled-components';
import { Form, Field } from 'formik';
import { Link } from 'react-router-dom';

export const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const FormLogin = styled(Form)`
  display: flex;
  flex-direction: column;
  flex-basis: 40%;
  padding: 10px 20px;
  text-align: center;
  @media (max-width: 768px) {
    flex-basis: 100%;
    height: 100vh;
  }
  @media (max-width: 1200px) {
    height: 100vh;
  }
`;
export const FieldLogin = styled(Field)`
  width: 100%;
  height: 35px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 18px;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
export const Button = styled.button`
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  transition-property: background-color, color;
  transition-duration: 500ms;
  cursor: pointer;
  font-size: 18px;
  :hover {
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;
export const LinkToRegister = styled(Link)`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 35px;
  width: 100%;
  color: #000000;
  background-color: #ffffff;
  border-radius: 5px;
  text-decoration: none;
  transition-property: background-color, color;
  transition-duration: 500ms;
  font-size: 18px;
  :hover {
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const BtnEye = styled.button`
  position: absolute;
  right: 5px;
  top: 6px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 25px;
  outline: none;
  border: none;
  background-color: transparent;
  cursor: pointer;
`;

export const PasswordWrapper = styled.label`
  position: relative;
`;

export const NoAccount = styled.p`
  margin-bottom: 15px;
  font-size: 18px;
`;
