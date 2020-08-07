import React from 'react';
import './NewAbility.css';
import abilitiesService from '../../utils/abilitiesService';
import { useState } from 'react';


const NewAbility = ({ user, match, history, option }) => {

    const [abilityData, setAbilityData] = useState({
        name: '',
        level: 0,
        cantrip: false,
        range: 5,
        item: false,
        equipped: false,
        hands: 1,
        damage: [0, 0, 0],
        damageType: '',
        armorBonus: 0,
        otherEffects: [],
        aoe: 0,
        rollType: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (option === 'create') {
                await abilitiesService.create(abilityData);
            };
            if (option === 'update') {
                await abilitiesService.update(match.params.abilityId, abilityData);
            };
            history.push('/abilities/new');
        } catch (err) {
            console.log(abilityData, err);
        };
    };

    const handleChange = (e) => {
        let newDataObject = {};

        if (e.target.type === 'checkbox') {
            if (e.target.checked) {
                newDataObject = {[e.target.name]: true};
            }
            else {
                newDataObject = {[e.target.name]: false};
            };
        }
        else if (e.target.type === 'number') {
            const intValue = parseInt(e.target.value);
            newDataObject = {[e.target.name]: intValue ? intValue : 0};
        }
        else {
            newDataObject = {[e.target.name]: e.target.value};
        };


        const newAbilityData = {...abilityData, ...newDataObject};

        console.log(newAbilityData);

        setAbilityData(newAbilityData);
    };

    return (
        <div className="NewAbility">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="level">Level:</label>
                    <input type="number" id="level" onChange={handleChange} name="level"/>
                </div>
                <div>
                    <label htmlFor="cantrip">Cantrip?</label>
                    <input type="checkbox" onChange={handleChange} name="cantrip" id="cantrip"/>
                </div>
                <div>
                    <label htmlFor="range">Range:</label>
                    <input type="number" id="range" onChange={handleChange} name="range"/>
                </div>
                <div>
                    <label htmlFor="item">Item?</label>
                    <input type="checkbox" onChange={handleChange} name="item" id="item"/>
                </div>
                <div>
                    <label htmlFor="equipped">Equipped?</label>
                    <input type="checkbox" onChange={handleChange} name="equipped" id="equipped"/>
                </div>
                <div>
                    <label htmlFor="hands">Num of Hands:</label>
                    <input type="number" id="hands" onChange={handleChange} name="hands"/>
                </div>
                <div>
                    <label htmlFor="numOfDice">Num of Damage Dice:</label>
                    <input type="number" id="numOfDice" onChange={handleChange} name="damage[0]"/>
                </div>
                <div>
                    <label htmlFor="typeOfDice">Type of Dice (4, 6, 10):</label>
                    <input type="number" id="typeOfDice" onChange={handleChange} name="damage[1]"/>
                </div>
                <div>
                    <label htmlFor="bonusDamage">Bonus Damage:</label>
                    <input type="number" id="bonusDamage" onChange={handleChange} name="damage[3]"/>
                </div>
                <div>
                    <label htmlFor="damageType">Type of Damage:</label>
                    <input type="text" id="damageType" onChange={handleChange} name="damageType"/>
                </div>
                <div>
                    <label htmlFor="armorBonus">Armor Value:</label>
                    <input type="number" id="armorBonus" onChange={handleChange} name="armorBonus"/>
                </div>
                <div>
                    <label htmlFor="otherEffects">Other Effects:</label>
                    <input type="text" id="otherEffects" onChange={handleChange} name="otherEffects"/>
                </div>
                <div>
                    <label htmlFor="aoe">Area of Effect:</label>
                    <input type="number" id="aoe" onChange={handleChange} name="aoe"/>
                </div>
                <div>
                    <label htmlFor="rollType">Roll Type (ranged, saving throw):</label>
                    <input type="text" id="rollType" onChange={handleChange} name="rollType"/>
                </div>
                <input type="submit" value="DONE"/>
            </form>
        </div>
    );
}

export default NewAbility;