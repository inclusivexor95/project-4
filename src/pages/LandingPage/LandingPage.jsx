import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar';
import './LandingPage.css';


const LandingPage = (props) => {
    return (
        <div className="LandingPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <footer className='header-footer'>
            </footer>
        </div>
    );
};


export default LandingPage;