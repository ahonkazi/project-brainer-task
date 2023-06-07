import React from 'react';
import contact from './contact.css';

const Contact = () => {
    return (
        <section className="container-fluid" id="contact">
            <div className="container">
                <div className="row">
                    <div className="col-md-7">
                        <form>
                            <label className='form-label' htmlFor="name">Name *</label>
                            <input className='form-control' name='name' required type="text" />
                            <label className='form-label' htmlFor="email">Email *</label>
                            <input className='form-control' type="email" name="email" required id="" />
                            <label className='form-label' htmlFor="subject">Subject</label>
                            <input className='form-control' name='subject' type="text" />
                            <label className='form-label' htmlFor="message">Message</label>
                            <textarea className='form-control' name='message'></textarea>
                            <input type="submit" value="Submit" className='btn btn-secondary' />
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;