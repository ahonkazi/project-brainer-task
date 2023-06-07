import React from 'react';
import socialIconBar from './socialIconBar.css';

const SocialIconBar = () => {
    return (
        <section id='socialIconBar'>
            <ul className="socialIconBar">
                <li><a href="https://facebook.com/artcombdl/"><i class="bi bi-facebook"></i></a></li>
                <li><a href="https://youtube.com/c/artcombd"><i class="bi bi-youtube"></i></a></li>
                <li><a href="https://www.linkedin.com/in/artistic-communication-8b65aa107?trk=public_profile_browsemap&originalSubdomain=bd"><i class="bi bi-linkedin"></i></a></li>
            </ul>
        </section>
    );
};

export default SocialIconBar;