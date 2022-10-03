import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { clearFavorites } from 'redux/sliceAuth';
import { useLocation, Navigate } from 'react-router-dom';
import { removeUser } from 'redux/sliceAuth';
import { LogOutIcon, LogOutButton } from './LogOut.styled';

export const LogOut = () => {
  const dispatch = useDispatch();
  const location = useLocation();

  const handleLogOut = () => {
    const auth = getAuth();
    signOut(auth)
      .then(() => {
        dispatch(removeUser());
        dispatch(clearFavorites());
        //   toast.success(<FormattedMessage id='seeYouSoon'/>);
        <Navigate to="/" state={{ from: location }} />;
      })
      .catch(error => {
        console.log(error);
      });
  };

  return (
    <LogOutButton onClick={() => handleLogOut()}>
      <LogOutIcon />
    </LogOutButton>
  );
};
