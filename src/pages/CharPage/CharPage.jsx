import React, { useState } from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './CharPage.css';
import CharCreate from '../../components/CharCreate/CharCreate';
import CharList from '../../components/CharList/CharList';


const CharPage = ({ user, handleLogout, history }) => {
    const [backToChars, setBackToChars] = useState(false);

    const addBackToNav = () => {
        setBackToChars(true);
    };

    return (
        <div className="CharPage">
            <NavBar
                user={user}
                handleLogout={handleLogout}
                backToChars={backToChars}
            />
            <Switch>
            <Route exact path='/characters' render={() => 
                <CharList
                    history={history}
                />
            }/>
            <Route exact path='/characters/new' render={() => 
                <CharCreate
                    option='create'
                    history={history}
                    addBackToNav={addBackToNav}
                />
            }/>
            <Route exact path='/characters/:charId' render={({ match }) => 
                <CharCreate
                    match={match}
                    option='detail'
                    history={history}
                    addBackToNav={addBackToNav}
                />
            }/>
            </Switch>
        </div>
    );
}


export default CharPage;