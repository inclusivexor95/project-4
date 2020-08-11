import React, {useState} from 'react';


const DiceRoll = ({ rollChain, handlePlusMinus, plusMinus, handleRoll, rollResult }) => {
    let counter = 1;

    const [inputData, setInputData] = useState({
        invalidInput: false,
        numInput: 0
    })

    const rollText = rollChain.reduce((string, die, idx) => {
        if (idx < rollChain.length - 1) {
            if (rollChain[idx + 1] === rollChain[idx]) {
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
        else if (input !== integer) {
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
            value={rollText} readOnly
            />
            <button className="SmallButton"
                onClick={handlePlusMinus}
            >{plusMinus}</button>
            <input type="text" className="NumInput"
                style={{border: inputData.invalidInput === true ? "3px solid red" : "none"}}
                onChange={handleChange}
            />
            <button
                onClick={rollChain.length !== 0 ? () => handleRoll(inputData.numInput) : null}
            >Roll</button>
            <div>
            <p>Result:</p>
            <input type="text" className="RollResult"
                value={rollResult} readOnly
            />
            </div>
        </div>
    );
};


export default DiceRoll;