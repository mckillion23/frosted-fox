import React from 'react';
import { Link } from 'react-router-dom';
import { HOME } from '../../../constants/routes';
import logo from '../../../images/logo.png';

const Logo = () => (
  <Link to={HOME.link} className="font-bold text-white text-2xl mr-8">
    <img src={logo} alt="logo" />
  </Link>
);

export default Logo;
