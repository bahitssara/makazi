import React from 'react';
import './Inspiration.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';



export default function inspiration(){
    return(
        <div className='inspiration'>
            <h3 className='inspo-header'>Inspiration</h3>
            <div className='inspiration-text'>
            <PhotoCarousel />
            </div>
        </div>
    )
}