import React from 'react';
import ReactDOM from 'react-dom';

import App from './App';

import serviceWorker from './sw';

ReactDOM.render(<App />, document.getElementById('root'));

serviceWorker();
