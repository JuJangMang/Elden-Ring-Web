import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { RiSwordFill } from 'react-icons/ri';

import images from '../../constants/images';
import './Navbar.css';

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  return ( 
    <nav className="app__navbar">
      <div className="app__navbar-logo">
        <img src={images.eldenring} alt="app logo" />
      </div>      
      <ul className="app__navbar-links">
        <li className="p__opensans"><a href="#home">Home</a></li>
        <li className="p__opensans"><a href="#keyfeatures">Key Features</a></li>
        <li className="p__opensans"><a href="#shop">Shop</a></li>
        <li className="p__opensans"><a href="#requirements">Requirements</a></li>
      </ul>     
      <div className="app__navbar-smallscreen">
          <GiHamburgerMenu color="#fff" fontSize={27} onClick={() => setToggleMenu(true)}/>    
          {toggleMenu && (
            <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
              <RiSwordFill fonSize={27} className="overlay__close" onClick={() => setToggleMenu(false)}/>
              <ul className="app__navbar-smallscreen_links">
                <li className="p__opensans"><a href="#home">Home</a></li>
                <li className="p__opensans"><a href="#keyfeatures">Key Features</a></li>
                <li className="p__opensans"><a href="#shop">Shop</a></li>
                <li className="p__opensans"><a href="#requirements">Requirements</a></li>                
              </ul>
            </div>
          )}
      </div>      
    </nav>
  )  
};

export default Navbar;
