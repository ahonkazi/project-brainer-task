import React from 'react';
import partner from './patner.css';

const Partner = () => {
    return (
        <section>
            <div className="container-fluid">
                <div className="row getInvolve-hero-box text-start">
                    <h1 style={{margin:'auto 17%'}}>Thank you for becoming <br /> a Partner of artcom</h1>
                </div>
                <div style={{padding:'50px 0'}} className="row">
                    <div className="patrner-form-container col-md-8 shadow">
                        <div className="partner-form-title">
                            <h4>Partner Application Form</h4>
                            <span>Tell us about you and your company</span>
                        </div>
                        <form className="partner-form">
                            <div className="patrner-form-fullWidth">
                                <label htmlFor="name">Name *</label><br />
                                <input type="text" name="name" required />
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="email">Email *</label><br />
                                <input type="email" name='email' required />
                            </div>
                            <div className='patrner-form-halWidth groupInput'>
                                <div className="patrner-form-phone">
                                    <label htmlFor="phone">Phone *</label><br />
                                    <div>
                                        <input type="number" name='phone' required /><br />
                                        <span>Area Code</span>
                                    </div>
                                    <div>
                                        <input type="number" name='phone' required /><br />
                                        <span>Phone Number</span>
                                    </div>
                                </div>
                                <div className='patrner-form-hearAboutUs'>
                                    <label htmlFor="hearFromUs">How did you hear about us? *</label><br />
                                    <input type="text" name='hearFromUs' required />
                                </div>
                            </div>
                            <hr />
                            <span>Company Information</span>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="companyName">Company Name *</label><br />
                                <input type="text" name='companyName' required />
                            </div>
                            <div className='patrner-form-halWidth'>
                                <label htmlFor="companyType">Types of Business *</label><br />
                                <input type="text" name='companyType' required />
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="address">Address</label><br />
                                <div>
                                    <input type="text" name='address' /><br />
                                    <span>Street Address</span>
                                </div>
                                <div>
                                    <input type="text" name='address' /><br />
                                    <span>Address Line 2</span>
                                </div>
                                <div>
                                    <input type="text" name='address' /><br />
                                    <span>City</span>
                                </div>
                                <div>
                                    <input type="text" name='address' /><br />
                                    <span>Postal/ Zip Code</span>
                                </div>
                            </div>
                            <div className='patrner-form-fullWidth'>
                                <label htmlFor="website">Website</label><br />
                                <input type="text" name='website' /><br />
                                <span>https://www.example.com</span>
                            </div>
                            <div className="terms">
                                <span>Terms and Condition</span><br />
                                <div>
                                    <input type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                                <div>
                                    <input type="checkbox" name="terms1" id="" />
                                    <label htmlFor="terms1">lorem ipsum lorem ipsum</label>
                                </div>
                            </div>
                            <input className='shadow-sm' type="submit" value="Submit Info" />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Partner;