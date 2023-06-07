import React from 'react';
import teamSlider from './teamSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TeamMembers from '../../../Pages/Team/TeamMembers';

const TeamSlider = () => {

    const responsive = {
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 800, min: 480 },
          items: 2
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1
        }
    };

    return (
        <div className="teamSlider">
            <Carousel
                showDots={true}
                infinite={true}
                autoPlay={true}
                autoPlaySpeed={3000}
                partialVisible={true}
                responsive={responsive}
             >
                {
                    TeamMembers.map(list => <div
                    key={list.name}
                    className='team-slide'>
                        <img className='img-thumbnail' src={list.img} alt="" />
                        <div className="team-slide-text-box">
                            <h6>{list.name}</h6>
                            <span>{list.designation}</span>
                        </div>
                    </div>)
                }
            </Carousel>
        </div>
    );
};

export default TeamSlider;