import { SITE_MAP } from '../../constants/site-map';
import { Navigate, useNavigate } from 'react-router-dom';
function Home() {
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
      </div>
    );
  } else {
    return <Navigate to={SITE_MAP.LOGIN.url} replace={true} />;
  }
}

export default Home;
