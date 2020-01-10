import React, {Component} from "react";

class Filter extends Component {

  handleFilterChange = (event) => {
    this.props.changeGreasedFilter(event.target.value);
  };

  render() {
    return (
      <div>
        <h3>Filter</h3>
        <select onChange={this.handleFilterChange} name="greaseValue" id="greaseSelect" >
          <option value="all" >All</ option>
          <option value="greased" >Greased</ option>
          <option value="not greased" >Not greased</ option>
        </select>
      </div>
    )
  };
};

export default Filter;
