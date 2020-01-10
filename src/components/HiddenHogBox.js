import React, { Component } from 'react';
import HogTile from './HogTile';

class HiddenHogBox extends Component {
  constructor(props) {
    super(props);

    this.state = {
    };
  };

  render() {
    return (
      <div className="HiddenHogBox">
        <h2>HiddenHogBox</h2>
        {this.props.refinedHogs.map(hog => <HogTile hog={hog} onHogHide={() => console.log("You can't hide...")} />)}
      </div>
    )
  }
}

export default HiddenHogBox;
