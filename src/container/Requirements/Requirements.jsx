import React from 'react';

import {images, data } from '../../constants';
import './Requirements.css';

const Requirements = () => (
  <div className="app__requirements flex__center section__padding" id="requirements" >
    <div className="app__requirements-title">
      <h1 className="headtext__cormorant">System Requirements</h1>
    </div>

    <div className="requirements flex__center">
      <div className="app__requirements_min">
        <div className="app__requirements_min-specs">
          <h1 className="app__requirements_min-h1">Minimum</h1>
          <ul className="min__specs">
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>OS: Windows 10</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Processor: Intel Core i5-8400 | AMD RYZEN 3 3300X</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Memory: 12 GB RAM</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Graphics: Nvidia GeForce GTX 1060, 3 GB | AMD Radeon RX 580, 4 GB</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>DirectX: Version 12 (Feature Level 12.0)</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Storage: 60 GB available space</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Sound Card: Windows-Compatible Audio device</li>
          </ul>
        </div>
      </div>

      <div className="app__requirements_rec">
        <div className="app__requirments_rec-specs">
          <h1 className="app__requirements_rec-h1">Recommended</h1>
          <ul className="rec__specs">
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>OS: Windows 11/10</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Processor: Intel Core i7-8700K | AMD Ryzen 5 3600X</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Memory: 16 GB RAM</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Graphics: Nvidia GeForce GTX 1070, 8 GB | AMD Radeon RX VEGA 56, 8 GB</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>DirectX: Version 12 (Feature Level 12.0)</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Storage: 60 GB available space</li>
            <li className="p__opensans" style= {{ margin: '2rem 0', color: '#DCCA87' }}>Sound Card: Windows-Compatible Audio device</li>
          </ul>
        </div>
      </div>
    </div>
  </div>
);

export default Requirements;
