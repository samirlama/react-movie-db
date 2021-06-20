import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Header from './components/Header';
import Watched from './components/Watched';
import WatchList from './components/WatchList';
import Add from './components/Add';
import { GlobalProvider } from "./context/GlobalProvider";
import './App.css';

function App() {
  return (
    <GlobalProvider>
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
    </GlobalProvider>
  );
}

export default App;
