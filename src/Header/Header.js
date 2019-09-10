import React from 'react';
import './Header.css';
import animateScrollTo from 'animated-scroll-to';
import {Link} from 'react-router-dom';
import Logo from './GreenLogo.png';


class Header extends React.Component{
    impactScroll() {
        animateScrollTo(document.querySelector('.impact'))
     }

     ourStoryScroll(){
        animateScrollTo(document.querySelector('.our-story'))
     }

     inspirationScroll(){
        animateScrollTo(document.querySelector('.inspiration'))
     }

     topScroll() {
        animateScrollTo(0)

     }

    render(){
        return(
            <header className='header'>
                <Link to='/' onClick={this.topScroll}>
                    <img className='logo' alt='logo' src={Logo} />
                </Link>
                <ul className='header-links'>
                    <Link to='/' onClick={this.impactScroll}>Impact</Link>
                    <Link to='/' onClick={this.ourStoryScroll}>Our Story</Link>
                    <Link to='/' onClick={this.inspirationScroll}>Inspiration</Link>
                    <Link to='/'>Contact</Link>
                </ul>
            </header>
        )
    }
}

export default Header;