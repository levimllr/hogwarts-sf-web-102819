import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Options from './Options'
import HiddenHogBox from './HiddenHogBox'
import HogBox from './HogBox'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    this.state = {
      hogs: [],
      greased: null,
      sort: "",
      showHidden: false,
      hiddenHogs: []
    };
  };

  render() {
    return (
      <div className="App">
          < Nav />
          < Options />
          < HiddenHogBox />
          < HogBox />      
      </div>
    )
  }
}

export default App;
