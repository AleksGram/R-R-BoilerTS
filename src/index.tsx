import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
// import App from './App';
import * as serviceWorker from './serviceWorker';


import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './components/app';
import ErrorBoundry from './components/error-boundry';
import StoreService from './services/store-service';
import { StoreServiceProvider} from './utilities/store-service-context/store-service-context';
import Header from './components/header';

import store from './store';

const storeService = new StoreService();

ReactDOM.render(
    <Provider store={store}>
        <ErrorBoundry>
            <StoreServiceProvider value={storeService}>
                <Router>
                    <Header/>
                    <App/>
                </Router>
            </StoreServiceProvider>
        </ErrorBoundry>
    </Provider>,
    document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
