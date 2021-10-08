import React, { useState } from "react";
import Card from "./card";
export default class ProductsLine extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="productsline">
        <div className="productsline_header">
          <p>Selected Just For You</p>
          <button className="button_showmore">Show more</button>
        </div>
        <div className="productsline_content">
          <button>
            <span className="material-icons">arrow_back</span>
          </button>
          <Card />
          <Card />
          <Card />
          <button>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }
}
