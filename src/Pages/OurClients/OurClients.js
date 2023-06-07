import React from 'react';
import CredentialSlider from '../../Components/Slider/CredentialSlider/CredentialSlider';

const OurClients = () => {
    return (
        <section className="container">
            <div style={{padding:'30px 0'}} className="row">
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
        </section>
    );
};

export default OurClients;