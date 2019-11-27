import React from 'react';
import './ImpactFullPg.css';
import InfoScroll from '../InfoScroll/InfoScroll'
import animateScrollTo from 'animated-scroll-to';


class ImpactFullPg extends React.Component{
    solutionScroll() {
        animateScrollTo(document.querySelector('.main-list-scroll'))
    }

    render(){
        return( 
            <section className='impact-page'>
                <div className='impact-full'>
                <h2 className='impact-header-main'>Impact</h2>
                    <InfoScroll />
                </div>
                <div className='impact-list'>
                    <h3 className='solution-h3'>Our Solution</h3>
                        <ul className='main-list'> 
                            <li>
                            Sand Puzzle House addresses the following issues most often overlooked by other designs:
                            </li>
                                <ul>
                                <li>Low Cost</li> 
                                <li>Ease of deployment</li>
                                <li>Ease of expanding existing strctures</li>
                                <li>Withstanding extreme weather elements</li>
                                <li>Safe and secure</li>
                                <li>Bullet resistant</li>
                                <li>Fire resistant</li>
                                <li>No skilled labor required to erect</li>
                                <li>No special tools required</li>
                                <li>Minimal hardware</li>
                                <li>Incorporated water storage with ease of connecting to central water source</li>
                                <li>Mobile structure with the characteristics of a permanent structure</li>
                                </ul>
                        </ul>
                </div>
            </section> 
        )
    }
} 

export default ImpactFullPg;