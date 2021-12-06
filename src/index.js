import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './app/App';
import "./i18n";
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <BrowserRouter basename="/">
    <App />
  </BrowserRouter>
, document.getElementById('root'));

serviceWorker.unregister();



// =============

// WARNING: You are currently running a version of TypeScript which is not officially supported by typescript-estree.

// You may find that it works just fine, or you may not.

// SUPPORTED TYPESCRIPT VERSIONS: >=3.2.1 <3.6.0

// YOUR TYPESCRIPT VERSION: 4.5.2

// Please only submit bug reports when using the officially supported version.

// =============
