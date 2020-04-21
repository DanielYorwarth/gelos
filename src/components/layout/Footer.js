import React from 'react';
import LogoIcon from '../../svg/LogoIcon';
import {Link} from 'gatsby'

const Footer = () => (
  <footer className="bg-blue py-16 md:py-32 border-solid border-t-2 border-gray-700 px-2">
    <div className="container mx-auto flex flex-col lg:flex-row flex-wrap justify-between lg:items-start text-white leading-loose">
      <div className="mb-5 lg:mb-0">
      <Link to="/">
        <LogoIcon className="w-32 h-auto mx-auto" />
      </Link>
      </div>
      <div className="lg:text-center -ml-4 lg:ml-0 text-center">        
        <div className="flex flex-col lg:flex-row flex-wrap justify-center mb-5 lg:mb-10  font-light">
          <Link className="px-4 pb-3 lg:py-0 text-white hover:text-yellow" to="/">
            Home
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/services">
            Our Services
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/land-wanted">
            Land Wanted
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/partners">
            Our Partners
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/our-team">
            Our Team
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/content">
            Contact
          </Link>
        </div>
        <div className="flex flex-col lg:flex-row flex-wrap lg:justify-center mb-5 lg:mb-10 font-light">
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/terms-conditions">
            Terms & Conditions
          </Link>
          <Link className="px-4 py-3 lg:py-0 text-white hover:text-yellow" to="/privacy-policy">
            Privacy Policy
          </Link>
          <Link className="px-4 pt-3 lg:pt-0  text-white hover:text-yellow" to="/cookie-policy">
            Cookie Policy
          </Link>
        </div>
        <span className="font-medium ml-4 lg:ml-0 mb-5 lg:mb-10 block">© Copyright 2020, Gelos Healthcare. All rights reserved.</span>
      </div>
      <div className="text-center lg:text-right">
        Gelos Healthcare<br/>
        2 Long Road<br/>
        Mistley, Manningtree<br/>
        Essex, CO11 2HN<br/><br/>
        <b>T:</b> 0207 117 2490
      </div>
    </div>
  </footer>
);

export default Footer;
