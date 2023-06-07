import React from 'react';
import portfolio from './portfolio.css';
import img from '../../images/Portfolio_Page/Portfolio_Imgage-dummy.png'
import { Link } from 'react-router-dom';

const Portfolio = () => {
    return (
        <section>
            <div style={{margin:'20px auto'}} className="container">
                <div style={{margin:'10px 0'}} className="row">
                    <div className="section-title">
                        <h3 style={{color:'#050806'}}>Portfolio</h3>
                        <div className="hr-bar">
                            <hr className='border-danger border-4 opacity-100' />
                            <i style={{color:'#050806'}} class="bi bi-circle-fill"></i>
                        </div>
                    </div>
                </div>
                <div className="row portfolio-heading">
                    <div className="col-md-6">
                        <h5>All</h5>
                    </div>
                    <div className="col-md-6 custom-select">
                        <select>
                            <option>CATEGORY</option>
                        </select>
                    </div>
                </div>
                <div className="row portfolio-box">
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                    <Link style={{textDecoration:'none'}} to='/portfolio/walton'>
                        <div>
                            <img className='img-thumbnail' src={img} alt="" />
                            <div>
                                <h6>Lorem Ipsum</h6>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Portfolio;