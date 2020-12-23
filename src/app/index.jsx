import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Header from '../layouts/Header';
import { Switcher } from '../components/features/Navigation';
import HeaderMobile from '../layouts/Header/mobile';

const App = () => (
  <div>
    <Router>
      <Header />
      <Switcher />
      <HeaderMobile forMobile />
    </Router>
  </div>
);

export default App;
