import React, { useState } from 'react';
import { Formik } from 'formik';
// import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import {
  getAuth,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { setUser, setAuthToken } from 'redux/sliceAuth';
import { Link } from 'react-router-dom';
import { BtnEye } from 'components/LoginForm/LoginForm.styled';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import {
  Wrapper,
  FormLogin,
  FieldLogin,
  Button,
  Title,
  PasswordWrapper,
} from '../LoginForm/LoginForm.styled';

// const schema = yup.object().shape({
//     name: yup
//       .string()
//       .required(),
//     //   .matches(/^\s*[\S]+(\s[\S]+)+\s*$/gms, <FormattedMessage id='inputFullName'/>)
//     //   .matches(
//     //     /^([A-Za-z\u00C0-\u00D6\u00D8-\u00f6\u00f8-\u00ff\s]*)$/gi,
//     //     <FormattedMessage id='warningName'/>
//     //   ),
//     email: yup.string().required(),
//     password: yup.string().required(),
//     configPassword: yup.string().required()
//   });

const values = {
  name: '',
  email: '',
  password: '',
  configPassword: '',
};

export const RegisterForm = () => {
  const [statePass, setStatePass] = useState(false);
  const [statePassConfig, setStatePassConfig] = useState(false);

  const toggleBtn = () => {
    setStatePass(prevState => !prevState);
  };

  const toggleBtnConfig = () => {
    setStatePassConfig(prevState => !prevState);
  };

  const dispatch = useDispatch();

  const handleSubmit = (
    { name, email, password, configPassword },
    { resetForm }
  ) => {
    if (password !== configPassword) {
      // toast.error(<FormattedMessage id='wrongPassword'/>);
      return;
    }
    const auth = getAuth();
    createUserWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        updateProfile(userCredential.user, { displayName: name });
        //   toast.success(<FormattedMessage id='welcome'/>);
        dispatch(
          setUser({
            user: { email: email, name: name },
            id: userCredential.user.uid,
          })
        );
        dispatch(setAuthToken(userCredential.user.accessToken));
        resetForm();
      })
      .catch(error => {
        //   toast.error(error.message);
        console.log(error.code);
        console.log(error.message);
      });
  };

  return (
    <Formik
      initialValues={values}
      // validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <FormLogin autoComplete="off">
          <Title>REGISTRATION</Title>
          <label htmlFor="email">
            <FieldLogin type="email" name="email" placeholder="Email..." />
          </label>
          <label htmlFor="name">
            <FieldLogin type="text" name="name" placeholder="Full Name..." />
          </label>
          <PasswordWrapper htmlFor="password">
            <FieldLogin
              type={statePass ? 'text' : 'password'}
              name="password"
              placeholder="Password..."
            />
            <BtnEye onClick={toggleBtn} type="button">
              {statePass ? <IoEyeOff /> : <IoEyeOutline />}
            </BtnEye>
          </PasswordWrapper>
          <PasswordWrapper htmlFor="configPassword">
            <FieldLogin
              type={statePassConfig ? 'text' : 'password'}
              name="configPassword"
              placeholder="Confirg password..."
            />
            <BtnEye type="button" onClick={toggleBtnConfig}>
              {statePassConfig ? <IoEyeOff /> : <IoEyeOutline />}
            </BtnEye>
          </PasswordWrapper>
          <Button type="submit">REGISTER</Button>
        </FormLogin>
        <Link to="/login"></Link>
      </Wrapper>
    </Formik>
  );
};
