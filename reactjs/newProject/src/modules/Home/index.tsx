import { useState } from 'react';
import { Navigate, useNavigate } from 'react-router-dom';
import { SITE_MAP } from '../../constants/site-map';
import ModalFilter from './components/ModalFilter';
import ModalLogin from './components/ModalLogin';
function Home() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenFilter, setIsOpenFilter] = useState(false);

  const token = localStorage.getItem('token');
  const navigate = useNavigate();
  const logout = () => {
    navigate(SITE_MAP.LOGIN.url);
  };
  if (token) {
    return (
      <div>
        <span>home page</span>
        <button onClick={logout}>logout</button>
        <button onClick={() => setIsOpen(true)}>Login</button>
        <button onClick={() => setIsOpenFilter(true)}>Filter</button>
        <ModalLogin isOpen={isOpen} setIsOpen={setIsOpen} />
        <ModalFilter isOpen={isOpenFilter} setIsOpen={setIsOpenFilter} />
      </div>
    );
  } else {
    return <Navigate to={SITE_MAP.LOGIN.url} replace={true} />;
  }
}

export default Home;
