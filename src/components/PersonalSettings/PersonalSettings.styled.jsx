import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ReactComponent as Logo } from 'icons/user-profile-svgrepo-com.svg';

export const ProfileLogo = styled(Logo)`
  width: 250px;
  height: auto;
  margin-bottom: 15px;
`;

export const Forma = styled(Form)`
  display: flex;
  justify-content: center;
  width: 85%;
  margin: 0 auto;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-basis: 45%;
`;

export const WrapperImg = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  flex-basis: 45%;
  @media (max-width: 768px) {
    margin-bottom: 15px;
  }
`;

export const Input = styled(Field)`
  width: 90%;
  height: 35px;
  margin-bottom: 15px;
  border: none;
  border-radius: 5px;
  padding-left: 15px;
  font-size: 18px;
`;

export const SubmitBtn = styled.button`
  width: 90%;
  height: 35px;
  border: none;
  border-radius: 5px;
  margin-bottom: 15px;
  transition-property: background-color, color;
  transition-duration: 500ms;
  cursor: pointer;
  font-size: 16px;
  :hover {
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const HideInput = styled.input`
  position: absolute;
  z-index: -1;
  opacity: 0;
  display: block;
  width: 0px;
  height: 0px;
`;

export const LabelWrapper = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 90%;
`;

export const Label = styled.label`
  display: flex;
  justify-content: center;
  align-items: center;
  font-weight: 400;
  line-height: normal;
  width: 30%;
  height: 35px;
  background-color: #ffff;
  text-transform: uppercase;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  transition-property: background-color, color;
  transition-duration: 500ms;
  color: #000000;
  :hover {
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const ResetBtn = styled.button`
  width: 30%;
  height: 35px;
  background-color: #ffff;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;
  color: #000000;
  transition-property: background-color, color;
  transition-duration: 500ms;
  :hover {
    border: 1px solid #ffffff;
    background-color: #000000;
    color: #ffffff;
  }
`;

export const UploadImg = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  margin-bottom: 15px;
`;
