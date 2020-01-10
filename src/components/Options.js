import React, { Component } from 'react';

const Options = (props) => {
  return (
    <div className="Options">
        <h2>Options</h2>
        <div>
          <select name="grease" id="grease" onChange={props.handleSelectChange}>
            <option value="null">All</option>
            <option value="true">Greased</option>
            <option value="false">Not Greased</option>
          </select>
        </div>
        <div onChange={props.handleHiddenChange}>
          <input type="checkbox" id="showHidden" name="showHidden"></input>
          <label htmlFor="showHidden">Show hidden hogs?</label>
        </div>
    </div>
  )
}

export default Options;