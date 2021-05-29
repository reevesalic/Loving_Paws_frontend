import React, {Component} from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import DogSearch from './components/DogSearch';
import SearchResults from './components/SearchResults';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
          <div >
            <Navigation />
            <div>
                <Switch>
                <Route path="/" component={Home} exact />
                <Route path="/about" component={About}/>
                <Route path="/contact" component={Contact}/>
                <Route path="/search" component={DogSearch} />
                <Route path="/results" component={SearchResults}/>
                <Route component={Error}/>
              </Switch>
            </div>
          </div> 
        </BrowserRouter>
    );
  };
} 
  
// https://www.golangprograms.com/how-to-create-simple-react-router-to-navigate-multiple-pages.html
export default App;

