import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import GlobalStyles from './Components/globalStyles.js';
import { Provider } from 'react-redux';
import store from '../src/redux/store.js';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <GlobalStyles>
        <Provider store={store}>
            <App />
        </Provider>
    </GlobalStyles>,
);

reportWebVitals();
