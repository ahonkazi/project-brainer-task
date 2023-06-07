import React from 'react';
import clientsSlider from './clientsSlider.css';
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import Clients from '../../../Pages/OurClients/ClientsInfo'

const ClientsSlider = () => {

    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5,
          partialVisibilityGutter: 40
        },
        desktop: {
          breakpoint: { max: 3000, min: 800 },
          items: 3,
          partialVisibilityGutter: 40
        },
        tablet: {
          breakpoint: { max: 800, min: 480 },
          items: 2,
          partialVisibilityGutter: 30
        },
        mobile: {
          breakpoint: { max: 480, min: 0 },
          items: 1,
          partialVisibilityGutter: 20
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
              Clients.map(list => <div className='client-slider-container'
              key={list.img.src}>
                <img className='img-thumbnail' src={list.img} alt="" />
              </div>)
            }
        </Carousel>
    );
};

export default ClientsSlider;