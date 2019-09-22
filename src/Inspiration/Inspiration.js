import React from 'react';
import './Inspiration.css';
// import InspirationImg from './inspiration.jpg';
import {Link} from 'react-router-dom';


export default function inspiration(){
    return(
        <div className='inspiration'>
            <h3 className='inspo-header'>Inspiration</h3>
            <p className='inspiration-text'>SandPuzzle House is a company that aims to provide the best workable solution to the worlds housing crisis by providing a mobile structure with all the characteristics and features of a permanent structure.<br /><br />
            <Link to='/inspiration' className='inspo-link'>See what inspires us</Link>
            </p>
            
            {/* <img src={InspirationImg}className='inspiration-photo-wheel' alt='impact'/> */}
        </div>
    )
}