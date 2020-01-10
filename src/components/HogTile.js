import React, { Component } from 'react';

class HogTile extends Component {
  constructor(props) {
    super(props);

    this.state = {
      showDetails: false
    };
  };

  

  hogImageName = (hogName) => {
    return hogName.split(" ").join("_").toLowerCase();
  };

  render() {

    return (
      <div className="HogTile">
        <h3>{this.props.hog.name}</h3>
        <img 
          src={`./hog-imgs/${this.hogImageName(this.props.hog.name)}.jpg`} 
          alt={this.props.hog.name}>
        </img>
        {!this.props.hog.hidden && <button onClick={() => this.props.onHogHide(this.props.hog.name)}>
          Hide Hog 🥓
        </button>}
      </div>
    )
  }
}

export default HogTile;
