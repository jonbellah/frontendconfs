import React from 'react';
import ReactDOM from 'react-dom';

import 'react-table/react-table.css';
import './assets/scss/style.css';

import App from './App';
import serviceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker();
