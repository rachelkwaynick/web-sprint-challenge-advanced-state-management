//libraries
import React from "react";
import ReactDOM from "react-dom";
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import logger from 'redux-logger';

//redux (helpers)
import { smurfReducer } from './store/reducers';

//components
import App from "./components/App";



//stylesheets
import "./index.css";


const store = createStore(smurfReducer, applyMiddleware(thunk, logger))

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    
    document.getElementById("root")
);
