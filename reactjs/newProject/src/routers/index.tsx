import { Route, Routes } from 'react-router-dom';
import { SITE_MAP } from '../constants/site-map';
import { HomePage } from '../pages/Home';
import LoginPage from '../pages/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
      <Route path={SITE_MAP.LOGIN.url} element={<LoginPage />} />
    </Routes>
  );
};
