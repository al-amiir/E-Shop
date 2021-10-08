import React, { useState } from "react";

export default class Description extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="description">
        <div>
          <span className="material-icons">assignment</span>
          <h3>Details and product description</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quisquam laboriosam quos obcaecati.
          </p>
        </div>
        <div>
          <span className="material-icons">science</span>
          <h3>Materials and care</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quidem
            quisquam laboriosam quos obcaecati.
          </p>
        </div>
      </div>
    );
  }
}
