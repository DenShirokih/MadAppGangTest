import { Routes, Route, Navigate } from 'react-router-dom';
import { PublicRoute } from '../hoc/PublicRoute';
import { lazy } from 'react';
import { RequireAuth } from 'hoc/RequireAuth';
import { Suspense } from 'react';
import { Loader } from './Loader/Loader';
import SwiperCore, { Autoplay } from 'swiper';

const HomePage = lazy(() => import('../Pages/HomePage'));
const LayoutPage = lazy(() => import('../Pages/LayoutPage'));
const LoginPage = lazy(() => import('../Pages/LoginPage'));
const RegisterPage = lazy(() => import('../Pages/RegisterPage'));
const DragonInfoPage = lazy(() => import('../Pages/DragonInfoPage'));
const Info = lazy(() => import('../Pages/Info'));
const PersonalSettingsPage = lazy(() =>
  import('../Pages/PersonalSettingsPage')
);
const FavoritesPage = lazy(() => import('../Pages/FavoritesPage'));

export const App = () => {
  return (
    <>
      <Suspense fallback={<Loader />}>
        <Routes>
          <Route path="/" element={<LayoutPage />}>
            <Route index element={<HomePage />} />
            <Route
              path="login"
              element={
                <PublicRoute>
                  <LoginPage />
                </PublicRoute>
              }
            />
            <Route
              path="register"
              element={
                <PublicRoute>
                  <RegisterPage />
                </PublicRoute>
              }
            />
            <Route
              path="personal"
              element={
                <RequireAuth>
                  <PersonalSettingsPage />
                </RequireAuth>
              }
            />
            <Route
              path="favorites"
              element={
                <RequireAuth>
                  <FavoritesPage />
                </RequireAuth>
              }
            />

            <Route path="info" element={<Info />} />
            <Route path="info/:infoId" element={<DragonInfoPage />} />
          </Route>
          <Route path="*" element={<Navigate to="/" />} />
        </Routes>
      </Suspense>
    </>
  );
};
