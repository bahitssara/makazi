import React from 'react';
import './IntroPage.css'
import animateScrollTo from 'animated-scroll-to';
import { Link } from 'react-router-dom';
import MakaziVideo from './MakaziWebBackground.mp4'
import Arrow from '../Arrow/Arrow';
import MobileImg from './mobile3.jpg';

class IntroPage extends React.Component {
    impactScroll() {
        animateScrollTo(document.querySelector('.impact'))
    }

    render() {
        return (
            <section className='intro'>
                <video autoPlay loop muted id='myVideo'>
                    <source src={MakaziVideo} type='video/mp4' />
                </video>
                <img src={MobileImg} alt='mobile' id='mobile-background'/>
                <div className='intro-page'>
                    <Link to='/' className='intro-link'>
                        <button onClick={this.impactScroll} className='intro-button'>Why we do it</button>
                    </Link>
                    <h1 className='intro-header'>Creating opportunities<br />One home at a time</h1>
                </div>
                <Link to='/' onClick={this.impactScroll} className='arrow-scroll'>
                    <Arrow />
                </Link>
            </section>
        )
    }
 
}

export default IntroPage;