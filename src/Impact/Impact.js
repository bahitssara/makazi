import React from 'react';
import './Impact.css';
import { Link } from 'react-router-dom'
import animateScrollTo from 'animated-scroll-to';
import Arrow from '../Arrow/Arrow'


class Impact extends React.Component{
    ourStoryScroll() {
        animateScrollTo(document.querySelector('.our-story'))
    }
    render(){
        return(
            <section className='impact'>
                <div className='impact-text'>
                    <h2 className='impact-header'>Impact</h2>
                    <p>There are several differences between SandPuzzle House and similar suppliers to the market, both in product and vision. SandPuzzle House addresses and delivers in almost ALL the requirements to turn a shelter into an actual home suited for long-term occupancy. Unlike other products that provide little less than the basics, SandPuzzle was designed to provide a safe, secure, solid structure using local materials and manpower. <Link to='/impact'>Read more</Link></p>
                </div>
                <Link to='/' onClick={this.ourStoryScroll} className='arrow-scroll-2'>
                        <Arrow />
                </Link>
            </section>
        )
    }
        
        
    
}

export default Impact;