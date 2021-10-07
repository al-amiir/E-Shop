import React, { useState } from "react";

export default class Card extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="card">
          <img />
          <button className="button_love">
            <span className="material-icons">favorite_border</span>
          </button>
          <p>lorem lorem lorem</p>
          <p>price</p>
        </div>
      </>
    );
  }
}
