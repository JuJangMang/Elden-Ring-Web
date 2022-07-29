import React from 'react';

import { images } from '../../constants';
import './KeyFeatures.css';

const KeyFeatures = () => (
  <div className="app__bg app__wrapper section__padding" id="keyfeatures">
    <div className="app__wrapper_info">
      <h1 className="main__heading headtext__cormorant flex__center">Key Features</h1>
      <div className="key__features-1">
        <div className="app__wrapper_info">
          <h1 className="app__keyfeatures-h1">A New Fantasy World</h1>
          <p className="p__cormorant" style={{ margin: '2rem 0', color: '#DCCA87' }}>Journey through the Lands Between, 
            a new fantasy world created by Hidetaka Miyazaki, 
            creator of the influential DARK SOULS video game series, 
            and George R. R. Martin, author of The New York Times best-selling fantasy series, A Song of Ice and Fire. 
            Unravel the mysteries of the Elden Ring’s power. 
            Encounter adversaries with profound backgrounds, 
            characters with their own unique motivations for helping or hindering your progress, 
            and fearsome creatures. </p>
        </div>
        <div className="app__wrapper_img">
          <img src={images.world} alt="world" />
        </div> 
      </div>

      <div className="key__features-2">
      <div className="app__wrapper_img2">
          <img src={images.explore} alt="explore" />
        </div>
        <div className="container">
          <h1 className="app__keyfeatures-h2">World Exploration in the Lands Between</h1>
          <p className="p__cormorant" style={{ margin: '2rem 0', color: '#DCCA87' }}>ELDEN RING features vast fantastical landscapes and shadowy, 
            complex dungeons that are connected seamlessly.
            Traverse the breathtaking world on foot or on horseback, 
            alone or online with other players, and fully immerse yourself in the grassy plains, 
            suffocating swamps, spiraling mountains, 
            foreboding castles and other sites of grandeur on a scale never seen before in a FromSoftware title.</p>
        </div> 
      </div>
    </div>
    <div className="app__keyfeatures-bottom" >
          <img src={images.border} alt="border" />
    </div>
    </div>
    
  </div>
);

export default KeyFeatures;
