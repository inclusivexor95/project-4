import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './CharList.css';
import charactersService from '../../utils/charactersService';


const CharList = ({ history }) => {
    const [characters, setCharacters] = useState('');
    let numDisplayed = 0;
    let charHTML = '';
    let charArray = [];

    const displayChars = (charNum) => {
        // console.log(characters.charArray[0][charNum].name);
        
        // <button id="char${charArray[charNum].id}Details">Details</button>
        charHTML += `<div>
                <p>Name: ${charArray[charNum].name}</p>
                <p>Race: ${charArray[charNum].race}</p>
                <p>Class: ${charArray[charNum].class}</p>
                <button id="${charArray[charNum]._id}">Details</button>
            </div>`;
    }

    useEffect(() => {
        const fetchChars = async () => {
            const result = await charactersService.index();

            // characters
            // setCharacters(prevState => prevState.charArray.push(result));
            result.forEach((char) => {
                charArray.push(char);
            });
            // const numOfChars = characters.charArray[0].length;
            const numOfChars = charArray.length

            console.log(charArray);

            numOfChars > 6 ? numDisplayed = 6 : numDisplayed = numOfChars;
            for (let i = 0; i < numDisplayed; i++) {
                displayChars(i);
            };
            setCharacters(charHTML);
            // console.log(displayedChars);
        };
        fetchChars();
    }, []);

    const handleDetailLink = (e) => {
        const isButton = e.target.closest('button');
        
        if (isButton && e.currentTarget.contains(isButton)) {
            history.push(`/characters/${isButton.id}`)
        };
    };


    return (
        <div className="CharList">
            <div id="charactersList" dangerouslySetInnerHTML={{__html: characters}} onClick={handleDetailLink}>
            </div>
            <Link to='/characters/new'>CREATE A CHARACTER</Link>
        </div>
    );
};


export default CharList;