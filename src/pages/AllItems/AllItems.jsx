import React from 'react';
import './AllItems.css';
import itemsService from '../../utils/itemsService';
import { useEffect, useState } from 'react';


const AllItems = ({ user, match, history, option }) => {

    const [itemData, setItemData] = useState([]);
    const [itemHTML, setItemHTML] = useState([]);

    useEffect(() => {
        const fetchItems = async () => {
            try {
                const result = await itemsService.index();

                setItemData(result);
            } catch(err) {
                console.log(err);
            };
        };
        fetchItems();
    }, []);

    useEffect(() => {
        if (itemData.length > 0) {
            console.log(itemData);
            
            setItemHTML(itemData.map((item, index) => {
                if (index < 20) {
                    return (<div>
                        <p>Name: {item.name}</p>
                        <p>Bonus Stats: {item.bonusStats}</p>
                        <p>Armor: {item.bonusArmor}</p>
                        <p>Amount: {item.amount}</p>
                        <p>Can be equipped to: {item.canBeEquipped}</p>
                        <p>Abilities given: {item.abilities}</p>
                        <p>Ammo for: {item.ammoFor}</p>
                        <p>Other Effects: {item.otherEffects}</p>
                    </div>);
                };
            }));
        };
    }, [itemData]);

    return (
        <div className="AllItems">
            {itemHTML}
        </div>
    );
}

export default AllItems;