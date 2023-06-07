import React, { useState } from 'react';
import Collapse from 'react-bootstrap/Collapse';
import img from '../../images/Portfolio_Page/Portfolio_Imgage-dummy.png';

const PortfolioDetails = () => {

    const [open4, setOpen4] = useState(false);

    return (
        <div className="container">
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
                <div className="row portfolio-details-container">
                    <div className="col-md-7">
                        <img className='img-fluid' src={img} alt="" />
                    </div>
                    <div className="col-md-1"></div>
                    <div className="col-md-4">
                        <h4>Walton</h4>
                        <hr />
                        <div className='portfolio-collapseBox'
                            onClick={() => setOpen4(!open4)}
                            aria-controls="example-collapse-text"
                            aria-expanded={open4}
                        ><i className="bi bi-three-dots"></i> <span>Lorem ipsumsed diam  enim ad  veniam, quis</span> </div>
                        <Collapse in={open4}>
                            <div className='portfolio-collapse-text' id="example-collapse-text">
                            Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
                            terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
                            labore wes anderson cred nesciunt sapiente ea proident.
                            </div>
                        </Collapse>
                    </div>
                </div>
        </div>
    );
};

export default PortfolioDetails;