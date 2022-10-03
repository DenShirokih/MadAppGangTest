import { StyledMenu, MainLogo, LogOutBtn } from './Menu.styled';
import { useSelector } from 'react-redux';
import { authSelectors } from 'redux/authSelector';
import { useDispatch } from 'react-redux';
import { getAuth, signOut } from 'firebase/auth';
import { removeUser } from 'redux/sliceAuth';
import { clearFavorites } from 'redux/sliceAuth';
import { useLocation, Navigate, Link } from 'react-router-dom';

const Menu = ({ open, setOpen }) => {
  const location = useLocation();
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(authSelectors.getloggedIn);
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
    <>
      <StyledMenu open={open}>
        {isLoggedIn ? (
          <>
            {/* <Link to="/favorites" onClick={() => setOpen()} /> */}
            <MainLogo />
            <Link to="/" onClick={() => setOpen()}>
              Home
            </Link>
            <LogOutBtn onClick={() => handleLogOut()}>Log Out</LogOutBtn>
          </>
        ) : (
          <>
            <MainLogo />
            <Link to="/" onClick={() => setOpen()}>
              Home
            </Link>
            <Link to="/login" onClick={() => setOpen()}>
              Login
            </Link>
            <Link to="/register" onClick={() => setOpen()}>
              Register
            </Link>
          </>
        )}
      </StyledMenu>
    </>
  );
};
export default Menu;
