import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import userService from '../../utils/userService';

class SignupForm extends Component {

    state = {
        name: '',
        email: '',
        password: '',
        passwordConf: ''
    };

    handleChange = (e) => {
        this.props.updateMessage('');
        this.setState({
        [e.target.name]: e.target.value
        });
    }

    handleSubmit = async (e) => {
        e.preventDefault();
        try {
        await userService.signup(this.state);
        this.props.handleSignupOrLogin();
        this.props.history.push('/characters');
        } catch (err) {
        this.props.updateMessage(err.message);
        }
    }

    isFormInvalid() {
        return !(this.state.name && this.state.email && this.state.password === this.state.passwordConf);
    }

    render() {
        return (
        <div>
            <header className="header-footer">Sign Up</header>
            <form className="form-horizontal" onSubmit={this.handleSubmit} >
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="name">Name: </label>
                    <input type="text" className="form-control" id="name" value={this.state.name} name="name" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="email">Email: </label>
                    <input type="email" className="form-control" id="email" value={this.state.email} name="email" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="password">Password: </label>
                    <input type="password" className="form-control" id="password" value={this.state.password} name="password" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12">
                    <label htmlFor="passConfirm">Confirm Password: </label>
                    <input type="password" className="form-control" id="passConfirm" value={this.state.passwordConf} name="passwordConf" onChange={this.handleChange} />
                </div>
            </div>
            <div className="form-group">
                <div className="col-sm-12 text-center">
                <button className="btn btn-default" disabled={this.isFormInvalid()}>Sign Up</button>&nbsp;&nbsp;
                <Link to='/'>Cancel</Link>
                </div>
            </div>
            </form>
        </div>
        );
    }
}

export default SignupForm;
