import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// this means App will be pulled from the App.js file.

import * as serviceWorker from './serviceWorker';

ReactDOM.render(<App />, document.getElementById('root'));
// ReactDOM.render means put it on the page. <App /> is what goes on the page and document.getElementById('root') is where it'll be placed.
// root element and replaced with <App />.
// App component lives in App.js.




// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// entrypoint for React.
// main file
// where a NAV BAR would go.

// import is very similar to const = react etc.
// import is es6 version of const, import specific things from a file, rather than the whole file.
// ReactDOM.render means put it on the page.