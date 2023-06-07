import React from 'react';
import credentialSlider from './credentialSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clients from '../../../Pages/OurClients/ClientsInfo';

const CredentialSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 2,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 2,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 800, min: 464 },
          items: 1,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1,
          partialVisibilityGutter: 30
        }
    };

    return (
        <Carousel
            showDots={true}
            infinite={true}
            autoPlay={true}
            autoPlaySpeed={3000}
            partialVisible={true}
            responsive={responsive}
        >
            {
                Clients.map(list => <div className='credential-slider'>
                            <img src={list.img} alt="" />
                            <span className='credential-slider-text-box'>{list.description}</span>
                            <div className='credential-slider-button-box shadow-sm'>
                                <span><strong>Lorem Ipsum</strong></span><br />
                                <span>Lorem Ipsum</span>
                            </div>
                        </div>)
            }
        </Carousel>
    );
};

export default CredentialSlider;