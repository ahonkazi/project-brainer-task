import React, { useState } from 'react';
import getinvolve from './getinvolve.css';
import icon1 from '../../images/icons/handshake.png';
import icon2 from '../../images/icons/req.png';
import icon3 from '../../images/icons/bid.png';
import Collapse from 'react-bootstrap/Collapse';
import { Link } from 'react-router-dom';

const GetInvolved = () => {

    const [open, setOpen] = useState(false);
    const [open2, setOpen2] = useState(false);
    const [open3, setOpen3] = useState(false);

    return (
        <section id='getInvolved'>
            <div className="container-fluid">
                <div className="row getInvolve-hero-box">
                    <h1>Get Involved</h1>
                    <span>Where to start? First, follow us on <a href="https://facebook.com/artcombdl/" target="_blank">Facebook</a>, <a href="https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd" target="_blank">Linkedin</a> and subscribe to our <a href="https://youtube.com/c/artcombd" target="_blank">Youtube</a> channel.</span>
                </div>
                <div style={{padding:'30px 0'}} className="row">
                    <div className="section-title">
                        <h3>More Ways to get involved</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                    <div className="card-container col-md-8">
                        <div className="single-card shadow">
                            <img src={icon1} alt="" />
                            <h4>Become a Partner</h4>
                            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamv, quis </span>
                            <Link to='/getinvolved/partner'>Try it</Link>
                        </div>
                        <div className="single-card shadow">
                            <img src={icon2} alt="" />
                            <h4>Job Recruitment</h4>
                            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamv, quis </span>
                            <Link to='/getinvolved/jobs'>Apply</Link>
                        </div>
                        <div className="single-card shadow">
                            <img src={icon3} alt="" />
                            <h4>e-Tender</h4>
                            <span>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniamv, quis </span>
                            <Link to='/getinvolved/e-tender'>Explore</Link>
                        </div>
                    </div>
                </div>
                <div className="row collapse-container">
                    <div className="col-md-8">
                        <div>
                        <div
                        onClick={() => setOpen(!open)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open}
                        className="collapse-box shadow-sm">
                            <h4>Become a Partner</h4>
                            <i class="bi bi-plus"></i>
                        </div>
                        <Collapse in={open}>
                            <div className="collapse-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br />
                            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                            </div>
                        </Collapse>
                        </div>
                        <div>
                        <div
                        onClick={() => setOpen2(!open2)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open2}
                        className="collapse-box shadow-sm">
                            <h4>Job Recruitment</h4>
                            <i class="bi bi-plus"></i>
                        </div>
                        <Collapse in={open2}>
                            <div className="collapse-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br />
                            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                            </div>
                        </Collapse>
                        </div>
                        <div>
                        <div
                        onClick={() => setOpen3(!open3)}
                        aria-controls="example-collapse-text"
                        aria-expanded={open3}
                        className="collapse-box shadow-sm">
                            <h4>e-Tender</h4>
                            <i class="bi bi-plus"></i>
                        </div>
                        <Collapse in={open3}>
                            <div className="collapse-text">
                            Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt <br />
                            ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis 
                            </div>
                        </Collapse>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default GetInvolved;