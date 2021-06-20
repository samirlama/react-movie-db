import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import Add from './components/Add';
import './App.css';

function App() {
  return (
    <Router>
      <Header />
      <Switch>
        <Route exact path="/">
          <WatchList />
        </Route>
        <Route  path="/watched">
          <Watched />
        </Route>
        <Route  path="/add">
          <Add />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
