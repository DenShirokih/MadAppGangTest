import React, { useState } from 'react';
import { Formik } from 'formik';
import * as yup from 'yup';
import { useDispatch } from 'react-redux';
import { getAuth, signInWithEmailAndPassword } from 'firebase/auth';
import { setAuthToken, setUser } from 'redux/sliceAuth';
import { IoEyeOutline, IoEyeOff } from 'react-icons/io5';
import {
  Wrapper,
  FormLogin,
  FieldLogin,
  Button,
  LinkToRegister,
  Title,
  BtnEye,
  PasswordWrapper,
  NoAccount,
} from './LoginForm.styled';

const schema = yup.object().shape({
  email: yup.string().required(),
  password: yup.string().required(),
});

const values = {
  email: '',
  password: '',
};

export const LoginForm = () => {
  const [statePass, setStatePass] = useState(false);
  const toggleBtn = () => {
    setStatePass(prevState => !prevState);
  };
  const dispatch = useDispatch();

  const handleSubmit = ({ email, password }, { resetForm }) => {
    const auth = getAuth();
    signInWithEmailAndPassword(auth, email, password)
      .then(userCredential => {
        const userAut = userCredential.user;
        const name = userAut.displayName;
        dispatch(
          setUser({
            user: { name: name },
            id: userAut.uid,
          })
        );
        dispatch(setAuthToken(userAut.accessToken));
        //   toast.success(<FormattedMessage id='welcome'/>);
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
      validationSchema={schema}
      onSubmit={handleSubmit}
    >
      <Wrapper>
        <FormLogin autoComplete="off">
          <Title>LOGIN</Title>
          <label htmlFor="email">
            <FieldLogin type="email" name="email" placeholder="Email..." />
          </label>
          <PasswordWrapper htmlFor="password">
            <FieldLogin
              type={statePass ? 'text' : 'password'}
              name="password"
              placeholder="Password..."
            />
            <BtnEye type="button" onClick={toggleBtn}>
              {statePass ? <IoEyeOff /> : <IoEyeOutline />}
            </BtnEye>
          </PasswordWrapper>
          <Button type="submit">LOGIN</Button>
          <NoAccount> I don`t have an account yet</NoAccount>
          <LinkToRegister to="/register">REGISTER</LinkToRegister>
        </FormLogin>
      </Wrapper>
    </Formik>
  );
};
