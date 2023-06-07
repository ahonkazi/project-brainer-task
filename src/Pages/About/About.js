import React from 'react';
import about from './about.css';
import img from '../../images/about/Img.png';
import { Link } from 'react-router-dom';

const About = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row getInvolve-hero-box">
                    <h1>About Us</h1>
                </div>
            </div>
            <div className="container">
                <div className="row about-hero-img">
                    <img className='img-fluid' src={img} alt="" />
                </div>
                <div style={{marginBottom:'30px'}} className="row">
                    <span className='about-text'>
                    Artistic Communication (artcom) is the Communication agency in Bangladesh, started operations in 2015 with the dream to be the Brand Architect. We Create Brands. We Build Businesses. We Establish Legacies. We do what traditional advertising, marketing, public relations and digital agencies cannot; enhance brand resonance, catalyze brand engagement and optimize brand advocacy. We are the point where insight meets execution and we bridge the divide between what a brand is now and what it could be in the future. <br /><br />
                    We are committed to provide professional quality service to our clients in the field of Mass Media Communication, Behavior Change Communication and Total Advertisement. We always put ourselves in our client’s shoes to achieve their program adjectives as per the demand of target audience through appropriate process of communication both is development and commercial arena.
                    </span>
                    <h3 className='about-heading'>Our Vision</h3>
                    <span className='about-text'>
                    Our vision is to keep the quality instead of doing quantitative job. We strongly believe that client perception and experience with amalgamation of creativity will create always better output. Considering all these artcom tries to keep its client as minimum as possible and wants to serve with highest level of state of art. We always drive for the best return on client's investment.
                    </span>
                    <Link to='/contact'><button className='btn btn-info shadow'>Hear From Us</button></Link>
                </div>
            </div>
        </section>
    );
};

export default About;