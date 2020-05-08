import React, {useState, useEffect} from 'react';
import './CharCreate.css';
import charactersService from '../../utils/charactersService'


const CharCreate = ({ history, match, option }) => {
    const [charData, setCharData] = useState({
        name: '',
        race: '',
        class: '',
        stats: [0, 0, 0, 0, 0, 0],
        // str: 0,
        // dex: 0,
        // con: 0,
        // wis: 0,
        // int: 0,
        // cha: 0,
        items: ['', '', ''],
        // items: '',
        // treasures: '',
        // otherEquipment: '',
        money: [0, 0, 0, 0, 0],
        alignment: ''
    });

    function handleChange(e) {
        console.log(e.target.className);
        let newDataObject = {};
        if (e.target.className === 'Stat') {
            console.log('working');
            let currentStats = charData.stats;
            const index = parseInt(e.target.name.slice(6, 7));
            currentStats[index] = e.target.value;
            newDataObject = {stats: currentStats};
        }
        else if (e.target.className === 'Item') {
            let currentItems = charData.items;
            const index = parseInt(e.target.name.slice(6, 7));
            currentItems[index] = e.target.value;
            newDataObject = {items: currentItems};
        }
        else if (e.target.className === 'Munnee') {
            let currentMoney = charData.money;
            const index = parseInt(e.target.name.slice(6, 7));
            currentMoney[index] = e.target.value;
            newDataObject = {money: currentMoney};
        }
        else {
            newDataObject = {[e.target.name]: e.target.value};
        };

        const newCharData = {...charData, ...newDataObject};

        setCharData(newCharData);
        // setCharData((prevState) => {
        //     prevState[e.target.id] = e.target.value;
        //     return prevState;
        // })
        console.log(charData);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            if (option === 'create') {
                await charactersService.create(charData);
            };
            if (option === 'detail') {
                await charactersService.update(match.params.charId, charData);
            };
            history.push('/characters');
        } catch (err) {
            
            // alert('Invalid Credentials!');
        }
    };

    const handleDelete = async (e) => {
        try {
            
            if (option === 'detail') {
                await charactersService.byeBye(match.params.charId);
            };
            
            history.push('/characters');
        } catch (err) {
            
            // alert('Invalid Credentials!');
        }
    }

    const updateState = (ajaxCharData) => {
        setCharData({
            name: ajaxCharData.name,
            race: ajaxCharData.race,
            class: ajaxCharData.class,
            stats: ajaxCharData.stats,
            items: ajaxCharData.items,
            money: ajaxCharData.money,
            alignment: ajaxCharData.alignment
        });
    }; 

    const showDelete = (e) => {
        const parentDiv = e.target.parentElement;
        parentDiv.style["background-color"] = 'rgba(27, 27, 30, 0.7)';
        parentDiv.children[1].style["visibility"] = 'visible';
        // console.log(charData.stats);
    };

    const hideDelete = (e) => {
        const parentDiv = e.target.parentElement;
        parentDiv.style["visibility"] = 'hidden';
        parentDiv.parentElement.style["background-color"] = 'transparent';
    }

    useEffect(() => {
        if (option === 'detail') {
            const fetchChar = async () => {
                const result = await charactersService.detail(match.params.charId);

                // console.log(result);
                
                updateState(result);
            };
            fetchChar();
        };
    }, []);

    return (
        <div className="CharCreate">
            <div id="helpInfo">
                <h2>INSTRUCTIONS</h2>
                <p>1. Choose a NAME, RACE, AND CLASS for your character. These are all located towards the top of the character sheet.</p>
                <p>2. Assign values to your STATS (the column on the far left side of the sheet). The standard D&D stats are 15, 14, 13, 12, 10, 8; it's up to you which value you want to assign where.</p>
                <p>3. All other numerical values will now be automatically calculated and filled in based on your choices in the previous steps -- unless I haven't gotten to that yet (quite likely).</p>
                <p>4. Choose an ALIGNMENT and SEX for you character. These are located in the top right of the sheet. LEVEL will default to 1 and EXP to 0 but you may adjust those if needed.</p>
                <p>5. Now all that's left to do is fill in the remaining info for your character in the large boxes and you're good to go!</p>
            </div>
            <form id="charCreateForm" onSubmit={handleSubmit}>
                <div id="genInfo">
                    <div id="charName">
                        <input type="text" id="name" value={charData.name} name="name" onChange={handleChange}/>
                        <label htmlFor="name">CHARACTER NAME</label>
                    </div>
                    <div id="raceClass">
                        <div id="levelContainer">
                            <label htmlFor="charLevel">LEVEL</label>
                            <input type="text" id="charLevel" name="level"/>
                        </div>
                        <div id="classContainer">
                            <input type="text" id="class" value={charData.class} name="class" onChange={handleChange}/>
                            <label htmlFor="class">CLASS</label>
                        </div>
                        <div id="alignmentContainer">
                            <label htmlFor="charAlign">ALIGNMENT</label>
                            <select name="alignment" id="charAlign" value={charData.alignment} onChange={handleChange}>
                                <option value=""></option>
                                <option value="lg">LG</option>
                                <option value="ln">LN</option>
                                <option value="le">LE</option>
                                <option value="ng">NG</option>
                                <option value="tn">TN</option>
                                <option value="ne">NE</option>
                                <option value="cg">CG</option>
                                <option value="cn">CN</option>
                                <option value="ce">CE</option>
                            </select>
                        </div>
                        <div id="raceContainer">
                            <input type="text" id="race" value={charData.race} name="race" onChange={handleChange}/>
                            <label htmlFor="race">RACE</label>
                        </div>
                        <div id="genderContainer">
                            <label htmlFor="charGender">SEX</label>
                            <select name="gender" id="charGender">
                                <option value=""></option>
                                <option value="male">Male</option>
                                <option value="female">Female</option>
                                <option value="other">Other</option>
                            </select>
                        </div>
                        <div id="expContainer">
                            <input type="text" id="charExp" name="exp"/>
                            <label htmlFor="charExp">EXP</label>
                        </div>
                    </div>
                </div>
                <div id="stats">
                    <div id="strContainer">
                        <label htmlFor="str">STRENGTH</label>
                        <input type="number" id="str" name="stats[0]" value={charData.stats[0]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="dexContainer">
                        <label htmlFor="dex">DEXTERITY</label>
                        <input type="number" id="dex" name="stats[1]" value={charData.stats[1]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="conContainer">
                        <label htmlFor="con">CONSTITUTION</label>
                        <input type="number" id="con" name="stats[2]" value={charData.stats[2]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="wisContainer">
                        <label htmlFor="wis">WISDOM</label>
                        <input type="number" id="wis" name="stats[3]" value={charData.stats[3]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="intContainer">
                        <label htmlFor="int">INTELLIGENCE</label>
                        <input type="number" id="int" name="stats[4]" value={charData.stats[4]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="chaContainer">
                        <label htmlFor="con">CHARISMA</label>
                        <input type="number" id="con" name="stats[5]" value={charData.stats[5]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier"></div>
                    </div>
                </div>
                <div id="main">
                    <div id="defense">
                        <div id="hitPoints">
                            <label htmlFor="hitPointsValue">HIT POINTS</label>
                            <input type="text" id="hitPointsValue"/>
                        </div>
                        <div id="armorClass">
                            <label htmlFor="armorClassValue">ARMOR CLASS</label>
                            <input type="text" id="armorClassValue"/>
                        </div>
                        <div id="proficiencyBonus">
                            <label htmlFor="proficiencyBonusValue">PROFICIENCY BONUS</label>
                            <input type="text" id="proficiencyBonusValue"/>
                        </div>
                        <div id="currentHitPoints">
                            <label htmlFor="currentHitPointsValue">CURRENT HIT POINTS</label>
                            <input type="text" id="currentHitPointsValue"/>
                        </div>
                    </div>
                    <div id="passive">
                        <div id="saves">
                            <ul>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="strSkill">Strength</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="dexSkill">Dexterity</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="conSkill">Constitution</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Wisdom</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">Intelligence</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="chaSkill">Charisma</p>
                                </li>
                            </ul>
                            <p>SAVING THROWS</p>
                        </div>
                        <div id="passPerc">
                            <input type="text" id="passPercValue"/>
                            <label htmlFor="passPercValue">PASSIVE WISDOM(PERCEPTION)</label>
                        </div>
                    </div>
                    <div id="skills">
                        <div id="speed">
                            <label htmlFor="speedValue">SPEED</label>
                            <input type="text" id="speedValue"/>
                        </div>
                        <div id="initiative">
                            <label htmlFor="initiativeValue">INITIATIVE</label>
                            <input type="text" id="initiativeValue"/>
                        </div>
                        <div id="skillsContainer">
                            <p>SKILLS</p>
                            <ul>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="dexSkill">Acrobatics (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Animal Handling (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">Arcana (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="strSkill">Athletics (Str)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="chaSkill">Deception (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">History (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Insight (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="chaSkill">Intimidation (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">Investigation (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Medicine (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">Nature (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Perception(Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="chaSkill">Performance (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="chaSkill">Persuasion (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="intSkill">Religion (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="dexSkill">Sleight of Hand (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="dexSkill">Stealth (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox"/> 
                                    <input type="text" className="skillBonus"/>
                                    <p className="wisSkill">Survival (Wis)</p>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div id="equipment">
                        <div id="armor">
                            <label htmlFor="equippedArmor">ARMOR</label>
                            <input type="text" id="equippedArmor"/>
                        </div>
                        <div id="shield">
                            <label htmlFor="equippedShield">SHIELD</label>
                            <input type="text" id="equippedShield"/>
                        </div>
                        <div id="attackHeader">
                            <p id="weaponsAndAttacksHeader">WEAPONS & ATTACKS</p>
                            <p id="dmgHeader">DMG</p>
                            <p id="typeHeader">TYPE</p>
                        </div>
                        <div className="Attack">
                            <input type="text" className="AttackName"/>
                            <input type="text" className="AttackDamage"/>
                            <input type="text" className="AttackDamageType"/>
                        </div>
                        <div className="Attack">
                            <input type="text" className="AttackName"/>
                            <input type="text" className="AttackDamage"/>
                            <input type="text" className="AttackDamageType"/>
                        </div>
                        <div className="Attack">
                            <input type="text" className="AttackName"/>
                            <input type="text" className="AttackDamage"/>
                            <input type="text" className="AttackDamageType"/>
                        </div>
                        <div className="Attack">
                            <input type="text" className="AttackName"/>
                            <input type="text" className="AttackDamage"/>
                            <input type="text" className="AttackDamageType"/>
                        </div>
                        <div id="ammo">
                            <p>AMMO</p>
                            <p>Amt</p>
                            <input type="text" className="AmmoType"/>
                            <input type="text" className="AmmoAmount"/>
                            <input type="text" className="AmmoType"/>
                            <input type="text" className="AmmoAmount"/>
                            <input type="text" className="AmmoType"/>
                            <input type="text" className="AmmoAmount"/>
                        </div>
                    </div>
                </div>
                <div id="abilities">
                    <p>PROFICIENCIES, TRAITS & ABILITIES</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div id="languages">
                    <p>LANGUAGES</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div id="items">
                    <p>ITEMS</p>
                    <textarea name="items[0]" id="items" value={charData.items[0]} className="Item" onChange={handleChange}></textarea>
                </div>
                <div id="treasures">
                    <p>TREASURES</p>
                    <textarea name="items[1]" id="treasures" value={charData.items[1]} className="Item" onChange={handleChange}></textarea>
                    <div className="Currency" id="copperContainer">
                        <label htmlFor="copper">CP</label>
                        <input type="number" id="copper" name="money[0]" value={charData.money[0]} className="Munnee" onChange={handleChange}/>
                    </div>
                    <div className="Currency" id="silverContainer">
                        <label htmlFor="silver">SP</label>
                        <input type="number" id="silver" name="money[1]" value={charData.money[1]} className="Munnee" onChange={handleChange}/>
                    </div>
                    <div className="Currency" id="electrumContainer">
                        <label htmlFor="electrum">EP</label>
                        <input type="number" id="electrum" name="money[2]" value={charData.money[2]} className="Munnee" onChange={handleChange}/>
                    </div>
                    <div className="Currency" id="goldContainer">
                        <label htmlFor="gold">GP</label>
                        <input type="number" id="gold" name="money[3]" value={charData.money[3]} className="Munnee" onChange={handleChange}/>
                    </div>
                    <div className="Currency" id="platinumContainer">
                        <label htmlFor="platinum">PP</label>
                        <input type="number" id="platinum" name="money[4]" value={charData.money[4]} className="Munnee" onChange={handleChange}/>
                    </div>
                </div>
                <div id="otherEquipment">
                    <p>OTHER EQUIPMENT</p>
                    <textarea name="items[2]" id="otherEquipment" value={charData.items[2]} className="Item" onChange={handleChange}></textarea>
                </div>
                <input type="submit" value="DONE"/>
                <div id="deleteCharContainer">
                    <button type="button" onClick={showDelete} id="deleteChar" >x</button>
                    <div>
                        <p>Are you sure you want to delete this character? This cannot be undone!</p>
                        <button type="button" onClick={handleDelete} id="yesDelete">YES</button>
                        <button type="button" onClick={hideDelete} id="noDelete">NO</button>
                    </div>
                </div>

            </form>
        </div>
    );
}


export default CharCreate;