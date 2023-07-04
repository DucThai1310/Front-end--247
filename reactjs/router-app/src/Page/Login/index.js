import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();
  const onLogin = () => {
    localStorage.setItem('isAuth', 'true');
    navigate('/admin');
  };
  return (
    <div>
      <button onClick={onLogin}>login</button>
    </div>
  );
};

export default Login;
