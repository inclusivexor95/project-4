import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './CharPage.css';
import CharCreate from '../../components/CharCreate/CharCreate';
import CharList from '../../components/CharList/CharList';


const CharPage = (props) => {
    return (
        <div className="CharPage">
            <NavBar
                user={props.user}
                handleLogout={props.handleLogout}
            />

            <Switch>
            <Route exact path='/characters' render={() => 
                <CharList

                />
            }/>
            <Route exact path='/characters/new' render={() => 
                <CharCreate
                    
                />
            }/>
            </Switch>
        </div>
    );
}


export default CharPage;