import React from 'react';
import './Header.css';
import {Link} from 'react-router-dom';


export default function header(){
    return(
        <header className='header'>
            <img className='logo' alt='logo' src='https://www.childhood.org.au/app/uploads/2017/07/ACF-logo-placeholder.png' />
            <ul className='header-links'>
                <Link to='our-story'>Our Story</Link>
                <Link to='impact'>Impact</Link>
                <Link to='contact'>Contact</Link>
                <Link to='inspiration'>Inspiration</Link>
            </ul>
        </header>
    )
}