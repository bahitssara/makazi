import React from 'react';
import './OurStory.css';
import { Link } from 'react-router-dom';
import Arrow from '../Arrow/Arrow';
import animateScrollTo from 'animated-scroll-to';



class OurStory extends React.Component {
    inspirationScroll() {
        animateScrollTo(document.querySelector('.inspiration'))
    }
    render() {
        return (
            <section className='our-story'>
                <div className='our-story-text'>
                    <h2 className='our-story-header'>Our Story</h2>
                    <h3>Hein de Waal – Owner</h3>
                    Hein was born and raised in Africa with having the opportunity to experience first hand the real needs and requirements of people in third world countries, low income and remote communities, and people living in the aftermath of war and conflict. This ignited a drive and desire to find a practical and workable solution to one of the world’s biggest issues. <Link to='/ourstory'>Read More</Link>
                </div>
                <Link to='/' onClick={this.inspirationScroll} className='arrow-scroll-3'>
                    <Arrow />
                </Link>
            </section> 
        )
    }
}

export default OurStory;