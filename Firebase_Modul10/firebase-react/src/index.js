import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import routes from './routes';
import Header from './Header';
import './style.css';
import firebase from 'firebase/app';
import firebaseConfig from './firebase.config';

firebase.initializeApp(firebaseConfig);

export const AuthContext = React.createContext(null);

function App() {
  const [isLoggedIn, setLoggedIn] = useState(false);

  return (
    <AuthContext.Provider value={{ isLoggedIn, setLoggedIn }}>
      Is logged in? {JSON.stringify(isLoggedIn)}
      <div className="App">
        <Router>
          <Header />
          <Switch>
            {routes.map((route) => (
              <Route key={route.path} path={route.path} exact={route.exact} component={route.main} />
            ))}
          </Switch>
        </Router>
      </div>
    </AuthContext.Provider>
  );
}

const rootElement = document.getElementById('root');
ReactDOM.render(<App />, rootElement);
