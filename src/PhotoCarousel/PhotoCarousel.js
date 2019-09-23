import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import InspoImg from './inspirationfull.jpg';
import Impact2 from './impact2.jpg';
import Inspo from './inspiration.jpg';

export default () => (
  <Carousel>
    <div>
    <img src={InspoImg}className='inspiration-photo-full' alt='impact'/>      <p className='legend'>Legend 1</p>
    </div>
    <div>
      <img src={Impact2} alt='blank'/>
      <p className='legend'>Legend 2</p>
    </div>
    <div>
      <img src={Inspo} alt='blank' />
      <p className='legend'>Legend 13</p>
    </div>
  </Carousel>
);

