import React from 'react';
import { BsInstagram, BsArrowLeftShort, BsArrowRightShort } from 'react-icons/bs';

import { images } from '../../constants';
import './Gallery.css';

const galleryImages = [images.char01, images.char02, images.char03, images.char04, images.char05, images.char06, images.char07, images.char08, images.char09, images.char10 ]

const Gallery = () => {
  const scrollRef = React.useRef(null);

  const scroll = (direction) => {
    const {current} = scrollRef;

    if(direction === 'left') {
      current.scrollLeft -= 300;
    } else {
      current.scrollLeft += 300;
    }
  }

  return (
    <div className="app__gallery flex__center">
      <div className="app__gallery-content">
        <h1 className="headtext__cormorant">Characters</h1>
        <p className="p__opensans" style={{ color: '#AAA', marginTop: '2rem'}}>A variety of classes to start your jounrey in the new land.</p>
        <button type="button" className="custom__button">View More</button>
      </div>

      <div className="app__gallery-images">
        <div className="app__gallery-images_container" ref={scrollRef}>
          {galleryImages.map((image, index) => (
            <div className="app__gallery-images_card flex__center" key={`gallery_image-${index + 1}`}>
              <img src={image} alt="gallery" />
              <BsInstagram className="gallery__image-icon" />
            </div>
          ))}
        </div>
        <div className="app__gallery-images_arrows">
          <BsArrowLeftShort className="gallery__arrow-icon" onClick={() => scroll('left')} />
          <BsArrowRightShort className="gallery__arrow-icon" onClick={() => scroll('right')} />
        </div>
        
      </div>
      <div className="app__gallery-bottom" >
         <img src={images.border} alt="border" />
        </div>
    </div>
  );
}
export default Gallery;
