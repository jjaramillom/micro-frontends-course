import React, { useState, useEffect } from 'react';

import { jwt } from './cart';
import MiniCart from './MiniCart';
import Login from './Login';

const HomeContent = () => {
  const [token, setToken] = useState<any>();

  useEffect(() => {
    jwt.subscribe(setToken);
    return () => jwt.unsubscribe();
  }, []);

  return (
    <div>
      <div>JWT: {token}</div>
      <Login />
      <MiniCart />
    </div>
  );
};

export default HomeContent;
