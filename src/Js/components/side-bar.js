import React, { useState } from "react";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      productType: ["T-Shirts", "Sweatshirts", "Tank Tops", "Dress Shirts"],
      sizes: ["XS", "S", "M", "L", "xL", "XXL"],
      color: ["black", "brown", "wheat", "grey", "white", "blue"],
      range: 50,
    };
    this.handeRange = this.handeRange.bind(this);
  }
  handeRange(event) {
    this.setState({ range: event.target.value });
  }

  render() {
    return (
      <>
        <div className="sidebar">
          <form className="sidebar_box sidebar_product">
            <div className="sidebar_header">
              <span>Product Type</span>
              <button className="button_menu-collapse">
                <span className="material-icons">expand_less</span>
              </button>
            </div>
            {this.state.productType.map((product) => {
              return (
                <label>
                  <input
                    name={product}
                    type="checkbox"
                    //   checked={this.state.isGoing}
                    //   onChange={this.handleInputChange}
                  />
                  <span>{product}</span>
                </label>
              );
            })}
          </form>
          <form className="sidebar_box sidebar_range">
            <div className="sidebar_header">
              <span>Price</span>
              <button className="button_menu-collapse">
                <span className="material-icons">expand_less</span>
              </button>
            </div>
            <div className="sidebar_range-text">
              <span>0 USD</span>
              <span>{this.state.range} USD</span>
            </div>
            <input
              type="range"
              id="vol"
              name="vol"
              min="0"
              max="500"
              onChange={this.handeRange}
            />
          </form>
          <form className="sidebar_box ">
            <div className="sidebar_header">
              <span>Size</span>
              <button className="button_menu-collapse">
                <span className="material-icons">expand_less</span>
              </button>
            </div>
            <div className="sidebar_box-size">
              {this.state.sizes.map((size) => {
                return <input type="button" value={size} />;
              })}
            </div>
          </form>
          <form className="sidebar_box ">
            <div className="sidebar_header">
              <span>Color</span>
              <button className="button_menu-collapse">
                <span className="material-icons">expand_less</span>
              </button>
            </div>
            <div className="sidebar_box-color">
              {this.state.color.map((color) => {
                return (
                  <div>
                    <input
                      style={{ backgroundColor: color }}
                      type="button"
                      value={color}
                    />
                  </div>
                );
              })}
            </div>
          </form>
        </div>
      </>
    );
  }
}
