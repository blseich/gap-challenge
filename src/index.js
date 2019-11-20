import React from 'react';
import ReactDOM from 'react-dom';
import { Router } from "@reach/router"
import App from './app';
import Login from './login';
import * as serviceWorker from './serviceWorker';

function AuthenticatedRoute({ children, isAuth }) {
  if (isAuth === true) {
    return children;
  } else {
    return (
      <div>
        invalid login
      </div>
    )
  }
}

const PrivateCategory = ({ location: { state: { isAuth } } }) => (
    <AuthenticatedRoute isAuth={isAuth}>
      <App/>
    </AuthenticatedRoute>
  );

ReactDOM.render(
  <Router>
    <Login path='/' default />
    <PrivateCategory path='category'/>
  </Router>
  , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
