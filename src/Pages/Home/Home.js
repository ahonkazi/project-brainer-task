import React from 'react';
import { Link } from 'react-router-dom';
import home from './home.css';
import aboutImg from '../../images/about/Img.png';
import ServicesSection from '../../Components/Services/ServicesSection';
import GallerySection from '../Gallery/GallerySection';
import HeroSlider from '../../Components/Slider/HeroSlider/HeroSlider';
import TeamSlider from '../../Components/Slider/TeamSlider/TeamSlider';
import ClientsSlider from '../../Components/Slider/ClientsSlider/ClientsSlider';
import CredentialSlider from '../../Components/Slider/CredentialSlider/CredentialSlider';

const Home = () => {
    return (
        <section>

            {/* Hero Slider  */}

            <HeroSlider></HeroSlider>

            {/* About Section  */}

            <div style={{padding:'70px 0'}} className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>About</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-7">
                        <span className='about-text'>Artistic Communication (artcom) is the Communication agency in Bangladesh, started operations in 
                        2015 with the dream to be the Brand Architect. We Create Brands. We Build Businesses. We Establish 
                        Legacies. We do what traditional advertising, marketing, public relations and digital agencies 
                        cannot; enhance brand resonance, catalyze brand engagement and optimize brand advocacy.<Link to='/about'>read more</Link>
                        </span>
                        <div className='text-center'>
                            <button className="btn-green shadow-sm vision-btn">VISION</button>
                            <span className='about-text vision-text shadow-sm'>
                            Our vision is to keep the quality instead of doing quantitative job. We strongly believe that 
                            client perception and experience with amalgamation of creativity will create always better output <br /><br />
                            Considering all these artcom tries to keep its client as minimum as possible and wants to serve 
                            with highest level of state of art. We always drive for the best return on clients investment.
                            </span>
                        </div>
                    </div>
                    <div className="col-md-5 about-img">
                        <img src={aboutImg} alt="" />
                    </div>
                </div>
            </div>


            {/* Service Section  */}

            <ServicesSection></ServicesSection>


            {/* Portfolio Section  */}


            <div style={{padding:'30px 0'}} className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>Portfolio</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="portfolio-container">
                    <div className="row portfolio-container-box-1">
                        <div className="col">
                            <h6>AUDIOVISUAL PRODUCTIONS</h6>
                        </div>
                        <div className="col">
                            <h6>MEDIA ADVOCACY</h6>
                        </div>
                        <div className="col">
                            <h6>CAMPAIGN EVENT AND ACTIVATION</h6>
                        </div>
                        <div className="col">
                            <h6>RESEARCH</h6>
                        </div>
                    </div>
                    <div className="row portfolio-container-box-2">
                        <div className="col">
                            <h6>MATERIALS DEVELOPMENT PHOTOGRAPHY, DESIGN AND PRINTING</h6>
                        </div>
                        <div className="col">
                            <h6>BRANDING MATERIALS AND GENERAL SUPPLY</h6>
                        </div>
                        <div className="col">
                            <h6>SERVICES</h6>
                        </div>
                        <div className="col">
                            <h6>ARTCOM SOCIAL RESPONSIBILITY</h6>
                        </div>
                    </div>
                </div>
            </div>


            {/* our Clients Section  */}


            <div style={{padding:'30px 0'}} id="clients-section" className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>Our Clients</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <ClientsSlider></ClientsSlider>
                </div>
            </div>


            {/* Team Section  */}


            <div id='artcomTeam' style={{padding:'30px 0'}} className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>artcom Team</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <TeamSlider></TeamSlider>
                </div>
            </div>


            {/* Credential section  */}


            <div style={{padding:'30px 0'}} id='credential' className="container-fluid">
                <div className="container">
                    <div className="row">
                        <div className="section-title">
                            <h3 style={{color:'#050806'}}>Credential</h3>
                            <div className="hr-bar">
                                <hr className='border-danger border-4 opacity-100' />
                                <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        <CredentialSlider></CredentialSlider>
                    </div>
                </div>
            </div>


            {/* Gallery Section  */}

            <div style={{padding:'30px 0'}} className="container">
                <div className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>Gallery</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <GallerySection></GallerySection>
            </div>

        </section>
    );
};

export default Home;