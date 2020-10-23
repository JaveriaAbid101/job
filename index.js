import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import Moment from 'react-moment';
import * as serviceWorker from './serviceWorker';

import App from "./components/App";
import reducers from './reducers';

const store = createStore(reducers, applyMiddleware(thunk));

Moment.globalFormat = "DD-MM-YYYY HH:mm";

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);

serviceWorker.unregister();
