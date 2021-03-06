import React from 'react';
import { NavLink } from 'react-router-dom';
import * as ROUTES from '../../../constants/routes';

const Linker = () => (
  <nav>
    <ul className="flex text-white font-helvetica tracking-wide text-xl xs:text-sm sm: md:text-l justify-between xs:px-6">
      <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
        <NavLink to={ROUTES.ABOUT.link} activeClassName="cursor-pointer text-orange-400">
          {' '}
          {ROUTES.ABOUT.name}
        </NavLink>
      </li>
      <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.PRODUCTS.link} activeClassName="cursor-pointer text-orange-400">{ROUTES.PRODUCTS.name}</NavLink></li>
      <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4"><NavLink to={ROUTES.REVIEWS.link} activeClassName="cursor-pointer text-orange-400">{ROUTES.REVIEWS.name}</NavLink></li>
      <li className="xl:mr-6 sm:mr-8 md:mr-8 mr-4">
        <NavLink to={ROUTES.CONTACT.link} activeClassName="cursor-pointer text-orange-400">
          {' '}
          {ROUTES.CONTACT.name}
        </NavLink>
      </li>
    </ul>
  </nav>
);
export default Linker;
