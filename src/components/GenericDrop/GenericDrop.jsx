import React from 'react';
import { useState, useEffect } from 'react';


const GenericDrop = ({ toggleDropDown, charData, setCharData, attribute, options }) => {

    const [optionHTML, setOptionHTML] = useState([]);

    useEffect(() => {
        setOptionHTML(options.map((option) => {
            return (<div id={option} onClick={handleClick}>
                <p>{option}</p>
            </div>);
        }));
    }, []);

    const handleClick = (e) => {
        const newDataObject = {[attribute]: e.target.id};
        const newCharData = {...charData, ...newDataObject};

        setCharData(newCharData);
        toggleDropDown(false);
    };

    return (
        <div className="GenericDrop">
            {optionHTML}
        </div>
    );
};


export default GenericDrop;