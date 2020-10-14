import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

const NavBar = ({ user, handleLogout, path }) => {

    let diceTernary = <React.Fragment>
        {/^\/dice\/?$/.test(path) ? 
            null :
            <React.Fragment>
                {/* {/^\/characters\/?$/.test(path) ? null : <span>|</span>} */}
                <span>|</span>
                <Link to='/dice'>DICE ROLLER</Link>
            </React.Fragment>
        }   
    </React.Fragment>;

    let nav = user ?
        <div>
            <Link to='' onClick={handleLogout}>LOG OUT</Link>
            <span>|</span>
            <span>WELCOME, {user.name}</span>
            <span>|</span>
            {/^\/characters\/?$/.test(path) ? 
                null :
                <Link to='/characters'>CHARACTER LIST</Link>
            }
            {diceTernary}
        </div>
        :
        <div>
            <Link to='/login'>LOG IN</Link>
            <span>|</span>
            <Link to='/signup'>SIGN UP</Link>
            {diceTernary}
        </div>;


    return (
        <div className='NavBar'>
            {nav}
        </div>
    );
};

export default NavBar;