import React from 'react';
import './styles.css';

import { Link } from 'react-router-dom';

import logoImg from '../../assets/images/logo.svg';
import backIcon from '../../assets/images/icons/back.svg';

import './styles.css';


interface PageHeaderProps {
    title: string;
    description?: string; // question to mark to indicate that this is not mandatory.
    
}

const PageHeader: React.FC<PageHeaderProps> = (props) => {
    return(
        <header className="page-header">
        <div className="top-bar-container">
         <Link to="/">
             <img src={backIcon} alt="back"/>
         </Link>
         <img src={logoImg} alt="Proffy"/>
        </div>

        <div className="header-content">
            <strong>{props.title}</strong>
             {props.description && <p>{props.description}</p>}
             {/* could aslo be a ternary operation */}
            {props.children}
        </div>
        
    
    </header>
    )
}

export default PageHeader;