import React from 'react';
import ReactDOM from 'react-dom';
import createHistory from 'history/createBrowserHistory';

import './assets/scss/style.css';

import App from './App';
import serviceWorker from './sw';

const history = createHistory();

ReactDOM.render(<App history={history} />, document.getElementById('root'));

serviceWorker();
