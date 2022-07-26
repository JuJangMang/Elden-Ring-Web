import React from 'react';

import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding app__bg" id="home">
    <div className="app__wrapper_img">
      <img src={images.welcome} alt="header img" />
    </div>    
    <div className="app__wrapper_info">      
      <h1 className="app__header-h1">The Golden Border Has Been Broken</h1>
      <p className="p__opensans" style={{ margin: '2rem 0'}}>Rise, Tarnished, and be guided by grace to brandish the power of the Elden Ring and become an Elden Lord in the Lands Between.</p>
      <p className="p__opensans" style={{ margin: '1rem 0'}}>In the Lands Between ruled by Queen Marika the Eternal, the Elden Ring, the source of the Erdtree, has been shattered.</p>
      <p className="p__opensans" style={{ margin: '1rem 0'}}>Marika's offspring, demigods all, claimed the shards of the Elden Ring known as the Great Runes, and the mad taint of their newfound strength triggered a war: The Shattering. A war that meant abandonment by the Greater Will.</p>
      <p className="p__opensans" style={{ margin: '1rem 0'}}>And now the guidance of grace will be brought to the Tarnished who were spurned by the grace of gold and exiled from the Lands Between. Ye dead who yet live, your grace long lost, follow the path to the Lands Between beyond the foggy sea to stand before the Elden Ring.</p>   
    </div>
    <div className="app__header-bottom" >
        <img src={images.border} alt="border" />
    </div> 
  </div>
);

export default Header;
