import React, {Component} from "react";

class CardDetails extends Component {

  getImage = (name) => {
    const fileName = name.split(" ").join("_").toLowerCase();
    return require(`../hog-imgs/${fileName}.jpg`)
  }

  render() {
    return (
      <div className="description">
          <p>{this.props.hog.greased ? "G" : "Not g"}reased<br/>
          Weight: {this.props.hog.weight} hundo<br/>
          A {this.props.hog['highest medal achieved']} porker</p>
      </div>
    )
  };
};

export default CardDetails;
