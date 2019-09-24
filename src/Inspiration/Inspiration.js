import React from 'react';
import './Inspiration.css';
import PhotoCarousel from '../PhotoCarousel/PhotoCarousel';



export default function inspiration(){
    return(
        <div className='inspiration'>
            <h3 className='inspo-header'>Inspiration</h3>
            <div className='inspiration-text'>SandPuzzle House is a company that aims to provide the best workable solution to the worlds housing crisis by providing a mobile structure with all the characteristics and features of a permanent structure.<br /><br />
            {/* <Link to='/inspiration' className='inspo-link'>See what inspires us</Link> */}
            <PhotoCarousel />
            </div>
        </div>
    )
}