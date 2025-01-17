import React, {useState, useEffect} from 'react';
import './CharCreate.css';
import charactersService from '../../utils/charactersService';
import RaceDrop from '../RaceDrop/RaceDrop';
import ClassDrop from '../ClassDrop/ClassDrop';
import GenericDrop from '../GenericDrop/GenericDrop';
import SpellBook from '../SpellBook/SpellBook';
import Equipment from '../Equipment/Equipment';
import ItemList from '../ItemList/ItemList';
import NavBar from '../NavBar/NavBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faTshirt } from '@fortawesome/free-solid-svg-icons';


const CharCreate = ({ history, match, option, user, handleLogout }) => {
    const [charData, setCharData] = useState({
        name: '',
        race: '',
        level: 1,
        exp: 0,
        class: '',
        healthTotal: 0,
        healthCurrent: 0,
        gender: '',
        languages: '',
        speed: 30,
        stats: [10, 10, 10, 10, 10, 10],
        extraStats: [0, 0, 0, 0, 0, 0],
        originalStats: [10, 10, 10, 10, 10, 10],
        items: ['', '', ''],
        money: [0, 0, 0, 0, 0],
        alignment: '',
        proficiencies: [[0, 0, 0, 0, 0, 0], [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]]
    });

    const [showRaceDrop, setShowRaceDrop] = useState(false);
    const [showClassDrop, setShowClassDrop] = useState(false);
    const [showAlignmentDrop, setShowAlignmentDrop] = useState(false);
    const [showGenderDrop, setShowGenderDrop] = useState(false);
    const [showSpellBook, setShowSpellBook] = useState(false);
    const [showEquipment, setShowEquipment] = useState(false);
    const [showItemList, setShowItemList] = useState(false);

    const modifierArray = [-5, -5, -4, -4, -3, -3, -2, -2, -1, -1, 0, 0, 1, 1, 2, 2, 3, 3, 4, 4, 5, 5, 6, 6, 7, 7, 8, 8, 9, 9, 10];
    const proficiencyArray = [2, 2, 2, 2, 2, 3, 3, 3, 3, 4, 4, 4, 4, 5, 5, 5, 5, 6, 6, 6, 6];
    const experienceArray = [0, 300, 900, 2700, 6500, 14000, 23000, 34000, 48000, 64000, 85000, 100000, 120000, 140000, 165000, 195000, 225000, 265000, 305000, 355000];

    const genericDropOptions = {
        alignment: ['LE', 'NE', 'CE', 'LN', 'TN', 'CN', 'LG', 'NG', 'CG'],
        gender: ['Male', 'Female', 'Other']
    };
    
    const raceData = {
        'Hill Dwarf': {
            statBonus: [0, 0, 2, 1, 0, 0],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Dwarvish']
        },
        'Mountain Dwarf': {
            statBonus: [2, 0, 2, 0, 0, 0],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Dwarvish']
        },
        'High Elf': {
            statBonus: [0, 2, 0, 0, 1, 0],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Elvish']
        },
        'Wood Elf': {
            statBonus: [0, 2, 0, 1, 0, 0],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Elvish']
        },
        'Dark Elf (Drow)': {
            statBonus: [0, 2, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Elvish']
        },
        'Lightfoot Halfling': {
            statBonus: [0, 2, 0, 0, 0, 1],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Halfling']
        },
        'Stout Halfling': {
            statBonus: [0, 2, 1, 0, 0, 0],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Halfling']
        },
        'Human (Standard)': {
            statBonus: [1, 1, 1, 1, 1, 1],
            speed: 30,
            abilities: [],
            languages: ['Common']
        },
        'Human (Variant)': {
            statBonus: [0, 0, 0, 0, 0, 0],
            speed: 30,
            abilities: [],
            languages: ['Common']
        },
        'Black Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Blue Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Brass Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Bronze Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Copper Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Gold Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Green Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Red Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Silver Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'White Dragonborn': {
            statBonus: [2, 0, 0, 0, 0, 1],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Draconic']
        },
        'Forest Gnome': {
            statBonus: [0, 1, 0, 0, 2, 0],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Gnomish']
        },
        'Rock Gnome': {
            statBonus: [0, 0, 1, 0, 2, 0],
            speed: 25,
            abilities: [],
            languages: ['Common', 'Gnomish']
        },
        'Half-Elf': {
            statBonus: [0, 0, 0, 0, 0, 2],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Elvish']
        },
        'Half-Orc': {
            statBonus: [2, 0, 1, 0, 0, 0],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Orc']
        },
        'Tiefling': {
            statBonus: [0, 0, 0, 0, 1, 2],
            speed: 30,
            abilities: [],
            languages: ['Common', 'Infernal']
        }
    };

    const classData = {
        Barbarian: {
            hitDie: 'd12',
            healthMax: 12,
            healthAvg: 7,
            profSaves: [0, 2],
            profEquip: ['Light Armor', 'Medium Armor', 'Shields', 'Simple Weapons', 'Martial Weapons'],
            freeSkills: [],
            abilities: []
        },
        Bard: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [1, 5],
            profEquip: ['Light Armor', 'Simple Weapons', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
            freeSkills: [],
            abilities: []
        },
        Cleric: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [3, 5],
            profEquip: ['Light Armor', 'Medium Armor', 'Shields', 'Simple Weapons'],
            freeSkills: [],
            abilities: []
        },
        Druid: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [3, 4],
            profEquip: [],
            freeSkills: [],
            abilities: []
        },
        Fighter: {
            hitDie: 'd10',
            healthMax: 10,
            healthAvg: 6,
            profSaves: [0, 2],
            profEquip: ['Light Armor', 'Medium Armor', 'Heavy Armor', 'Shields', 'Simple Weapons', 'Martial Weapons'],
            freeSkills: [],
            abilities: []
        },
        Monk: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [0, 1],
            profEquip: ['Simple Weapons', 'Shortswords'],
            freeSkills: [],
            abilities: []
        },
        Paladin: {
            hitDie: 'd10',
            healthMax: 10,
            healthAvg: 6,
            profSaves: [3, 5],
            profEquip: ['Light Armor', 'Medium Armor', 'Heavy Armor', 'Shields', 'Simple Weapons', 'Martial Weapons'],
            freeSkills: [],
            abilities: []
        },
        Ranger: {
            hitDie: 'd10',
            healthMax: 10,
            healthAvg: 6,
            profSaves: [0, 1],
            profEquip: ['Light Armor', 'Medium Armor', 'Shields', 'Simple Weapons', 'Martial Weapons'],
            freeSkills: [],
            abilities: []
        },
        Rogue: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [1, 4],
            profEquip: ['Light Armor', 'Simple Weapons', 'Hand Crossbows', 'Longswords', 'Rapiers', 'Shortswords'],
            freeSkills: [],
            abilities: []
        },
        Sorcerer: {
            hitDie: 'd6',
            healthMax: 6,
            healthAvg: 4,
            profSaves: [2, 5],
            profEquip: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light Crossbows'],
            freeSkills: [],
            abilities: []
        },
        Warlock: {
            hitDie: 'd8',
            healthMax: 8,
            healthAvg: 5,
            profSaves: [3, 5],
            profEquip: ['Light Armor', 'Simple Weapons'],
            freeSkills: [],
            abilities: []
        },
        Wizard: {
            hitDie: 'd6',
            healthMax: 6,
            healthAvg: 4,
            profSaves: [3, 4],
            profEquip: ['Daggers', 'Darts', 'Slings', 'Quarterstaffs', 'Light Crossbows'],
            freeSkills: [],
            abilities: []
        }
    };


    const modifierValue = (statValue, profBool, bonus=0) => {
        const proficiencyValue = profBool ? proficiencyArray[charData.level] : 0;

        if (statValue < 0) {
            return proficiencyValue - 5;
        }
        else if (statValue > 30) {
            return proficiencyValue + 10;
        }
        else {
            return proficiencyValue + modifierArray[statValue] + bonus;
        };
    };

    const calculateHealth = (newCon, newLevel=charData.level) => {
        if (charData.class) {
            return classData[charData.class.split(' ')[0]].healthAvg * (newLevel + 1) - 2 + (modifierValue(newCon) * (newLevel));
        }
        else {
            return 4 * (newLevel + 1) - 2 + (modifierValue(newCon) * (newLevel));
        };
    };

    function handleChange(e) {
        console.log('change', charData.stats);
        let newDataObject = {};
        if (e.target.className === 'Stat') {
            let currentStats = charData.stats;
            let currentOriginalStats = charData.originalStats;
            const index = parseInt(e.target.name.slice(6, 7));
            const statInt = parseInt(e.target.value);
            if (!statInt && statInt !== 0) {
                currentStats[index] = 0;
            }
            else if (statInt > 30) {
                currentStats[index] = 30;
            }
            else if (statInt < 0) {
                currentStats[index] = 0;
            }
            else {
                currentStats[index] = statInt;
            };

            currentOriginalStats[index] = currentStats[index] - charData.extraStats[index];
            newDataObject = {
                stats: currentStats,
                originalStats: currentOriginalStats
            };

            if (index === 2) {
                newDataObject['healthTotal'] = calculateHealth(newDataObject.stats[2]);
            };

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
        else if (e.target.name === 'exp') {
            const expInt = parseInt(e.target.value);
            if (!expInt && expInt !== 0) {
                newDataObject = {[e.target.name]: 0};
            }
            else {
                newDataObject = {[e.target.name]: expInt}
            };
        }
        else if (e.target.name === 'healthCurrent') {
            const currentHealthInt = parseInt(e.target.value);
            
            if (currentHealthInt > charData.healthTotal) {
                newDataObject = {healthCurrent: charData.healthTotal};
            }
            else if (!currentHealthInt || currentHealthInt < 0) {
                newDataObject = {healthCurrent: 0};
            }
            else {
                newDataObject = {healthCurrent: currentHealthInt};
            };
        }
        else {
            newDataObject = {[e.target.name]: e.target.value};
        };

        // if (e.target.name !== 'exp' && charData.exp < 355000) {
        //     newDataObject['level'] = experienceArray.findIndex((breakpoint) => {
        //         return (charData.exp < breakpoint);
        //     });
        // }
        // else 
        if (newDataObject.exp && newDataObject.exp < 355000) {
            newDataObject['level'] = experienceArray.findIndex((breakpoint) => {
                return (newDataObject.exp < breakpoint);
            });
        }
        else if (newDataObject.exp && newDataObject.exp > 355000) {
            newDataObject['level'] = 20;
        };

        if (newDataObject.level && newDataObject.level !== charData.level) {
            newDataObject['healthTotal'] = calculateHealth(charData.stats[2], newDataObject.level);
        };

        const newCharData = {...charData, ...newDataObject};

        setCharData(newCharData);
    };

    const handleCheckbox = (e) => { 
        let newDataObject = {proficiencies: charData.proficiencies};
        let typeIndex;
        const type = e.target.parentElement.parentElement.parentElement.id;

        if (type === 'saves') {
            typeIndex = 0;
        };
        if (type === 'skillsContainer') {
            typeIndex = 1;
        };

        if (e.target.checked) {
            newDataObject.proficiencies[typeIndex][e.target.id] = 1;
        }
        else {
            newDataObject.proficiencies[typeIndex][e.target.id] = 0;
        };

        const newCharData = {...charData, ...newDataObject};

        setCharData(newCharData);
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

        }
    };

    const toggleSpellBook = () => {
        if (showSpellBook === false) {
            setShowSpellBook(true);
        };
        if (showSpellBook === true) {
            setShowSpellBook(false);
        };
    };

    const toggleEquipment = () => {
        if (showEquipment === false) {
            setShowEquipment(true);
        };
        if (showEquipment === true) {
            setShowEquipment(false);
        };
    };

    const handleDelete = async (e) => {
        try {
            
            if (option === 'detail') {
                await charactersService.byeBye(match.params.charId);
            };
            
            history.push('/characters');
        } catch (err) {

        }
    };

    const updateState = (ajaxCharData) => {
        setCharData({
            name: ajaxCharData.name,
            level: ajaxCharData.level,
            exp: ajaxCharData.exp,
            race: ajaxCharData.race,
            class: ajaxCharData.class,
            stats: ajaxCharData.stats,
            extraStats: ajaxCharData.extraStats,
            originalStats: ajaxCharData.originalStats,
            languages: ajaxCharData.languages,
            speed: ajaxCharData.speed,
            healthTotal: ajaxCharData.healthTotal,
            healthCurrent: ajaxCharData.healthCurrent,
            gender: ajaxCharData.gender,
            items: ajaxCharData.items,
            money: ajaxCharData.money,
            alignment: ajaxCharData.alignment,
            proficiencies: ajaxCharData.proficiencies
        });
    }; 

    const showDelete = (e) => {
        const parentDiv = e.target.parentElement;
        parentDiv.style["background-color"] = 'rgba(27, 27, 30, 0.7)';
        parentDiv.children[1].style["visibility"] = 'visible';
    };

    const hideDelete = (e) => {
        const parentDiv = e.target.parentElement;
        parentDiv.style["visibility"] = 'hidden';
        parentDiv.parentElement.style["background-color"] = 'transparent';
    };

    const showDrop = (e) => {
        setShowRaceDrop(false);
        setShowClassDrop(false);
        setShowAlignmentDrop(false);
        setShowGenderDrop(false);

        switch(e.target.name) {
            case 'race':
                setShowRaceDrop(true);
                break;
            case 'class':
                setShowClassDrop(true);
                break;
            case 'alignment': 
                setShowAlignmentDrop(true);
                break;
            case 'gender':
                setShowGenderDrop(true);
                break;
        };
    };

    useEffect(() => {
        if (option === 'detail') {
            const fetchChar = async () => {
                const result = await charactersService.detail(match.params.charId);
                updateState(result);
            };
            fetchChar();
        };
    }, []);

    useEffect(() => {
        let newDataObject = {};

        if (charData.stats) {
            newDataObject['healthTotal'] = calculateHealth(charData.stats[2]);
        };

        const newCharData = {...charData, ...newDataObject};
        setCharData(newCharData);
    }, [charData.stats]);

    return (
        <div className="CharCreate">
            <NavBar
                user={user}
                handleLogout={handleLogout}
                path={history.location.pathname}
            />
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
                            <input type="number" id="charLevel" value={charData.level} name="level" readOnly className="readOnly"/>
                        </div>
                        <div id="classContainer">
                            <label htmlFor="class">CLASS</label>
                            <input type="text" id="class" value={charData.class} name="class" onClick={showDrop} readOnly/>

                            {showClassDrop ? <ClassDrop toggleDropDown={setShowClassDrop} charData={charData} setCharData={setCharData} /> : null}
                        </div>
                        <div id="alignmentContainer">
                            <label htmlFor="charAlign">ALIGNMENT</label>
                            <input type="text" id="charAlign" value={charData.alignment} name="alignment" onClick={showDrop} readOnly/>

                            {showAlignmentDrop ? <GenericDrop toggleDropDown={setShowAlignmentDrop} attribute={'alignment'} charData={charData} setCharData={setCharData} options={genericDropOptions.alignment} /> : null}
                            {/* <div className="customSelect">
                                <select name="alignment" id="charAlign" value={charData.alignment} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="LG">LG</option>
                                    <option value="LN">LN</option>
                                    <option value="LE">LE</option>
                                    <option value="NG">NG</option>
                                    <option value="TN">TN</option>
                                    <option value="NE">NE</option>
                                    <option value="CG">CG</option>
                                    <option value="CN">CN</option>
                                    <option value="CE">CE</option>
                                </select>
                            </div> */}
                        </div>
                        <div id="raceContainer">
                            <label htmlFor="race">RACE</label>
                            <input type="text" id="race" value={charData.race} name="race" onClick={showDrop} readOnly/>

                            {showRaceDrop ? <RaceDrop toggleDropDown={setShowRaceDrop} calculateHealth={calculateHealth} raceData={raceData} classData={classData} charData={charData} setCharData={setCharData} /> : null}
                        </div>
                        <div id="genderContainer">
                            <label htmlFor="charGender">SEX</label>
                            <input type="text" id="charGender" value={charData.gender} name="gender" onClick={showDrop} readOnly/>

                            {showGenderDrop ? <GenericDrop toggleDropDown={setShowGenderDrop} attribute={'gender'} charData={charData} setCharData={setCharData} options={genericDropOptions.gender} /> : null}
                            {/* <div className="customSelect">
                                <select name="gender" id="charGender" value={charData.gender} onChange={handleChange}>
                                    <option value=""></option>
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    <option value="other">Other</option>
                                </select>
                            </div> */}
                        </div>
                        <div id="expContainer">
                            <input type="text" id="charExp" value={charData.exp} name="exp" onChange={handleChange}/>
                            <label htmlFor="charExp">EXP</label>
                        </div>
                    </div>
                </div>
                <div id="stats">
                    <div id="strContainer">
                        <label htmlFor="str">STRENGTH</label>
                        <input type="text" id="str" name="stats[0]" value={charData.stats[0]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[0])}</div>
                    </div>
                    <div id="dexContainer">
                        <label htmlFor="dex">DEXTERITY</label>
                        <input type="text" id="dex" name="stats[1]" value={charData.stats[1]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[1])}</div>
                    </div>
                    <div id="conContainer">
                        <label htmlFor="con">CONSTITUTION</label>
                        <input type="text" id="con" name="stats[2]" value={charData.stats[2]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[2])}</div>
                    </div>
                    <div id="wisContainer">
                        <label htmlFor="wis">WISDOM</label>
                        <input type="text" id="wis" name="stats[3]" value={charData.stats[3]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[3])}</div>
                    </div>
                    <div id="intContainer">
                        <label htmlFor="int">INTELLIGENCE</label>
                        <input type="text" id="int" name="stats[4]" value={charData.stats[4]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[4])}</div>
                    </div>
                    <div id="chaContainer">
                        <label htmlFor="con">CHARISMA</label>
                        <input type="text" id="con" name="stats[5]" value={charData.stats[5]} className="Stat" onChange={handleChange}/>
                        <div className="Modifier">{modifierValue(charData.stats[5])}</div>
                    </div>
                </div>
                <div id="main">
                    <div id="defense">
                        <div id="hitPoints">
                            <label htmlFor="hitPointsValue">HIT POINTS</label>
                            <input type="text" value={charData.healthTotal} id="hitPointsValue" readOnly className="readOnly"/>
                        </div>
                        <div id="armorClass">
                            <label htmlFor="armorClassValue">ARMOR CLASS</label>
                            <input type="text" value={10 + modifierValue(charData.stats[1])} id="armorClassValue" readOnly className="readOnly"/>
                        </div>
                        <div id="proficiencyBonus">
                            <label htmlFor="proficiencyBonusValue">PROFICIENCY BONUS</label>
                            <input type="text" value={proficiencyArray[charData.level]} id="proficiencyBonusValue" readOnly className="readOnly"/>
                        </div>
                        <div id="currentHitPoints">
                            <label htmlFor="currentHitPointsValue">CURRENT HIT POINTS</label>
                            <input type="text" name="healthCurrent" value={charData.healthCurrent} onChange={handleChange} id="currentHitPointsValue"/>
                        </div>
                    </div>
                    <div id="passive">
                        <div id="saves">
                            <ul>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][0]} onChange={handleCheckbox} id="0"/> 
                                    <input type="text" value={modifierValue(charData.stats[0], !!charData.proficiencies[0][0])} className="skillBonus readOnly" readOnly/>
                                    <p className="strSkill">Strength</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][1]} onChange={handleCheckbox} id="1"/> 
                                    <input type="text" value={modifierValue(charData.stats[1], !!charData.proficiencies[0][1])} className="skillBonus readOnly" readOnly/>
                                    <p className="dexSkill">Dexterity</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][2]} onChange={handleCheckbox} id="2"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[2], !!charData.proficiencies[0][2])}/>
                                    <p className="conSkill">Constitution</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][3]} onChange={handleCheckbox} id="3"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[0][3])}/>
                                    <p className="wisSkill">Wisdom</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][4]} onChange={handleCheckbox} id="4"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[0][4])}/>
                                    <p className="intSkill">Intelligence</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[0][5]} onChange={handleCheckbox} id="5"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[5], !!charData.proficiencies[0][5])}/>
                                    <p className="chaSkill">Charisma</p>
                                </li>
                            </ul>
                            <p>SAVING THROWS</p>
                        </div>
                        <div id="passPerc">
                            <input type="text" id="passPercValue" value={10 + modifierValue(charData.stats[3], charData.proficiencies[1][11])} readOnly className="readOnly"/>
                            <label htmlFor="passPercValue">PASSIVE WISDOM (PERCEPTION)</label>
                        </div>
                    </div>
                    <div id="skills">
                        <div id="speed">
                            <label htmlFor="speedValue">SPEED</label>
                            <input type="text" value={charData.speed} id="speedValue" readOnly className="readOnly"/>
                        </div>
                        <div id="initiative">
                            <label htmlFor="initiativeValue">INITIATIVE</label>
                            <input type="text" id="initiativeValue" value={modifierValue(charData.stats[1])} readOnly className="readOnly"/>
                        </div>
                        <div id="skillsContainer">
                            <p>SKILLS</p>
                            <ul>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][0]} onChange={handleCheckbox} id="0"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[1], !!charData.proficiencies[1][0])}/>
                                    <p className="dexSkill">Acrobatics (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][1]} onChange={handleCheckbox} id="1"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[1][1])}/>
                                    <p className="wisSkill">Animal Handling (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][2]} onChange={handleCheckbox} id="2"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[1][2])}/>
                                    <p className="intSkill">Arcana (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][3]} onChange={handleCheckbox} id="3"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[0], !!charData.proficiencies[1][3])}/>
                                    <p className="strSkill">Athletics (Str)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][4]} onChange={handleCheckbox} id="4"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[5], !!charData.proficiencies[1][4])}/>
                                    <p className="chaSkill">Deception (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][5]} onChange={handleCheckbox} id="5"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[1][5])}/>
                                    <p className="intSkill">History (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][6]} onChange={handleCheckbox} id="6"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[1][6])}/>
                                    <p className="wisSkill">Insight (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][7]} onChange={handleCheckbox} id="7"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[5], !!charData.proficiencies[1][7])}/>
                                    <p className="chaSkill">Intimidation (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][8]} onChange={handleCheckbox} id="8"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[1][8])}/>
                                    <p className="intSkill">Investigation (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][9]} onChange={handleCheckbox} id="9"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[1][9])}/>
                                    <p className="wisSkill">Medicine (Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][10]} onChange={handleCheckbox} id="10"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[1][10])}/>
                                    <p className="intSkill">Nature (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][11]} onChange={handleCheckbox} id="11"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[1][11])}/>
                                    <p className="wisSkill">Perception(Wis)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][12]} onChange={handleCheckbox} id="12"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[5], !!charData.proficiencies[1][12])}/>
                                    <p className="chaSkill">Performance (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][13]} onChange={handleCheckbox} id="13"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[5], !!charData.proficiencies[1][13])}/>
                                    <p className="chaSkill">Persuasion (Cha)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][14]} onChange={handleCheckbox} id="14"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[4], !!charData.proficiencies[1][14])}/>
                                    <p className="intSkill">Religion (Int)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][15]} onChange={handleCheckbox} id="15"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[1], !!charData.proficiencies[1][15])}/>
                                    <p className="dexSkill">Sleight of Hand (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][16]} onChange={handleCheckbox} id="16"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[1], !!charData.proficiencies[1][16])}/>
                                    <p className="dexSkill">Stealth (Dex)</p>
                                </li>
                                <li>
                                    <input type="checkbox" checked={!!charData.proficiencies[1][17]} onChange={handleCheckbox} id="17"/> 
                                    <input type="text" className="skillBonus readOnly" readOnly value={modifierValue(charData.stats[3], !!charData.proficiencies[1][17])}/>
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
                            <p id="ammoHeader">AMMO</p>
                            <p id="amountHeader">Amt</p>
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
                    <button type="button" onClick={toggleSpellBook}><FontAwesomeIcon icon={faBookOpen} /></button>
                </div>
                <div id="languages">
                    <p>LANGUAGES</p>
                    <textarea name="" value={charData.languages} id="" readOnly></textarea>
                </div>
                <div id="items">
                    <p>ITEMS</p>
                    <textarea name="items[0]" id="items" value={charData.items[0]} className="Item" onChange={handleChange}></textarea>
                </div>
                <div id="treasures">
                    <p>TREASURES</p>
                    <textarea name="items[1]" id="treasuresText" value={charData.items[1]} className="Item" onChange={handleChange}></textarea>
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
                    <textarea name="items[2]" id="otherEquipmentText" value={charData.items[2]} className="Item" onChange={handleChange}></textarea>
                    <button type="button" onClick={toggleEquipment}><FontAwesomeIcon icon={faTshirt} /></button>
                </div>
                <input type="submit" value="DONE" id="doneButton"/>
                <div id="deleteCharContainer">
                    <button type="button" onClick={showDelete} id="deleteChar" >x</button>
                    <div>
                        <p>Are you sure you want to delete this character? This cannot be undone!</p>
                        <button type="button" onClick={handleDelete} id="yesDelete">YES</button>
                        <button type="button" onClick={hideDelete} id="noDelete">NO</button>
                    </div>
                </div>
            </form>
            {showSpellBook ? <SpellBook /> : null}
            {showEquipment ? <Equipment /> : null}
            {showItemList ? <ItemList /> : null}
        </div>
    );
}


export default CharCreate;