import React from 'react';
import './Impact.css';
// import ImpactImg from './Impact.jpg';
import ImpactImgTwo from './impact2.jpg';


export default function Impact(){
    return(
        <section className='impact'>
            <div className='photo'>
                <img src={ImpactImgTwo} className='impact-photo' alt='impact'/>
            </div>
            <div className='impact-text'>
                <h2 className='impact-header'>Impact</h2>
                <p>There are several differences between SandPuzzle House and similar suppliers to the market, both in product and vision. SandPuzzle House addresses and delivers in almost ALL the requirements to turn a shelter into an actual home suited for long-term occupancy. Unlike other products that provide little less than the basics, SandPuzzle was designed to provide a safe, secure, solid structure using local materials and manpower. The structure can be erected in a couple of hours with little or no tools or hardware using unskilled labor. Not only does this reduce the cost of the final product, but it also satisfies our goal of building communities through job creation and instilling a sense of pride. Although other products currently available might have a slightly lower price point, these “savings” come at a much higher price as they tend to only provide in the very basic requirements as a short-term shelter.</p>
            </div>
        </section>
    )
}