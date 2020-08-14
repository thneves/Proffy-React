import React, { useState, useEffect } from 'react';

import { Link } from 'react-router-dom'

import logoImg from '../../assets/images/logo.svg';
import landingImg from '../../assets/images/landing.svg';
import giveClassesIcon from '../../assets/images/icons/give-classes.svg';
import studyIcon from '../../assets/images/icons/study.svg';
import purpleHeartIcon from '../../assets/images/icons/purple-heart.svg'

import './styles.css';
import api from '../../services/api';




function Landing() {
    
    const [totalConnections, setTotalConnections] = useState(0);

    useEffect(() => {
        api.get('connections').then(response => {
            
            const { total } = response.data;

            setTotalConnections(total);
        })
    }, [])

    
      
    
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

                    <Link to="/study" className="study">
                        <img src={studyIcon} alt="Studying" />
                        Study
                    </Link>

                    <Link to="/give-classes" className="give-classes">
                        <img src={giveClassesIcon} alt="Teaching" />
                        Teach
                    </Link>

                </div>

                <span className="total-connections">
                    total of {totalConnections} connections <img src={purpleHeartIcon} alt="Purple Heart"/>
                </span>
            </div>
        </div>
    )
}


export default Landing;

