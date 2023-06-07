import React from 'react';
import tenderImg from '../../images/icons/e-tender.png';
import Pagination from 'react-bootstrap/Pagination';

let active = 2;
let items = [];
for (let number = 1; number <= 5; number++) {
    items.push(
    <Pagination.Item key={number} active={number === active}>
      {number}
    </Pagination.Item>,
    );
}

const ETender = () => {
    return (
        <section>
            <div className="container-fluid getInvolve-hero-box">
                <div className="container">
                <div className="row text-start">
                        <h1>e-Tender</h1>
                        <hr className='border border-1 opacity-100'/>
                        <span style={{fontSize:'15px'}}>Lorem ipsum dolor sit amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut <br />
                            laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis Lorem ipsum dolor sit <br />
                            amet, consectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna <br />
                            aliquam erat volutpat. Ut wisi enim ad minim veniam, quis  
                        </span>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row shadow row job-container">
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                    <div className="job-box">
                        <img style={{borderRadius:'50%',padding:'5px'}} src={tenderImg} alt="" />
                        <div>
                            <h5 style={{color:'#ed2224'}}>Save the Children</h5>
                            <p><i class="bi bi-caret-right"></i> RFP for Consultant Hiring for Baseline Study of BMZ Project</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="container pagination">
                <Pagination size="sm">{items}</Pagination>
            </div>
        </section>
    );
};

export default ETender;