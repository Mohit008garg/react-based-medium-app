import React from 'react';

import { Router } from 'react-router-dom';
import Routes from './shared/Routes';
import Navbar from './components/navBar/navBar';
import History from './history';
import './App.css';

function App(props) {
  return (
    <div>
      <Router history={History}>
        <div className='App'>
          {
            (<>
              <Navbar />
              <Routes isAuthorised />
            </>)
          }
        </div>
      </Router>
    </div>
  );
}


export default App;
