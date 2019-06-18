import React from 'react';
import './App.css';
import NavComponent from './components/NavComponent'
import {BrowserRouter,Route} from 'react-router-dom'
import {Home} from './components/Home'
import {About} from './components/About'
import {Contact} from './components/Contact'
import {Projects} from './components/Projects'
import {HireMe} from './components/HireMe'


function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <NavComponent/>

      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/contact" component={Contact} />
      <Route exact path="/hire" component={HireMe} />
      <Route exact path="/projects" component={Projects} />
      </BrowserRouter>
    </div>
  );
}

export default App;
