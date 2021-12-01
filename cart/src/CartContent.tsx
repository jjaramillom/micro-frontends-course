import React, { useState, useEffect } from 'react';

import { login, jwt } from './cart';
import Login from './Login';

const HomeContent = () => {
  const [token, setToken] = useState<any>();

  useEffect(() => {
    jwt.subscribe(setToken);
    return () => jwt.unsubscribe();
  }, []);

  return (
    <div>
      <Login />
      JWT: {token}
    </div>
  );
};

export default HomeContent;
