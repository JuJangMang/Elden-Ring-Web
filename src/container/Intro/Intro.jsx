import React, { useState } from 'react';
import { BsFillPlayFill, BsPauseFill } from 'react-icons/bs';
import { MdVideoCameraFront } from 'react-icons/md';
import { trailer } from '../../constants';

import './Intro.css';

// const Intro = () => {
//   const [playVideo, setplayVideo] = useState(false);
//   const vidRef = React.useRef();

//   const handleVideo = () => {
//     setplayVideo((prevPlayVideo) => !prevPlayVideo);

//     if(playVideo) {
//       vidRef.current.pause();
//     }
//     else {
//       vidRef.current.play();
//     }
//   }

//   return(    
//     <div className="app__video">
//       <div className="elden__video">
//         <video 
//           src={trailer}
//           ref={vidRef}
//           type="video/mp4"
//           loopcontrols={false}
//           muted={false}
//         />
//       </div>
//       <div className="app__video-overlay flex__center">
//         <div 
//           className="app__video-overlay_circle flex__center"
//           onClick={handleVideo}
//         >
//           {playVideo 
//           ? <BsPauseFill color="#fff" fontSize={30} />
//           : <BsFillPlayFill color="#fff" fontSize={30} /> }                      
//         </div>
//       </div>
//     </div>
//   )
// };

const Intro = () => (
  <div className="container">
      <div className="elden__video">
      <iframe width="1268" height="713" src="https://www.youtube.com/embed/K_03kFqWfqs" title="ELDEN RING - Story Trailer" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    </div>
  </div>
);

export default Intro;
