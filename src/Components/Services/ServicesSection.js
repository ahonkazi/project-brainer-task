import React from 'react';
import service from './services.css';
import img1 from '../../images/Services_Page/1.png';
import img2 from '../../images/Services_Page/2.png';
import img3 from '../../images/Services_Page/3.png';
import img4 from '../../images/Services_Page/4.png';
import img5 from '../../images/Services_Page/5.png';
import img6 from '../../images/Services_Page/6.png';
import img7 from '../../images/Services_Page/7.png';
import img8 from '../../images/Services_Page/8.png';
import img9 from '../../images/Services_Page/9.png';
import img10 from '../../images/Services_Page/10.png';
import img11 from '../../images/Services_Page/11.png';
import img12 from '../../images/Services_Page/12.png';
import img13 from '../../images/Services_Page/13.png';
import img14 from '../../images/Services_Page/14.png';

const ServicesSection = () => {
    return (
        <div id='service' className="container-fluid">
            <div className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>Services</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="service-box">
                    <div className="row service-box-1">
                        <div className="col">
                            <img src={img1} alt="" />
                            <h6>Media Advocacy</h6>
                        </div>
                        <div className="col">
                            <img src={img2} alt="" />
                            <h6>IEC/BCC Materials Design and Development</h6>
                        </div>
                        <div className="col">
                            <img src={img3} alt="" />
                            <h6>Audiovisual Development</h6>
                        </div>
                        <div className="col">
                            <img src={img4} alt="" />
                            <h6>Graphics Design</h6>
                        </div>
                        <div className="col">
                            <img src={img5} alt="" />
                            <h6>Outdoor Branding</h6>
                        </div>
                        <div className="col">
                            <img src={img6} alt="" />
                            <h6>Digital and Offset Printing</h6>
                        </div>
                        <div className="col">
                            <img src={img7} alt="" />
                            <h6>Media Buying</h6>
                        </div>
                    </div>
                    <div className="row service-box-2">
                        <div className="col">
                            <img src={img8} alt="" />
                            <h6>Campaign Event Management and Activation</h6>
                        </div>
                        <div className="col">
                            <img src={img9} alt="" />
                            <h6>Marketing & Strategy Development</h6>
                        </div>
                        <div className="col">
                            <img src={img10} alt="" />
                            <h6>General and Branded Materials Supply</h6>
                        </div>
                        <div className="col">
                            <img src={img11} alt="" />
                            <h6>Social Media Marketing</h6>
                        </div>
                        <div className="col">
                            <img src={img12} alt="" />
                            <h6>Theatre and Indigenous Media</h6>
                        </div>
                        <div className="col">
                            <img src={img13} alt="" />
                            <h6>2D and 3D Animation</h6>
                        </div>
                        <div className="col">
                            <img src={img14} alt="" />
                            <h6>Exterior and Interior Decoration</h6>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ServicesSection;