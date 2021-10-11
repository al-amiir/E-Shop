import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <>
        <div className="nav">
          <div className="logo">
            <span className="material-icons">article</span>
            <span className="logo_name">
              <font color="orange">E</font> shop
            </span>
          </div>
          <div className="button_container button_container-kinds">
            <button className="button_navigation">Men</button>
            <button className="button_navigation">Women</button>
            <button className="button_navigation">Kids</button>
          </div>
          <div className="button_container">
            <button className="button_navigation">
              <span className="material-icons">search</span>
            </button>
            <button className="button_navigation">
              <span className="material-icons">shopping_cart</span>
            </button>
            <button className="button_navigation button_navigation-identify">
              <span className="material-icons">perm_identity</span>
            </button>
            <button className="button_navigation button_navigation-menu">
              <span className="material-icons">menu</span>
            </button>
          </div>
        </div>
      </>
    );
  }
}
