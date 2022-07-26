import React from 'react';

import { images } from '../../constants';
import './Shop.css';

const Shop = () => (
  <div className="app__bg section__padding" id="shop">
    <div className="app__wrapper">
      <div className="shop__now"> 
        <h1 className="headtext__cormorant">Shop Now</h1>      
      </div>

      <div className="shop_img">
        <img src={images.shop} alt="shop"/>
      </div>

      <div className="app__shop-content flex__center">
        <button type="button" className="custom__button">Buy Now</button>
      </div>
    </div>
    
    <div className="app__shop-bottom flex__center" >
        <img src={images.border} alt="border" />
    </div> 
    
  </div>
);

export default Shop;
