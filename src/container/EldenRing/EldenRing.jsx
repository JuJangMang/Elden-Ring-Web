import React from 'react';


import { images } from '../../constants';
import './EldenRing.css';

const EldenRing = () => (
  <div className="app__eldenring app__bg flex__center section__padding" id="eldenring">
    <div className="app__eldenring-overlay" >
      <img src={images.logo} alt="eldenring" /> 
    </div>
  </div>
);

export default EldenRing;
