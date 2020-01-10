import React, {Component} from "react";

class Sort extends Component {

  render() {
    return (
      <div onChange={this.props.changeSort}>
        <h2>Sort</h2>
        <input type="radio" id="weight" name="sort"></input>
        <label for="weight">Weight</label>
        <input type="radio" id="name" name="sort"></input>
        <label for="weight">Name</label>
        <input type="radio" id="none" name="sort"></input>
        <label for="weight">None</label>
      </div>
    );
  };
};

export default Sort;
