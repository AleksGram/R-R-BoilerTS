import  React from 'react';
import { Route, Switch } from 'react-router-dom';
import './app.scss';

// import { HomePage, CartPage } from '../pages';


const App = () => {
    return (
        <Switch>
            <Route path="/" exact component={()=>(<div>Component route developing...</div>)}></Route>
        </Switch>
    )
}

export default App;