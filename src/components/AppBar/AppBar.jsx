import { Header, MainLogo, Links, Navigation } from './AppBar.styled';
import { authSelectors } from 'redux/authSelector';
import { useSelector } from 'react-redux';
import { LogOut } from 'components/LogOut/LogOut';
import { useMediaQuery } from 'hooks/useMediaQoery';
import { BurgerMenu } from 'components/BurgerMenu/BurgerMenu';
import { Link } from 'react-router-dom';

export const AppBar = () => {
  let isPageWide = useMediaQuery('(min-width: 769px)');

  const isLoggedIn = useSelector(authSelectors.getloggedIn);
  return (
    <>
      <Header>
        <Link to="/">
          <MainLogo />
        </Link>

        <Navigation>
          {isPageWide ? (
            isLoggedIn ? (
              <>
                <BurgerMenu />
                <Links to={'/personal'}>Settings</Links>
                <Links to={'/favorites'}>Favorites</Links>
                <LogOut />
              </>
            ) : (
              <>
                <Links to="/"> Home </Links>
                <Links to="/login">Login </Links>
                <Links to="/register"> Register</Links>
              </>
            )
          ) : (
            <>
              <BurgerMenu />
            </>
          )}
        </Navigation>
      </Header>
    </>
  );
};
