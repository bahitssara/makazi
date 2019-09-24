import React from 'react';
import './Header.css';
import animateScrollTo from 'animated-scroll-to';
import {Link} from 'react-router-dom';
import Logo from './GreenLogo.png';


class Header extends React.Component{

    //  inspirationScroll(){
    //     animateScrollTo(document.querySelector('.inspiration'))
    //  }

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
                    <Link to='/impact'>Impact</Link>
                    <Link to='/ourstory'>Our Story</Link>
                    {/* <Link to='/' onClick={this.inspirationScroll}>Inspiration</Link> */}
                    <Link to='/'>Contact</Link>
                </ul>
            </header>
        )
    }
}

export default Header;