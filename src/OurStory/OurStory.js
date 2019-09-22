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
                    Hein was born and raised in South Africa and after graduating from High School, studied Industrial Engineering at the University of Pretoria. Hein joined the military in 2005 and travelled extensively through Africa, continuing his travels even after leaving the service. During this time, he not only witnessed poverty and hardships, he also lived in some of these rural and remote communities. <Link to='/ourstory'>Read More</Link>
                </div>
                <Link to='/' onClick={this.inspirationScroll} className='arrow-scroll-3'>
                    <Arrow />
                </Link>
            </section>
        )
    }
}

export default OurStory;