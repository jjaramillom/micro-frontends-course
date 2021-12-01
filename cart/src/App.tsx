import React from 'react';
import ReactDOM from 'react-dom';
import 'remixicon/fonts/remixicon.css';

// @ts-ignore
import Header from 'home/Header';
// @ts-ignore
import Footer from 'home/Footer';
import CartContent from './CartContent';

import './index.scss';

const App = () => (
  <div className='text-3xl mx-auto max-w-6xl'>
    <Header />
    <CartContent />
    <Footer />
  </div>
);
ReactDOM.render(<App />, document.getElementById('app'));
