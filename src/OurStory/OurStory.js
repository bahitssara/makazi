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
                    Born and raised in Africa, Hein had the unique opportunity to experience first-hand the real needs and requirements of people in third world countries. He witnessed the daily struggle to keep families safe and secure in these low incomes, remote and sometimes war ravaged communities. It ignited a drive and a desire to find a practical workable solution to one of the biggest humanitarian crisis's facing the world today.<Link to='/ourstory'>Read More</Link>
                </div>
                <Link to='/' onClick={this.inspirationScroll} className='arrow-scroll-3'>
                    <Arrow />
                </Link>
            </section> 
        )
    }
}

export default OurStory;