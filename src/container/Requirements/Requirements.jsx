import React from 'react';

import {images, data } from '../../constants';
import './Requirements.css';

const Requirements = () => (
  <div className="app__requirements flex__center section__padding" id="requirements" >
    <div className="app__requirements-title">
      <h1 className="headtext_cormorant">System requirements</h1>
    </div>

    <div className="app__requirements_min flex__center">
      <h1 className="app__requirements_min-h1" >Minimum</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>OS: Windows 10
Processor: Intel Core i5-8400 | AMD RYZEN 3 3300X
Memory: 12 GB RAM
Graphics: Nvidia GeForce GTX 1060, 3 GB | AMD Radeon RX 580, 4 GB
DirectX: Version 12 (Feature Level 12.0)
Storage: 60 GB available space
Sound Card: Windows-Compatible Audio device</p>
       
    </div>

      
      <div className="app__requirements_rec flex__center">
        <h1 className="app__requirements_rec-h1" >Recommended</h1>
        <p className="p__opensans" style={{ margin: '2rem 0'}}> OS: Windows 11/10
Processor: Intel Core i7-8700K | AMD Ryzen 5 3600X
Memory: 16 GB RAM
Graphics: Nvidia GeForce GTX 1070, 8 GB | AMD Radeon RX VEGA 56, 8 GB
DirectX: Version 12 (Feature Level 12.0)
Storage: 60 GB available space
Sound Card: Windows-Compatible Audio device</p>
      </div>

  </div>
);

export default Requirements;
