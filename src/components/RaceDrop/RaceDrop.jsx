import React from 'react';
import { Link } from 'react-router-dom';


const RaceDrop = () => {


    return (
        <div className="RaceDrop">
            <div>
                <p>Dwarf</p>
                <select name="Dwarf" id="">
                    <option value="Hill Dwarf">Hill Dwarf</option>
                    <option value="Mountain Dwarf">Mountain Dwarf</option>
                </select>
            </div>
            <div>
                <p>Elf</p>
                <select name="Elf" id="">
                    <option value="High Elf">High Elf</option>
                    <option value="Wood Elf">Wood Elf</option>
                    <option value="Dark Elf(Drow)">Dark Elf(Drow)</option>
                </select>
            </div>
            <div>
                <p>Halfling</p>
                <select name="Halfling" id="">
                    <option value="Lightfoot Halfling">Lightfoot</option>
                    <option value="Stout Halfling">Stout</option>
                </select>
            </div>
            <div>
                <p>Human</p>
                <select name="Human" id="">
                    <option value="Standard Human">Standard Human</option>
                    <option value="Variant Human">Variant Human</option>
                </select>
            </div>
            <div>
                <p>Dragonborn</p>
                <select name="Dragonborn" id="">
                    <option value="Black Dragonborn">Black(Acid)</option>
                    <option value="Blue Dragonborn">Blue(Lightning)</option>
                    <option value="Brass Dragonborn">Brass(Fire)</option>
                    <option value="Bronze Dragonborn">Bronze(Lightning)</option>
                    <option value="Copper Dragonborn">Copper(Acid)</option>
                    <option value="Gold Dragonborn">Gold(Fire)</option>
                    <option value="Green Dragonborn">Green(Poison)</option>
                    <option value="Red Dragonborn">Red(Fire)</option>
                    <option value="Silver Dragonborn">Silver(Cold)</option>
                    <option value="White Dragonborn">White(Cold)</option>
                </select>
            </div>
            <div>
                <p>Gnome</p>
                <select name="Gnome" id="">
                    <option value="Forest Gnome">Forest Gnome</option>
                    <option value="Rock Gnome">Rock Gnome</option>
                </select>
            </div>
            <div>
                <p>Half-Elf</p>
            </div>
            <div>
                <p>Half-Orc</p>
            </div>
            <div>
                <p>Tiefling</p>
            </div>
        </div>
    );
};


export default RaceDrop;