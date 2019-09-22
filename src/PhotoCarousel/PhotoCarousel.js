import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import InspoImg from './inspirationfull.jpg';

export default () => (
  <Carousel>
    <div>
    <img src={InspoImg}className='inspiration-photo-full' alt='impact'/>      <p className='legend'>Legend 1</p>
    </div>
    <div>
      <img src='http://lorempixel.com/output/cats-q-c-640-480-2.jpg' alt='blank'/>
      <p className='legend'>Legend 2</p>
    </div>
    <div>
      <img src='http://lorempixel.com/output/cats-q-c-640-480-13.jpg' alt='blank' />
      <p className='legend'>Legend 13</p>
    </div>
    <div>
      <img src='http://lorempixel.com/output/cats-q-c-640-480-14.jpg' alt='blank'/>
      <p className='legend'>Legend 14</p>
    </div>
  </Carousel>
);
