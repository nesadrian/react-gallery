import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Header from './components/header/Header';
import Footer from './components/footer/Footer';
import { Main } from './components/main/Main';
import About from './components/about/About'
import Splash from './components/splash/Splash'
import Random from './components/random/Random'
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          <Route path="/" exact>
            <Splash />
          </Route>
          <Route path="/search" exact render={(props) =>
            <div>
              <Header />
              <Main searchTerm={props.location.state} />
              <Footer />
            </div>
          }>
          </Route>
          <Route path="/about" exact>
            <Header />
            <About />
            <Footer />
          </Route>
          <Route path="/random" exact>
            <Header />
            <Random />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
