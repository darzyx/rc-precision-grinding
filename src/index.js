import React from 'react';
import ReactDOM from 'react-dom';
import registerServiceWorker from './utils/registerServiceWorker';
import 'semantic-ui-css/semantic.min.css';
import 'animate.css/animate.min.css';
import './styles/index.css';
import App from './App';

const rootDOMNode = document.getElementById('root');

ReactDOM.render(<App />, rootDOMNode);

registerServiceWorker();
