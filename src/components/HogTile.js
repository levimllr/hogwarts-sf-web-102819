import React, { Component } from 'react';

class HogTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  };

  render() {
    return (
      <div className="HogTile">
          <h3>HogTile</h3>
      </div>
    )
  }
}

export default HogTile;
