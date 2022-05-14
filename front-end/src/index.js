import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Routing from './routing'
//import Login from './login';
import registerServiceWorker from './registerServiceWorker';
//ReactDOM.render(<Login />, document.getElementById('root'));
ReactDOM.render(<Routing />, document.getElementById('root'));
registerServiceWorker();
