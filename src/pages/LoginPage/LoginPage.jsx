import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './LoginPage.css';
import userService from '../../utils/userService';

class LoginPage extends Component {
    
    state = {
        email: '',
        pw: ''
    };

    handleChange = (e) => {
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await userService.login(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/characters');
        } catch (err) {
        }
    }

    render() {
        return (
        <div className="LoginPage">
            <header className="header-footer">Log In</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" value={this.state.pw} name="pw" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                    <button className="btn btn-default">Log In</button>&nbsp;&nbsp;&nbsp;
                    <Link to='/'>Cancel</Link>
                </div>
            </div>
            </form>
        </div>
        );
    }
}

export default LoginPage;
