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
import scoresService from '../../utils/scoresService';
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

    // getInitialState() {
    //     return {
        
    //     selColorIdx: 0,
    //     guesses: [this.getNewGuess()],
    //     code: this.genCode(),
    //     elapsedTime: 0,
    //     isTiming: true
    //     };
    // }

    // getNewGuess() {
    //     return {
    //     code: [null, null, null, null],
    //     score: {
    //         perfect: 0,
    //         almost: 0
    //     }
    //     };
    // }

    // genCode() {
    //     let numColors = this.state && colors[this.state.difficulty].length;
    //     numColors = numColors || 4;
    //     return new Array(4).fill().map(dummy => Math.floor(Math.random() * numColors));
    // }

    // getWinTries() {
    //     // if winner, return num guesses, otherwise 0 (no winner)
    //     let lastGuess = this.state.guesses.length - 1;
    //     return this.state.guesses[lastGuess].score.perfect === 4 ? lastGuess + 1 : 0;
    // }

    // isHighScore = (guessesCopy) => {
    //     let lastScore = this.state.scores[this.state.scores.length - 1];
    //     return (guessesCopy.length < lastScore.numGuesses || (
    //     guessesCopy.length === lastScore.numGuesses &&
    //     this.state.elapsedTime < lastScore.seconds
    //     ));
    // }

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

    // async componentDidMount() {
    //     const scores = await scoresService.index();
    //     this.setState({ scores });
    // }

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
            <Route path='/characters' render={() => 
                <CharPage
                user={this.state.user}
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
