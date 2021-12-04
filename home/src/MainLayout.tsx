import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

import 'remixicon/fonts/remixicon.css';
import './index.scss';

// @ts-ignore
import Header from 'home/Header';
// @ts-ignore
import Footer from 'home/Footer';
// @ts-ignore
import PdpContent from 'pdp/PdpContent';
// @ts-ignore
import HomeContent from 'home/HomeContent';
// @ts-ignore
import CartContent from 'cart/CartContent';

export default function MainLayout() {
  return (
    <Router>
      <div className='text-3xl mx-auto max-w-6xl'>
        <Header />
        <div className='my-10'>
          <Routes>
            <Route path='/' element={<HomeContent />} />
            <Route path='/product/:id' element={<PdpContent />} />
            <Route path='/cart' element={<CartContent />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}
