import React from 'react';
import {FiFacebook, FiInstagram, FiTwitter} from 'react-icons/fi';

import { images } from '../../constants';
import './Footer.css';

const Footer = () => (
  <div className="app__footer section__padding">    
    <div className="app__footer_logo">
      <img src={images.socials} alt="footer_logo" />
    </div>

    <div className="footer__copyright">
      <p className="p__opensans">© 2010 - 2022 Bandai Namco</p>
    </div>
  </div>
);

export default Footer;
