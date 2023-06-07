import React from 'react';
import jobs from './jobs.css';
import jobImg from '../../images/icons/job-icon.png';
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

const Jobs = () => {
    return (
        <section>
            <div className="container-fluid  getInvolve-hero-box">
                <div className="container">
                        <div className="row text-start">
                            <h1>Job Recruitment</h1>
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
                    <div className="shadow row job-container">
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
                                </div>
                            </div>
                            <div className="job-box">
                                <img src={jobImg} alt="" />
                                <div>
                                    <h5>International Rice Research Institute (IRRI)</h5>
                                    <p><i class="bi bi-caret-right"></i> Assistant Scientist - Grain Quality</p>
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

export default Jobs;