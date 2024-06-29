// src/Login.js
import React from 'react';
import { useMsal } from '@azure/msal-react';

const Login = () => {
  const { instance } = useMsal();

  const handleLogin = () => {
    instance.loginPopup().catch(e => {
      console.error(e);
    });
  };

  return <button onClick={handleLogin}>Login</button>;
};

export default Login;
