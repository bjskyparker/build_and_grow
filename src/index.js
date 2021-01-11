import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import "./index.css";
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
//import { ReduxStore } from './Store/reduxStore';
import { Provider } from 'react-redux';

const store = createStore(rootReducer);

ReactDOM.render(
    <React.StrictMode>
        <Provider store={store} >
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


