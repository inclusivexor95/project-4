import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = (props) => {
    let nav = props.user ?
        <div>
        <Link to='' className='NavBar-link' onClick={props.handleLogout}>LOG OUT</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <span className='NavBar-welcome'>WELCOME, {props.user.name}</span>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/characters' className='NavBar-link'>CHARACTER LIST</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/dice' className='NavBar-link'>DICE ROLLER</Link>
        </div>
        :
        <div>
        <Link to='/login' className='NavBar-link'>LOG IN</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/signup' className='NavBar-link'>SIGN UP</Link>
        &nbsp;&nbsp;&nbsp;|&nbsp;&nbsp;&nbsp;
        <Link to='/dice' className='NavBar-link'>I JUST WANNA ROLL SOME DICE</Link>
        </div>;

    return (
        <div className='NavBar'>
        {nav}
        </div>
    );
};

export default NavBar;