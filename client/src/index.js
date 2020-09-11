import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { Auth0Provider } from '@auth0/auth0-react';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import history from './utils/history';


const onRedirectCallback = (appState) => {
  history.push(
    appState && appState.returnTo
        ? appState.returnTo
        : window.location.pathname
  );
};


ReactDOM.render(
  <Auth0Provider
    domain="dev-so0h25qq.us.auth0.com"
    clientId="vG80klH2ZfJXsw3Yr5O2r27DImBrsp5U"
    redirectUri={window.location.origin}
  >
    <App />
  </Auth0Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
