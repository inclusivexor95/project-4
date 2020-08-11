import React from 'react';
import './NewItem.css';
import itemsService from '../../utils/itemsService';
import { useState } from 'react';


const NewItem = ({ user, match, history, option }) => {

    const [itemData, setItemData] = useState({
        name: '',
        bonusStats: [0, 0, 0, 0, 0, 0],
        bonusArmor: 0,
        ammoFor: '',
        amount: 0,
        otherEffects: [],
        canBeEquipped: []
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (option === 'create') {
                await itemsService.create(itemData);
            };
            if (option === 'update') {
                await itemsService.update(match.params.itemId, itemData);
            };
            history.push('/items/new');
        } catch (err) {
            console.log(itemData, err);
        };
    };

    const handleChange = (e) => {
        let newDataObject = {};

        if (e.target.type === 'number') {
            const intValue = parseInt(e.target.value);
            newDataObject = {[e.target.name]: intValue ? intValue : 0};
        }
        else {
            newDataObject = {[e.target.name]: e.target.value};
        };


        const newItemData = {...itemData, ...newDataObject};

        console.log(newItemData);

        setAbilityData(newItemData);
    };

    return (
        <div className="NewItem">
            <form onSubmit={handleSubmit}>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="bonusStats">Bonus Stats:</label>
                    <input type="number" id="itemStr" onChange={handleChange} name="level"/>
                    <input type="number" id="itemDex" onChange={handleChange} name="level"/>
                    <input type="number" id="itemCon" onChange={handleChange} name="level"/>
                    <input type="number" id="itemWis" onChange={handleChange} name="level"/>
                    <input type="number" id="itemInt" onChange={handleChange} name="level"/>
                    <input type="number" id="ItemCha" onChange={handleChange} name="level"/>
                </div>
                <div>
                    <label htmlFor="level">Armor:</label>
                    <input type="number" id="level" onChange={handleChange} name="level"/>
                </div>
                <div>
                    <label htmlFor="level">Bonus Stats:</label>
                    <input type="number" id="level" onChange={handleChange} name="level"/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="level">Bonus Stats:</label>
                    <input type="number" id="level" onChange={handleChange} name="level"/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="name" name="name" onChange={handleChange}/>
                </div>
                <input type="submit" value="DONE"/>
            </form>
        </div>
    );
}

export default NewItem;