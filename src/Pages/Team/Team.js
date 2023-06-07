import React from 'react';
import SingleTeamMember from './SingleTeamMember';
import team from './team.css';
import TeamMembers from './TeamMembers';

const Team = () => {
    return (
        <section id='team'>
            <div className="container-fluid">
                <div className="row getInvolve-hero-box">
                    <h1>Meet Our Team</h1>
                </div>
            </div>
            <div style={{padding:'50px '}} className="container">
                {
                    TeamMembers.map(team => <SingleTeamMember
                    team={team}
                    ></SingleTeamMember>)
                }
            </div>
        </section>
    );
};

export default Team;