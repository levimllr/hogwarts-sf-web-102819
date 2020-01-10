import React, { Component } from 'react';
import HogTile from './HogTile'

const HogBox = (props) => {
  return (
    <div className="HogBox">
        <h2>HogBox</h2>
        {props.refinedHogs.map(hog => < HogTile hog={hog} onHogHide={props.onHogHide}/>)}
    </div>
  )
}

export default HogBox;