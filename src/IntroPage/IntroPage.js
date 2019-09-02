import React from 'react';
import './IntroPage.css'
import {Link} from 'react-router-dom';

export default function introPage(){
    return (
        <section className='intro'>
            <Link to='inspiration'>
                <button className='intro-button'>Why we do it</button>
            </Link>
            <h1 className='intro-header'>Catchy intro message</h1>
        </section>
    )
} 