import React from 'react';
import Navigation from '../../../components/features/Navigation';

const HeaderMobile = () => (
  <>
    <div className="xs:fixed sm:fixed md:fixed w-full xl:hidden lg:hidden border-t-2 border-orange-500 flex bg-brand-dark py-2 overflow-hidden items-center justify-center w-full absolute bottom-0">
      <Navigation />
    </div>
  </>
);

export default HeaderMobile;
