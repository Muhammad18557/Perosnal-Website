import './App.css';
import React from 'react';
import Header from './Components/Header/Header';
import Home from './Components/Body/Home/Home';
import Footer from './Components/Footer/Footer'
import Education from './Components/Body/Education/Education';
import Experience from './Components/Body/Experience/Experience';
import Projects from './Components/Body/Projects/Projects';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

function App() {
  return (
      <>
      <Router>
        <Header />
        <Switch>
          <Route path='/' exact component={Home}/>
          <Route path='/education' exact component={Education} />
          <Route path='/work' exact component={Experience} />
          <Route path='/projects' exact component={Projects} />
        </Switch>
        <Footer />
      </Router>
      </>
  );
}

export default App;
