import React, {useState} from 'react';
import './CharCreate.css';


const CharCreate = (props) => {
    const [charData, setCharData] = useState({
        race: null,
        subrace: '',
        class: null,
        subclass: ''
    });

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
            <form action="">
                <div id="genInfo">
                    <div id="charName">
                        <input type="text" id="nameInput" name="name"/>
                        <label htmlFor="nameInput">CHARACTER NAME</label>
                    </div>
                    <div id="raceClass">
                        <div id="levelContainer">
                            <label htmlFor="charLevel">LEVEL</label>
                            <input type="text" id="charLevel" name="level"/>
                        </div>
                        <div id="classContainer">
                            <input type="text" id="charClass" name="class"/>
                            <label htmlFor="charClass">CLASS</label>
                        </div>
                        <div id="alignmentContainer">
                            <label htmlFor="charAlign">ALIGNMENT</label>
                            <select name="alignment" id="charAlign">
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
                            <input type="text" id="charRace" name="race"/>
                            <label htmlFor="charRace">RACE</label>
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
                    <div id="str">
                        <label htmlFor="">STRENGTH</label>
                        <input type="text"/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="dex">
                        <label htmlFor="">DEXTERITY</label>
                        <input type="text"/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="con">
                        <label htmlFor="">CONSTITUTION</label>
                        <input type="text"/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="wis">
                        <label htmlFor="">WISDOM</label>
                        <input type="text"/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="int">
                        <label htmlFor="">INTELLIGENCE</label>
                        <input type="text"/>
                        <div className="Modifier"></div>
                    </div>
                    <div id="cha">
                        <label htmlFor="">CHARISMA</label>
                        <input type="text"/>
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
                            <p id="passPercValue"></p>
                            <p>PASSIVE WISDOM(PERCEPTION)</p>
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
                    <textarea name="" id=""></textarea>
                </div>
                <div id="treasures">
                    <p>TREASURES</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div id="otherEquipment">
                    <p>OTHER EQUIPMENT</p>
                    <textarea name="" id=""></textarea>
                </div>
                <input type="submit" value="DONE"/>
            </form>
        </div>
    );
}


export default CharCreate;