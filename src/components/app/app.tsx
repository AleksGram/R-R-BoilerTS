import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';

import { HomePage } from '../pages';


const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={HomePage}></Route>
        </Switch>
    )
}

export default App;