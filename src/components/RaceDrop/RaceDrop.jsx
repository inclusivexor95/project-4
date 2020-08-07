import React from 'react';


const RaceDrop = ({ toggleDropDown, charData, setCharData, raceData, calculateHealth }) => {


    const handleRaceClick = (e) => {
        let newDataObject = {race: e.target.id};
        
        if (newDataObject.race !== charData.race) {
            newDataObject['extraStats'] = raceData[newDataObject.race].statBonus;
            newDataObject['stats'] = charData.stats.map((stat, index) => {
                return stat - raceData[charData.race].statBonus[index] + newDataObject['extraStats'][index];
            });
            newDataObject['speed'] = raceData[newDataObject.race].speed;
            newDataObject['languages'] = raceData[newDataObject.race].languages;
        };

        
        const newCharData = {...charData, ...newDataObject};
        setCharData(newCharData);
        toggleDropDown(false);
    };

    return (
        <div className="RaceDrop">
            <div>
                <p>Dwarf</p>
                <select name="Dwarf" id="">
                    <option id="Hill Dwarf" onClick={handleRaceClick}>Hill Dwarf</option>
                    <option id="Mountain Dwarf" onClick={handleRaceClick}>Mountain Dwarf</option>
                </select>
            </div>
            <div>
                <p>Elf</p>
                <select name="Elf" id="">
                    <option id="High Elf" onClick={handleRaceClick}>High Elf</option>
                    <option id="Wood Elf" onClick={handleRaceClick}>Wood Elf</option>
                    <option id="Dark Elf (Drow)" onClick={handleRaceClick}>Dark Elf (Drow)</option>
                </select>
            </div>
            <div>
                <p>Halfling</p>
                <select name="Halfling" id="">
                    <option id="Lightfoot Halfling" onClick={handleRaceClick}>Lightfoot</option>
                    <option id="Stout Halfling" onClick={handleRaceClick}>Stout</option>
                </select>
            </div>
            <div>
                <p>Human</p>
                <select name="Human" id="">
                    <option id="Human (Standard)" onClick={handleRaceClick}>Standard Human</option>
                    <option id="Human (Variant)" onClick={handleRaceClick}>Variant Human</option>
                </select>
            </div>
            <div>
                <p>Dragonborn</p>
                <select name="Dragonborn" id="">
                    <option id="Black Dragonborn" onClick={handleRaceClick}>Black(Acid)</option>
                    <option id="Blue Dragonborn" onClick={handleRaceClick}>Blue(Lightning)</option>
                    <option id="Brass Dragonborn" onClick={handleRaceClick}>Brass(Fire)</option>
                    <option id="Bronze Dragonborn" onClick={handleRaceClick}>Bronze(Lightning)</option>
                    <option id="Copper Dragonborn" onClick={handleRaceClick}>Copper(Acid)</option>
                    <option id="Gold Dragonborn" onClick={handleRaceClick}>Gold(Fire)</option>
                    <option id="Green Dragonborn" onClick={handleRaceClick}>Green(Poison)</option>
                    <option id="Red Dragonborn" onClick={handleRaceClick}>Red(Fire)</option>
                    <option id="Silver Dragonborn" onClick={handleRaceClick}>Silver(Cold)</option>
                    <option id="White Dragonborn" onClick={handleRaceClick}>White(Cold)</option>
                </select>
            </div>
            <div>
                <p>Gnome</p>
                <select name="Gnome" id="">
                    <option id="Forest Gnome" onClick={handleRaceClick}>Forest Gnome</option>
                    <option id="Rock Gnome" onClick={handleRaceClick}>Rock Gnome</option>
                </select>
            </div>
            <div id="Half-Elf" onClick={handleRaceClick}>
                <p>Half-Elf</p>
            </div>
            <div id="Half-Orc" onClick={handleRaceClick}>
                <p>Half-Orc</p>
            </div>
            <div id="Tiefling" onClick={handleRaceClick}>
                <p>Tiefling</p>
            </div>
        </div>
    );
};


export default RaceDrop;