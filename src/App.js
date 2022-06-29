import {BrowserRouter, Route, Switch, Redirect, Link} from 'react-router-dom';
import Navbar from './components/NavBar';
import Home from './components/Home';
import logo from "./logo.svg";
import "./App.css";
import Beers from "./components/Beers";
import BeerPage from "./components/BeerPage";
import Contact from "./components/Contact";
import NotFound from './components/NotFound';
import React from 'react';

export const ThemeContext = React.createContext();

function App() {
  return (
    <BrowserRouter>
      <div className="App">

        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>

        <Navbar />
      

        <Switch>
        <Redirect from='/About' to='/Contact' />
          <Route exact path='/' component={Home}>
          <ThemeContext.Provider value="Dark">
            <Home />
          </ThemeContext.Provider>
          </Route>
          
          <Route exact path="/beers" component={Beers} />
          <Route exact path="/beer/:beerId" component={BeerPage} />


          <Route exact path='/Contact' component={Contact}>
            <Contact /> 
          </Route>
                

          <Route component={NotFound}>
          </Route>
        </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;
