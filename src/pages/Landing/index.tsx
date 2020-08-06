import React from 'react';

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';




function Landing() {
    return (
        <div id='page-landing'>
            <div id='page-landing-content' className="container">
                <div className="logo-container">
                    <img src={logoImg} alt="Logo da Proffy" />
                    <h2>Your online studying platform</h2>
                </div>

                <img
                    src={landingImg}
                    alt="drawning of people using their devices"
                    className="hero-image" />

                <div className="buttons-container">

                    <a href="#" className="study">
                        <img src={studyIcon} alt="Studying" />
                        Study
                    </a>

                    <a href="#" className="give-classes">
                        <img src={giveClassesIcon} alt="" />
                        Teach
                    </a>

                </div>

                <span className="total-connections">
                    total of 200 connections <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    )
}


export default Landing;

