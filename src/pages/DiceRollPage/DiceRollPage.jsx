import React from 'react';
import { Link } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './DiceRollPage.css';
import DiceRoll from '../../components/DiceRoll/DiceRoll';


const DiceRollPage = (props) => {
    return (
        <div className="DiceRollPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />
            <div className="DiceContainer D4"
                onClick={() => props.handleDieClick('d4')}
            >
                <div className="Die" id="d41"></div>
                <div className="Die" id="d42"></div>
            </div>
            <div className="DiceContainer D6"
                onClick={() => props.handleDieClick('d6')}
            >
                <div className="Die" id="d61"></div>
                <div className="Die" id="d62"></div>
                <div className="Die" id="d63"></div>
            </div>
            <div className="DiceContainer D8"
                onClick={() => props.handleDieClick('d8')}
            >
                <div className="Die" id="d81"></div>
                <div className="Die" id="d82"></div>
                <div className="Die" id="d83"></div>
                <div className="Die" id="d84"></div>
            </div>
            <div className="DiceContainer D10"
                onClick={() => props.handleDieClick('d10')}
            >
                <div className="Die" id="d101"></div>
                <div className="Die" id="d102"></div>
                <div className="Die" id="d103"></div>
                <div className="Die" id="d104"></div>
                <div className="Die" id="d105"></div>
            </div>
            <div className="DiceContainer D12"
                onClick={() => props.handleDieClick('d12')}
            >
                <div className="Die" id="d121"></div>
                <div className="Die" id="d122"></div>
                <div className="Die" id="d123"></div>
                <div className="Die" id="d124"></div>
                <div className="Die" id="d125"></div>
                <div className="Die" id="d126"></div>
            </div>
            <div className="DiceContainer D20"
                onClick={() => props.handleDieClick('d20')}
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
                rollChain={props.rollChain}
                handlePlusMinus={props.handlePlusMinus}
                plusMinus={props.plusMinus}
                handleRoll={props.handleRoll}
                rollResult={props.rollResult}
            />
            {/* <div className="RollInfo">
                <p>I want to roll</p>
                <input 
                type="text" 
                value={props.rollChain}
                />
                <button className="SmallButton">+</button>
                <input type="text"/>
                <button>Roll</button>
            </div> */}
        </div>
    );
}

export default DiceRollPage;