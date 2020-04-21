import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import {Link} from 'gatsby'
import Menu from "../Menu";

const Header = () => (
  <header className="bg-blue shadow py-2 realtive z-10">
    <div className="flex justify-between items-center py-4 px-8">
      <div className="flex items-center">
        <Link to="/">
          <LogoIcon />
        </Link>
      </div>
      <Menu/>
    </div>
  </header>
);

export default Header;
