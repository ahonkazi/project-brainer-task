import React from 'react';
import team from './team.css';

const SingleTeamMember = ({team}) => {

    console.log(team);

    return (
        <div className="row team-container">
            <div className="col-md-3">
                <img className='img-thumbnail shadow-sm' src={team.img} alt="" />
            </div>
            <div className="col-md-1"></div>
            <div className="col-md-8 team-text-box">
                <h4>{team.name}</h4>
                <span className='team-designation'>{team.designation}</span>
                <span className='about-text'>{team.description}</span>
            </div>
        </div>
    );
};

export default SingleTeamMember;