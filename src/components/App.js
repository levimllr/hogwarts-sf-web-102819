import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import Options from './Options'
import HiddenHogBox from './HiddenHogBox'
import HogBox from './HogBox'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hogs: [],
      greased: null,
      sort: "",
      showHidden: false
    };
  };

  componentDidMount() {
    let betterHogs = hogs.map(hog => ({...hog, hidden: false}));
    this.setState({ hogs: betterHogs })
  };

  setGreaseState = (event) => {
    if (event.target.value === 'null') {
      this.setState({greased: null});
    } else if (event.target.value === 'true') {
      this.setState({greased: true});
    } else if (event.target.value === 'false') {
      this.setState({greased: false});
    };
  };

  filterHogs = (hogs) => this.filterHiddenHogs(this.filterGreasedHogs(hogs), false);

  filterHiddenHogs = (hogs, boolean) => hogs.filter(hog => hog.hidden === boolean);

  filterGreasedHogs = (hogs) => {
    if (this.state.greased === null) {
      return hogs
    } else {
      return hogs.filter(hog => hog.greased === this.state.greased)
    };
  };

  changeHogHidden = (hogName) => {
    const hogIndex = hogs.findIndex(hog => hog.name === hogName);
    const revisedHogs = this.state.hogs;
    revisedHogs[hogIndex].hidden = true;
    this.setState({ hogs: revisedHogs });
  };

  toggleShowHidden = (event) => {
    const showHidden = event.target.checked;
    this.setState({ showHidden });
  };

  render() {
    return (
      <div className="App">
          < Nav />
          < Options 
            handleSelectChange={this.setGreaseState} 
            handleHiddenChange={this.toggleShowHidden}
          />
          {this.state.showHidden && < HiddenHogBox refinedHogs={this.filterHiddenHogs(this.state.hogs, true)} />}
          < HogBox 
            refinedHogs={this.filterHogs(this.state.hogs)} 
            onHogHide={this.changeHogHidden} />      
      </div>
    )
  }
}

export default App;
