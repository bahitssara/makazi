import React from 'react';
import './IntroPage.css'
import animateScrollTo from 'animated-scroll-to';
import {Link} from 'react-router-dom';

class IntroPage extends React.Component{
    inspirationScroll(){
        animateScrollTo(document.querySelector('.inspiration'))
     }

    render(){
        return (
            <section className='intro'>
                <Link to='inspiration'>
                    <button onClick={this.inspirationScroll} className='intro-button'>Why we do it</button>
                </Link>
                <h1 className='intro-header'>Catchy intro message</h1>
            </section>
        )
    }
    
} 

export default IntroPage;