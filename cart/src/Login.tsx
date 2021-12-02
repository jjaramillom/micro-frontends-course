import React, { useState, useEffect } from 'react';

import { login, useLoggedIn } from './cart';

const Login = () => {
  const loggedIn = useLoggedIn();
  const [showLogin, setShowLogin] = useState(false);
  const [username, setUsername] = useState('sally');
  const [password, setPassword] = useState('123');

  if (loggedIn) {
    return null;
  }

  return (
    <>
      <span onClick={() => setShowLogin(!showLogin)}>
        <i className='ri-fingerprint-line text-2xl' id='showLogin' />
      </span>
      {showLogin && (
        <div
          className='absolute p-5 border-4 border-blue-800 bg-white rounded-md'
          style={{ width: 300, top: '2rem', left: -250 }}>
          <input
            type='text'
            placeholder='username'
            value={username}
            onChange={(evt) => setUsername(evt.target.value)}
            className='border text-sm text-black border-gray-400 p-2 rounded-md'
          />
          <input
            type='text'
            placeholder='password'
            value={password}
            onChange={(evt) => setPassword(evt.target.value)}
            className='border text-sm text-black border-gray-400 p-2 rounded-md'
          />
          <button
            className='bg-green-900 text-white py-2 px-5 mt-2 rounded-md'
            onClick={() => login(username, password)}>
            Login
          </button>
        </div>
      )}
    </>
  );
};

export default Login;
