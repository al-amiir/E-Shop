import React, { useState } from "react";

export default class Navigation extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="nav">
          <div>
            <span>logo</span>
            <span>E shop</span>
          </div>
          <div>
            <button>Men</button>
            <button>Women</button>
            <button>Kids</button>
          </div>
          <div>
            <button>search</button>
            <button>cart</button>
            <button>user</button>
          </div>
        </div>
      </>
    );
  }
}
