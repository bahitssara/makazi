import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Impact2 from './impact2.jpg';
import Inspo from './inspiration.jpg';
import Inspo2 from './inspo3.jpg'

export default () => (
    <Carousel dynamicHeight>
        <div>
        <img src={Inspo2} alt='inspo'/>
        </div>
        <div>
          <img src={Impact2} alt='inspo'/>
        </div>
        <div>
          <img src={Inspo} alt='inspo' />
        </div>
      </Carousel>  
);

