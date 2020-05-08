import React, { Component } from 'react';
import './App.css';
import { Route, Switch, Redirect } from 'react-router-dom';
// import GamePage from '../../pages/GamePage/GamePage';
import LandingPage from '../LandingPage/LandingPage';
import DiceRollPage from '../DiceRollPage/DiceRollPage';
// import SettingsPage from '../SettingsPage/SettingsPage';
// import HighScoresPage from '../HighScoresPage/HighScoresPage';
import SignupPage from '../SignupPage/SignupPage';
import LoginPage from '../LoginPage/LoginPage';
import userService from '../../utils/userService';
import tokenService from '../../utils/tokenService';
import CharPage from '../CharPage/CharPage';


class App extends Component {
    constructor() {
        super();
        this.state = {
        // ...this.getInitialState(),
        rollChain: [],
        plusMinus: '+',
        // difficulty: 'Easy',
        // scores: [],
        // Initialize user if there's a token, otherwise null
        user: userService.getUser()
        };
    }

    diceRoll(sides) {
        return Math.ceil(Math.random() * sides);
    }

 
    /*--- Callback Methods ---*/

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

    /*--- Lifecycle Methods ---*/


    render() {
        // let winTries = this.getWinTries();
        return (
        <div className="Wrapper">
            <h1>D&D Character Creator</h1>
            <Switch>
            <Route exact path='/' render={() =>
                <LandingPage
                // winTries={winTries}
                // colors={colors[this.state.difficulty]}
                // selColorIdx={this.state.selColorIdx}
                // guesses={this.state.guesses}
                // elapsedTime={this.state.elapsedTime}
                // isTiming={this.state.isTiming}
                // handleColorSelection={this.handleColorSelection}
                // handleNewGameClick={this.handleNewGameClick}
                // handlePegClick={this.handlePegClick}
                // handleScoreClick={this.handleScoreClick}
                // handleTimerUpdate={this.handleTimerUpdate}
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
            <Route exact path='/dice' render={() => 
                <DiceRollPage
                handleDieClick={this.handleDieClick}
                handleLogout={this.handleLogout}
                rollChain={this.state.rollChain}
                user={this.state.user}
                handlePlusMinus={this.handlePlusMinus}
                plusMinus={this.state.plusMinus}
                handleRoll={this.handleRoll}
                rollResult={this.state.rollResult}
                />
            }/>
            </Switch>
        </div>
        );
    }
}

export default App;
