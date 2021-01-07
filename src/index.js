import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { ReduxStore } from './Store/reduxStore';
import { Provider } from 'react-redux';

ReactDOM.render(
    <React.StrictMode>
        <Provider store={ReduxStore}>
            <App />
        </Provider>
    </React.StrictMode>,
    document.getElementById('root')
);


