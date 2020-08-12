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
        amount: 1,
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
            history.push('/items/all');
        } catch (err) {
            console.log(itemData, err);
        };
    };

    const handleChange = (e) => {
        let newDataObject = {};

        if (e.target.className === 'itemStats') {
            let currentStats = itemData.bonusStats;
            const index = parseInt(e.target.name.slice(6, 7));
            const statInt = parseInt(e.target.value);

            if (!statInt && statInt !== 0) {
                currentStats[index] = 0;
            }
            else if (statInt < 0) {
                currentStats[index] = 0;
            }
            else {
                currentStats[index] = statInt;
            };
            newDataObject = {bonusStats: currentStats};
        }
        else if (e.target.className === 'otherEffects') {
            let currentEffects = itemData.otherEffects;
            const index = parseInt(e.target.name.slice(13, 14));
            
            currentEffects[index] = e.target.value;
            newDataObject = {otherEffects: currentEffects};

        }
        else if (e.target.className === 'canBeEquipped') {
            let currentEquipSlots = itemData.canBeEquipped;
            const index = parseInt(e.target.name.slice(14, 15));
            
            currentEquipSlots[index] = e.target.value;
            newDataObject = {canBeEquipped: currentEquipSlots};

        }
        else if (e.target.type === 'number') {
            const intValue = parseInt(e.target.value);
            newDataObject = {[e.target.name]: intValue ? intValue : 0};
        }
        else {
            newDataObject = {[e.target.name]: e.target.value};
        };

        const newItemData = {...itemData, ...newDataObject};

        console.log(newItemData);

        setItemData(newItemData);
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
                    <input type="number" id="itemStr" onChange={handleChange} className="itemStats" name="stats[0]"/>
                    <input type="number" id="itemDex" onChange={handleChange} className="itemStats" name="stats[1]"/>
                    <input type="number" id="itemCon" onChange={handleChange} className="itemStats" name="stats[2]"/>
                    <input type="number" id="itemWis" onChange={handleChange} className="itemStats" name="stats[3]"/>
                    <input type="number" id="itemInt" onChange={handleChange} className="itemStats" name="stats[4]"/>
                    <input type="number" id="ItemCha" onChange={handleChange} className="itemStats" name="stats[5]"/>
                </div>
                <div>
                    <label htmlFor="bonusArmor">Armor:</label>
                    <input type="number" id="bonusArmor" onChange={handleChange} name="bonusArmor"/>
                </div>
                <div>
                    <label htmlFor="amount">Amount:</label>
                    <input type="number" id="amount" name="amount" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="ammoFor">Ammo for:</label>
                    <input type="text" id="ammoFor" onChange={handleChange} name="ammoFor"/>
                </div>
                <div>
                    <label htmlFor="otherEffects">Other Effects:</label>
                    <input type="text" id="otherEffects" name="otherEffects[0]" className="otherEffects" onChange={handleChange}/>
                    <input type="text" id="otherEffects" name="otherEffects[1]" className="otherEffects" onChange={handleChange}/>
                </div>
                <div>
                    <label htmlFor="name">Name:</label>
                    <input type="text" id="canBeEquipped" name="canBeEquipped[0]" className="canBeEquipped" onChange={handleChange}/>
                    <input type="text" id="canBeEquipped" name="canBeEquipped[1]" className="canBeEquipped" onChange={handleChange}/>
                </div>
                <input type="submit" value="DONE"/>
            </form>
        </div>
    );
}

export default NewItem;