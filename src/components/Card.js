import React, {Component} from "react";
import CardDetails from "./CardDetails";

class Card extends Component {
  constructor() {
    super();
    this.state = {
      showDetails: false
    };
  };

  getImage = (name) => {
    const fileName = name.split(" ").join("_").toLowerCase();
    return require(`../hog-imgs/${fileName}.jpg`)
  }

  toggleDetails = () => {
    this.setState(previousState => {
      return {showDetails: !previousState.showDetails} 
    });
  };

  render() {

    return (
      <div className="ui eight wide column pigTile">
        <img src={this.getImage(this.props.hog.name)} />
        <h3>{this.props.hog.name}, {this.props.hog.specialty}</h3>
        {this.state.showDetails && <CardDetails hog={this.props.hog} />}
        <button onClick={this.toggleDetails}>{this.state.showDetails ? "Less" : "More"} Details</button>
      </div>
    )
  };
};

export default Card;
