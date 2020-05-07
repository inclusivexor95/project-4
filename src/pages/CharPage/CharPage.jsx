import React from 'react';
import { Link, Switch, Route } from 'react-router-dom';
import NavBar from '../../components/NavBar/NavBar'
import './CharPage.css';
import CharCreate from '../../components/CharCreate/CharCreate';
import CharList from '../../components/CharList/CharList';


const CharPage = ({ user, handleLogout, history }) => {
    return (
        <div className="CharPage">
            <NavBar
                user={user}
                handleLogout={handleLogout}
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
                />
            }/>
            <Route exact path='/characters/:charId' render={() => 
                <CharCreate
                    option='detail'
                    history={history}
                />
            }/>
            </Switch>
        </div>
    );
}


export default CharPage;