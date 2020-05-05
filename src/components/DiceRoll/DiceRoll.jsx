import React, {useState} from 'react';
import './DiceRoll.css';


const DiceRoll = (props) => {
    let counter = 1;

    const [inputData, setInputData] = useState({
        invalidInput: false,
        numInput: 0
    })

    const rollText = props.rollChain.reduce((string, die, idx) => {
        if (idx < props.rollChain.length - 1) {
            if (props.rollChain[idx + 1] === props.rollChain[idx]) {
                counter++;
                return string;
            }
            else {
                const result = idx >= counter ? string + '+' + counter + die : string + counter + die;
                counter = 1;
                return result;
            };
        }
        else {
            const result = idx >= counter ? string + '+' + counter + die : string + counter + die;
            counter = 1;
            return result;
        };
    }, '');

    function handleChange(event) {
        const input = event.target.value;
        const integer = parseInt(input);
        if (input === '') {
            setInputData({invalidInput: false, numInput: 0});
        }
        else if (input != integer) {
            setInputData({invalidInput: true, numInput: integer});
        }
        else {
            setInputData({invalidInput: false, numInput: integer});
        };
    }

    return (
        <div className="DiceRoll">
            <p>I want to roll:</p>
            <input 
            type="text" 
            value={rollText}
            />
            <button className="SmallButton"
                onClick={props.handlePlusMinus}
            >{props.plusMinus}</button>
            <input type="text" className="NumInput"
                style={{border: inputData.invalidInput === true ? "3px solid red" : "none"}}
                onChange={handleChange}
            />
            <button
                onClick={props.rollChain.length !== 0 ? () => props.handleRoll(inputData.numInput) : null}
            >Roll</button>
            <div>
            <p>Result:</p>
            <input type="text" className="RollResult"
                value={props.rollResult}
            />
            </div>
        </div>
    );
};


export default DiceRoll;