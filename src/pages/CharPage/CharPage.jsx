import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './CharPage.css';
import CharCreate from '../../components/CharCreate/CharCreate';
import CharList from '../../components/CharList/CharList';


const CharPage = ({ user, handleLogout, history }) => {

    return (
        <div className="CharPage">
            <Switch>
            <Route exact path='/characters' render={() => 
                <CharList
                    user={user}
                    handleLogout={handleLogout}
                    history={history}
                />
            }/>
            <Route exact path='/characters/new' render={() => 
                <CharCreate
                    option='create'
                    history={history}
                />
            }/>
            <Route exact path='/characters/:charId' render={({ match }) => 
                <CharCreate
                    match={match}
                    option='detail'
                    history={history}
                />
            }/>
            </Switch>
        </div>
    );
}


export default CharPage;