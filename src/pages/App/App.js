import React, { Component } from 'react';
import './App.css';
import { Route, Switch } from 'react-router-dom';
import LandingPage from '../LandingPage/LandingPage';
import DiceRollPage from '../DiceRollPage/DiceRollPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import CharPage from '../CharPage/CharPage';
import NewAbility from '../NewAbility/NewAbility';
import NewItem from '../NewItem/NewItem';
import AllItems from '../AllItems/AllItems';


class App extends Component {
    constructor() {
        super();
        this.state = {
        rollChain: [],
        plusMinus: '+',
        user: userService.getUser()
        };
    }

    diceRoll(sides) {
        return Math.ceil(Math.random() * sides);
    }

    handleDieClick = (die) => {
        const currentRollChain = [...this.state.rollChain];
        currentRollChain.push(die);
        this.setState({rollChain: currentRollChain});
    }

    handlePlusMinus = () => {
        if (this.state.plusMinus === '+') {
            this.setState({plusMinus: '-'});
        };
        if (this.state.plusMinus === '-') {
            this.setState({plusMinus: '+'});
        };
    }

    handleRoll = (numInput) => {
        if (this.state.plusMinus === '-') {
            numInput = 0 - numInput;
        };
        const rollValue = this.state.rollChain.reduce((total, die) => {
            return total + this.diceRoll(parseInt(die.slice(1)));
        }, numInput);

        this.setState({rollResult: rollValue, rollChain: []});
    }

    handleLogout = () => {
        userService.logout();
        this.setState({ user: null });
    }

    handleSignupOrLogin = () => {
        this.setState({user: userService.getUser()});
    }

    render() {
        return (
        <div className="Wrapper">
            <Switch>
            <Route exact path='/' render={() =>
                <LandingPage
                handleLogout={this.handleLogout}
                user={this.state.user}
                />
            }/>
            <Route path='/characters' render={({ history, match }) => 
                <CharPage
                user={this.state.user}
                match={match}
                history={history}
                handleLogout={this.handleLogout}
                />
            }/>
            <Route exact path='/abilities/new' render={({ history, match }) => 
                <NewAbility
                user={this.state.user}
                match={match}
                history={history}
                option='create'
                />
            }/>
            <Route exact path='/items/new' render={({ history, match }) => 
                <NewItem
                user={this.state.user}
                match={match}
                history={history}
                option='create'
                />
            }/>
            <Route exact path='/items/all' render={({ history, match }) => 
                <AllItems
                user={this.state.user}
                match={match}
                history={history}
                />
            }/>
            <Route exact path='/signup' render={({ history }) => 
                <SignupPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
            <Route exact path='/login' render={({ history }) => 
                <LoginPage
                history={history}
                handleSignupOrLogin={this.handleSignupOrLogin}
                />
            }/>
            <Route exact path='/dice' render={({ history }) => 
                <DiceRollPage
                handleDieClick={this.handleDieClick}
                handleLogout={this.handleLogout}
                rollChain={this.state.rollChain}
                user={this.state.user}
                handlePlusMinus={this.handlePlusMinus}
                plusMinus={this.state.plusMinus}
                handleRoll={this.handleRoll}
                rollResult={this.state.rollResult}
                history={history}
                />
            }/>
            </Switch>
        </div>
        );
    }
}

export default App;
