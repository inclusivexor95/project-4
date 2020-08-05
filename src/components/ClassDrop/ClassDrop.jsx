import React from 'react';


const ClassDrop = ({ toggleDropDown, charData, setCharData }) => {


    const handleClassClick = (e) => {
        const newDataObject = {class: e.target.id};
        const newCharData = {...charData, ...newDataObject};

        setCharData(newCharData);
        toggleDropDown(false);
    };

    return (
        <div className="ClassDrop">
            <div>
                <p>Barbarian</p>
                <select name="Barbarian" id="">
                    <option id="Barbarian (Berserker)" onClick={handleClassClick}>Path of the Berserker</option>
                    <option id="Barbarian (Totem Warrior)" onClick={handleClassClick}>Path of the Totem Warrior</option>
                </select>
            </div>
            <div>
                <p>Bard</p>
                <select name="Bard" id="">
                    <option id="Bard (Lore)" onClick={handleClassClick}>College of Lore</option>
                    <option id="Bard (Valor)" onClick={handleClassClick}>College of Valor</option>
                </select>
            </div>
            <div>
                <p>Cleric</p>
                <select name="Cleric" id="">
                    <option id="Cleric (Knowledge)" onClick={handleClassClick}>Knowledge Domain</option>
                    <option id="Cleric (Life)" onClick={handleClassClick}>Life Domain</option>
                    <option id="Cleric (Light)" onClick={handleClassClick}>Light Domain</option>
                    <option id="Cleric (Nature)" onClick={handleClassClick}>Nature Domain</option>
                    <option id="Cleric (Tempest)" onClick={handleClassClick}>Tempest Domain</option>
                    <option id="Cleric (Trickery)" onClick={handleClassClick}>Trickery Domain</option>
                    <option id="Cleric (War)" onClick={handleClassClick}>War Domain</option>
                </select>
            </div>
            <div>
                <p>Druid</p>
                <select name="Druid" id="">
                    <option id="Druid (Land)" onClick={handleClassClick}>Circle of the Land</option>
                    <option id="Druid (Moon)" onClick={handleClassClick}>Circle of the Moon</option>
                </select>
            </div>
            <div>
                <p>Fighter</p>
                <select name="Fighter" id="">
                    <option id="Fighter (Champion)" onClick={handleClassClick}>Champion</option>
                    <option id="Fighter (Battle Master)" onClick={handleClassClick}>Battle Master</option>
                    <option id="Fighter (Eldritch Knight)" onClick={handleClassClick}>Eldritch Knight</option>
                </select>
            </div>
            <div>
                <p>Monk</p>
                <select name="Monk" id="">
                    <option id="Monk (Open Hand)" onClick={handleClassClick}>Way of the Open Hand</option>
                    <option id="Monk (Shadow)" onClick={handleClassClick}>Way of Shadow</option>
                    <option id="Monk (Four Elements)" onClick={handleClassClick}>Way of the Four Elements</option>
                </select>
            </div>
            <div>
                <p>Paladin</p>
                <select name="Paladin" id="">
                    <option id="Paladin (Devotion)" onClick={handleClassClick}>Oath of Devotion</option>
                    <option id="Paladin (Ancients)" onClick={handleClassClick}>Oath of the Ancients</option>
                    <option id="Paladin (Vengeance)" onClick={handleClassClick}>Oath of Vengeance</option>
                </select>
            </div>
            <div>
                <p>Ranger</p>
                <select name="Ranger" id="">
                    <option id="Ranger (Hunter)" onClick={handleClassClick}>Hunter</option>
                    <option id="Ranger (Beast Master)" onClick={handleClassClick}>Beast Master</option>
                </select>
            </div>
            <div>
                <p>Rogue</p>
                <select name="Rogue" id="">
                    <option id="Rogue (Thief)" onClick={handleClassClick}>Thief</option>
                    <option id="Rogue (Assassin)" onClick={handleClassClick}>Assassin</option>
                    <option id="Rogue (Arcane Trickster)" onClick={handleClassClick}>Arcane Trickster</option>
                </select>
            </div>
            <div>
                <p>Sorcerer</p>
                <select name="Sorcerer" id="">
                    <option id="Sorcerer (Draconic)" onClick={handleClassClick}>Draconic Bloodline</option>
                    <option id="Sorcerer (Wild Magic)" onClick={handleClassClick}>Wild Magic</option>
                </select>
            </div>
            <div>
                <p>Warlock</p>
                <select name="Warlock" id="">
                    <option id="Warlock (Archfey)" onClick={handleClassClick}>The Archfey</option>
                    <option id="Warlock (Fiend)" onClick={handleClassClick}>The Fiend</option>
                    <option id="Warlock (Great Old One)" onClick={handleClassClick}>The Great Old One</option>
                </select>
            </div>
            <div>
                <p>Wizard</p>
                <select name="Wizard" id="">
                    <option id="Wizard (Abjuration)" onClick={handleClassClick}>School of Abjuration</option>
                    <option id="Wizard (Conjuration)" onClick={handleClassClick}>School of Conjuration</option>
                    <option id="Wizard (Divination)" onClick={handleClassClick}>School of Divination</option>
                    <option id="Wizard (Enchantment)" onClick={handleClassClick}>School of Enchantment</option>
                    <option id="Wizard (Evocation)" onClick={handleClassClick}>School of Evocation</option>
                    <option id="Wizard (Illusion)" onClick={handleClassClick}>School of Illusion</option>
                    <option id="Wizard (Necromancy)" onClick={handleClassClick}>School of Necromancy</option>
                    <option id="Wizard (Transmutation)" onClick={handleClassClick}>School of Transmutation</option>
                </select>
            </div>
        </div>
    );
};


export default ClassDrop;