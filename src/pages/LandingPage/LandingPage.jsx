import React from 'react';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';


const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <div id="dieLogo">
                <svg viewBox="0 0 100 100">
                    <polyline points="50,99 92.4,75.7 92.4,25.4 50,1 7.6,25.4 7.6,75.7 50,99 92.4,75.7" fill="none"></polyline>
                    <polyline points="50,80.3 76.9,31.9 23.1,31.9 50,80.3 76.9,31.9" fill="none"></polyline>
                    <polyline points="7.6,75.7 50,80.3 92.4,75.7" fill="none"></polyline>
                    <polyline points="7.6,75.7 23.1,31.9 50,1" fill="none"></polyline>
                    <polyline points="92.4,75.7 76.9,31.9 50,1" fill="none"></polyline>
                    <polyline points="50,99 50,80.3" fill="none"></polyline>
                    <polyline points="92.4,25.4 76.9,31.9" fill="none"></polyline>
                    <polyline points="7.6,25.4 23.1,31.9" fill="none"></polyline>
                </svg>
            </div>
        </div>
    );
};


export default LandingPage;