import React from 'react';
import './ImpactFullPg.css';
import {Link} from 'react-router-dom';
import animateScrollTo from 'animated-scroll-to';


class ImpactFullPg extends React.Component{
    solutionScroll() {
        animateScrollTo(document.querySelector('.main-list'))
    }

    render(){
        return(
            <section className='impact-page'>
                <div className='impact-full'>
                        <h2 className='impact-header-main'>Impact</h2>
                        <p>Several modular construction designs exist today and have been developed in order to try and
                        address the ever-growing housing crises the world is facing. However, these designs do not incorporate
                        some of the critical requirements that low-cost housing should provide to make it a viable options and to
                        transform it from just a shelter to an actual home for long-term occupation. </p>
    
                        <p>Sand Puzzle House addresses the issues that most other designs overlooked. The structure was put through rigorous testing involving simulated hail / projectile impact of over 100 mph, water pressure of more than 200 psi, and winds of over 200 mph … and passed all tests. This makes it suitable for deployment in areas with severe weather and/or as emergency housing during severe weather events like hurricanes and storms. 
                        </p>
    
                        <p>Sand Puzzle House addresses the issues that most other designs overlooked. The structure was put through rigorous testing involving simulated hail / projectile impact of over 100 mph, water pressure of more than 200 psi, and winds of over 200 mph … and passed all tests. This makes it suitable for deployment in areas with severe weather and/or as emergency housing during severe weather events like hurricanes and storms.</p>
                        <p>As a result of the absence of localized stress points in the structure due to the elimination of hardware and fasteners, panels are also allowed to move in relation to one another without catastrophic failure that could lead to injury or death, making it an excellent option for deployment in seismic areas, both before any seismic events and as emergency housing directly after an event.
                        As informal settlements and refugee camps are notorious for the high levels of crime and easy access to weapons, it was important that the structure could withstand penetration of some of the most common calibers of ammunition found in said locations. So, it was subjected to small arms fire including 9mm, 45 ACP and AK47 rounds and none of these ammunitions penetrated the structure, making it ideal as a safe option for deployment in high crime areas and countries with a history of war and violence.</p>
                        <p>
                        As most current structures in informal settlements are constructed out of highly flammable materials with little or no access for firefighting equipment. With no firefighting resources on location and only limited escape avenues, as well as most household still using open flame as a source of heat and light, fires are an all too common occurrence resulting in multiple deaths. Most of these deaths usually include small children and the elderly. So, it was important that the structure had to be fire-resistant, providing not just a means of combating the flames but also providing a larger window for possible escape from an inferno.  To aid in this, as well as to provide access to one of the most basic requirements for survival, namely water, the design also incorporates a water storage facility. Not only is this part of the fire safety aspect, it also ensures safe storage to this valuable commodity that can be used for household purposes, as well as to improve hygienic conditions in the area. In turn, this will help in the fight against the spread of infectious diseases in these areas.  
                        </p>
                </div>
                <div className='impact-list'>
                    <Link to='/impact' className='solution-link'>
                        <button onClick={this.solutionScroll} className='solution-button'>Our Solution</button>
                    </Link>
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
                                <li>Built resistant</li>
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