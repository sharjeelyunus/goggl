import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';

import './global.css';
import App from './App';
import { ResultContextProvider } from './contexts/ResultContextProvider';

ReactDOM.render(
    <ResultContextProvider>
        <Router>
            <App />
        </Router>
    </ResultContextProvider>,
    document.getElementById('root')
);