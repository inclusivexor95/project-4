import React, {useState, useEffect} from 'react';
import {Link} from 'react-router-dom';
import './CharList.css';
import charactersService from '../../utils/charactersService';


const CharList = (props) => {
    const [characters, setCharacters] = useState([]);

    useEffect(() => {
        const fetchChars = async () => {
            const result = await charactersService.index();
            setCharacters(result);
            console.log(result);
        };
        fetchChars();
    }, []);

    return (
        <div className="CharList">
            <Link to='/characters/new'>CREATE A CHARACTER</Link>
            <p></p>
        </div>
        
    );
};


export default CharList;