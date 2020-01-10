import React, { Component } from 'react';
import '../App.css';
import Nav from './Nav'
import List from './List'
import Filter from './Filter'
import Sort from './Sort'
import hogs from '../porkers_data';

class App extends Component {
  constructor() {
    super();

    this.state = {
      hogs: [],
      filters: {
        greased: null,
        sort: "none"
      }
    };
  }

  componentDidMount() {
    this.setState({hogs: hogs});
  };

  changeGreasedFilter = (greasedValue) => {
    let newGreasedValue;
    if (greasedValue === "all") {
      newGreasedValue = null;
    } else if (greasedValue === "greased") {
      newGreasedValue = true;
    } else if (greasedValue === "not greased") {
      newGreasedValue = false;
    };
    this.setState(previousState => {
      return {filters: {
        ...previousState.filters,
        greased: newGreasedValue
      }};
    });
  };

  changeSort = (event) => {
    const filterValue = event.target.id;
    this.setState(previousState => previousState.filters.sort = filterValue);
  };

  render() {
    return (
      <div className="App">
          <Nav />
          <div className="Filters">
            <Filter changeGreasedFilter={this.changeGreasedFilter} />
            <Sort changeSort={this.changeSort} />
          </div>
          <List allHogs={this.state.hogs} filter={this.state.filters} />
      </div>
    )
  }
}

export default App;
