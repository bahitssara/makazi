import React from 'react';
import './Footer.css';

export default function footer(){
    return(
        <footer>
            <span className='copyright'>&copy;Makazi Enterprises</span>
            <span className='build-credit'>Site Build: <a href='https://sara-mayberry-portfolio.saraamayberry.now.sh' target='_blank' rel='noopener noreferrer'>Sara Mayberry</a></span>
        </footer>
    )
}