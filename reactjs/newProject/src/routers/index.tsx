import { BrowserRouter, Route, Routes } from 'react-router-dom';
import HomePage from '../pages/Home';
import { SITE_MAP } from '../constants/site-map';
import Login from '../pages/Login';

export const Router = () => {
  return (
    <Routes>
      <Route path={SITE_MAP.HOME.url} element={<HomePage />} />
      <Route path={SITE_MAP.LOGIN.url} element={<Login />} />
    </Routes>
  );
};
