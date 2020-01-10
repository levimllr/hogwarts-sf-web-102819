import React, {Component} from "react";
import Card from './Card';

class List extends Component {

  filterAndSort = (hogs) => {
    let refinedHogs = hogs;
    if (this.props.filter.greased !== null) {
      refinedHogs = hogs.filter(hog => hog.greased === this.props.filter.greased);
    };
    switch (this.props.filter.sort) {
      case "weight":
        refinedHogs.sort((prevHog, nextHog) => {
          return prevHog.weight > nextHog.weight ? -1 : 1;
        });
        break;
      case "name":
        refinedHogs.sort((prevHog, nextHog) => {
          return prevHog.name > nextHog.name ? -1 : 1;
        });
        break;
      default:
        refinedHogs;
    };
    return refinedHogs.map(hog => <Card hog={hog} />);
  };

  render() {
    return (
      <div className="ui grid container">
        {this.filterAndSort(this.props.allHogs)}
      </div>
    )
  };
};

export default List;
