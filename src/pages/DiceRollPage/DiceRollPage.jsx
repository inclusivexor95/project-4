import React from 'react';
import NavBar from '../../components/NavBar/NavBar'
import './DiceRollPage.css';
import DiceRoll from '../../components/DiceRoll/DiceRoll';


const DiceRollPage = ({ handleDieClick, handleLogout, rollChain, user, handlePlusMinus, plusMinus, handleRoll, rollResult }) => {
    return (
        <div className="DiceRollPage">
            <NavBar
                user={user}
                handleLogout={handleLogout}
            />
            <div className="DiceContainer D4"
                onClick={() => handleDieClick('d4')}
            >
                <div className="Die" id="d41"></div>
                <div className="Die" id="d42"></div>
            </div>
            <div className="DiceContainer D6"
                onClick={() => handleDieClick('d6')}
            >
                <div className="Die" id="d61"></div>
                <div className="Die" id="d62"></div>
                <div className="Die" id="d63"></div>
            </div>
            <div className="DiceContainer D8"
                onClick={() => handleDieClick('d8')}
            >
                <div className="Die" id="d81"></div>
                <div className="Die" id="d82"></div>
                <div className="Die" id="d83"></div>
                <div className="Die" id="d84"></div>
            </div>
            <div className="DiceContainer D10"
                onClick={() => handleDieClick('d10')}
            >
                <div className="Die" id="d101"></div>
                <div className="Die" id="d102"></div>
                <div className="Die" id="d103"></div>
                <div className="Die" id="d104"></div>
                <div className="Die" id="d105"></div>
            </div>
            <div className="DiceContainer D12"
                onClick={() => handleDieClick('d12')}
            >
                <div className="Die" id="d121"></div>
                <div className="Die" id="d122"></div>
                <div className="Die" id="d123"></div>
                <div className="Die" id="d124"></div>
                <div className="Die" id="d125"></div>
                <div className="Die" id="d126"></div>
            </div>
            <div className="DiceContainer D20"
                onClick={() => handleDieClick('d20')}
            >
                <div className="Die" id="d201"></div>
                <div className="Die" id="d202"></div>
                <div className="Die" id="d203"></div>
                <div className="Die" id="d204"></div>
                <div className="Die" id="d205"></div>
                <div className="Die" id="d206"></div>
                <div className="Die" id="d207"></div>
                <div className="Die" id="d208"></div>
                <div className="Die" id="d209"></div>
                <div className="Die" id="d2010"></div>
            </div>

            <DiceRoll
                rollChain={rollChain}
                handlePlusMinus={handlePlusMinus}
                plusMinus={plusMinus}
                handleRoll={handleRoll}
                rollResult={rollResult}
            />
        </div>
    );
}

export default DiceRollPage;