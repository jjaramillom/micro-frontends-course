import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

// @ts-ignore
import Header from 'home/Header';
// @ts-ignore
import Footer from 'home/Footer';
import PdpContent from './PdpContent';

import './index.scss';

const App = () => (
  <Router>
    <div className='text-3xl mx-auto max-w-6xl'>
      <Header />
      <Routes>
        <Route path='/product/:id' element={<PdpContent />} />
      </Routes>
      <Footer />
    </div>
  </Router>
);
ReactDOM.render(<App />, document.getElementById('app'));
