import React from 'react';
import './IntroPage.css'
import animateScrollTo from 'animated-scroll-to';
import {Link} from 'react-router-dom';
import MakaziVideo from './MakaziWebBackground.mp4'

class IntroPage extends React.Component{
    inspirationScroll(){
        animateScrollTo(document.querySelector('.inspiration'))
     }

    render(){
        return (
            <section className='intro'>
                <video autoPlay muted id='myVideo'>
                    <source src={MakaziVideo} type='video/mp4' />
                </video>
                <div className='intro-page'>
                <Link to='inspiration'>
                    <button onClick={this.inspirationScroll} className='intro-button'>Why we do it</button>
                </Link>
                    <h1 className='intro-header'>Creating opportunities<br/>One home at a time</h1>
                </div>
                
            </section>
        )
    }
    
} 

export default IntroPage;