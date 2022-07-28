import React from 'react';

import { images } from '../../constants';
import './Awards.css';

const Awards = () => (
  <div className="app__awards app__bg flex__center section__padding" id="awards"> 
    <div className="app__awards-content flex__center">
      <div className="app__awards-content_about">
        <h1 className="headtext__cormorant">Awards</h1>        
      </div>

      <div className="app__awards-overlay flex__center" >
        <img src={images.awards} alt="awards" />
      </div>

      <div className="app__awards-bottom flex__center" >
        <img src={images.border} alt="border" />
      </div>
              
    </div>
  </div>
);

export default Awards;
