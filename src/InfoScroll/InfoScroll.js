import React, { Component } from "react";
import Slider from "react-slick";
import '../../node_modules/slick-carousel/slick/slick.css'
import "../../node_modules/slick-carousel/slick/slick-theme.css";
import './InfoScroll.css';

export default class SimpleSlider extends Component {
  render() {
    const settings = {
      dots: true,
      infinite: true,
      speed: 500,
      slidesToShow: 1,
      slidesToScroll: 1
    };
    return (
      <div className="info-slider">
        <Slider {...settings}>
          <div>
            <p>There have been several modular construction designs that exist today and have been developed in order to try and address the ever-growing housing crisis that the world is facing. However, these designs do not incorporate some of the critical requirements that low-cost housing should provide to make it a viable options and to transform it from just a shelter to an actual home for long-term occupation. Which in our opinion, cost and keeping the rain off their backs should not be the only two criteria. </p>
          </div>
          <div>
            <p>Sand Puzzle House addresses the issues that most other designs overlook. The structure was put through rigorous testing involving projectile impact of over 100 mph, water pressure of more than 200 psi, and winds of over 200 mph … and passed all tests. This makes it suitable for deployment in areas with severe weather and/or as emergency housing during severe weather events like hurricanes and storms.
            </p>
          </div>
          <div>
            <p>As a result of the absence of localized stress points in the structure due to the elimination of hardware and fasteners, panels are allowed limited movement in relation to one another without catastrophic failure that could lead to injury or death. This made it an excellent option for deployment in seismic areas, both before any seismic events and as emergency housing directly after an event with possible smaller tremors still a possibility.</p>
          </div>
          <div>
            <p>As informal settlements and refugee camps are notorious for the high levels of crime and easy access to
            weapons, it was important that the structure could withstand penetration of some of the most common
            calibers of ammunition found in these locations. So, it was subjected to small arms fire including 9mm,
            45 ACP, and AK47 rounds. None of the ammunition penetrated the structure, making it ideal as a safe
            option for deployment in high crime areas and countries with a history of war and violence.</p>
          </div>
          <div>
            <p>Most of the current structures in informal settlements are constructed out of highly flammable materials with little or no access for firefighting equipment or firefighting resources on location. Add to this the limited escape avenues and the fact that most households still use open flame as a source of heat and light, and fires are an all too common occurrence resulting in multiple deaths. Sadly most fatalities in these cases consist mainly of small children and the elderly. It was important that the structure had to be fire-resistant, providing not just a means of combating the flames but also providing
            a larger window for possible escape from an inferno.</p>
          </div>
          <div>
            <p>To aid in this, as well as to provide access to one of
              the most basic requirements for survival, water, the design also incorporates a water storage facility.
              Not only is this part of the fire safety aspect, it also ensures safe storage of this valuable commodity that
              can be used for household purposes as well as to improve hygienic conditions. In turn, this will help in
              the fight against the spread of infectious diseases in these areas.</p>
          </div>
        </Slider>
      </div>
    );
  }
}