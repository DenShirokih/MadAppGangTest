import { Formik } from 'formik';
import { getAuth } from 'firebase/auth';
import { updateProfile, updateEmail } from 'firebase/auth';
// import { toast } from 'react-toastify';
import * as yup from 'yup';
import { useState } from 'react';
import { ref as sRef } from 'firebase/storage';
import { getStorage, uploadBytes } from 'firebase/storage';
import { getDownloadURL } from 'firebase/storage';
import { useDispatch } from 'react-redux';
import { setUser } from 'redux/sliceAuth';
import {
  Forma,
  HideInput,
  WrapperForm,
  WrapperImg,
  SubmitBtn,
  Input,
  LabelWrapper,
  ProfileLogo,
  Label,
  ResetBtn,
  UploadImg,
} from './PersonalSettings.styled';

const schema = yup.object().shape({
  fullName: yup.string().required(),
  email: yup.string().required(),
});

export const PersonalSetting = () => {
  const dispatch = useDispatch();

  const auth = getAuth();
  let user = auth.currentUser;
  let id = user.uid;
  const photoUrl = user.photoURL;
  const [url, setUrl] = useState(photoUrl);
  const [file, setFile] = useState('');

  const initialValues = {
    fullName: user.displayName,
    email: user.email,
  };

  const handleSubmit = async ({ fullName, email }) => {
    await updateEmail(user, email)
      .then(() => console.log('Email updated'))
      .catch(error => console.log(error));

    const storage = getStorage();
    const storageRef = sRef(storage, `picturesOfUsers/${file.name}`);
    await uploadBytes(storageRef, file)
      .then(() => {
        console.log('pictures upload!');
      })
      .catch(error => console.log(error));

    await getDownloadURL(sRef(storage, `picturesOfUsers/${file.name}`))
      .then(url => {
        updateProfile(user, {
          displayName: fullName,
          photoURL: url,
        });
      })
      .then(() => {
        // toast.success(<FormattedMessage id="personalUpdated" />);
        dispatch(
          setUser({
            user: { name: fullName, email: email },
            id: id,
          })
        );
      })
      .catch(error => {
        console.log(error);
      });
  };

  const changeHandler = e => {
    if (e.target.files.length > 0) {
      setUrl(URL.createObjectURL(e.target.files[0]));
      setFile(e.target.files[0]);
    }
  };

  const resetUrl = () => {
    photoUrl ? setUrl(photoUrl) : setUrl('');
  };

  return (
    <>
      <Formik
        validationSchema={schema}
        initialValues={initialValues}
        onSubmit={handleSubmit}
      >
        <Forma>
          <WrapperImg>
            {url ? <UploadImg src={url} alt="" /> : <ProfileLogo />}
            <LabelWrapper>
              <Label>
                img
                <HideInput
                  type="file"
                  name="file"
                  onChange={e => changeHandler(e)}
                />
              </Label>
              <ResetBtn type="button" onClick={() => resetUrl()}>
                RESET
              </ResetBtn>
            </LabelWrapper>
          </WrapperImg>
          <WrapperForm>
            <Input type="text" name="fullName" placeholder="Full Name..." />
            <Input type="email" name="email" placeholder="Email..." />
            <SubmitBtn type="submit">UPDATE</SubmitBtn>
          </WrapperForm>
        </Forma>
      </Formik>
    </>
  );
};
