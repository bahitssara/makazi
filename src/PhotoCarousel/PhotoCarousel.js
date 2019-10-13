import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Img1 from './img1.jpg';
import Img2 from './img2.jpg';
import Img3 from './img3.jpg';
import Img4 from './img4.jpg';
import Img5 from './img5.jpg';
import Img6 from './img6.jpg';
import Img7 from './img7.jpg';
import Img8 from './img8.jpg';
import Img9 from './img9.jpg';





export default () => (
    <Carousel dynamicHeight>
        <div>
          <img src={Img2} alt='inspo'/>
        </div>
        <div>
          <img src={Img8} alt='inspo'/>
        </div>
        <div>
          <img src={Img3} alt='inspo' />
        </div>
        <div>
          <img src={Img4} alt='inspo'/>
        </div>
        <div>
          <img src={Img7} alt='inspo'/>
        </div>
        <div>
        <img src={Img1} alt='inspo'/>
        </div>
        <div>
          <img src={Img5} alt='inspo'/>
        </div>
        <div>
          <img src={Img6} alt='inspo'/>
        </div>
        <div>
          <img src={Img9} alt='inspo'/>
        </div>
      </Carousel>  
);

