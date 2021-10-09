import React, { useState } from "react";

export default class SideBar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizeType: ["xs", "s", "m", "l", "xl", "xxl"],
      sizeChecked: {
        xs: false,
        s: false,
        m: false,
        l: false,
        xl: false,
        xxl: false,
      },
      sizeNeedsByClient: [],

      color: ["black", "brown", "wheat", "grey", "white", "blue"],
      colorChecked: {
        black: false,
        brown: false,
        wheat: false,
        grey: false,
        white: false,
        blue: false,
      },
      colorNeedsByClient: [],

      productType: ["T-Shirts", "Sweatshirts", "Tank Tops", "Dress Shirts"],
      productChecked: {
        "T-Shirts": false,
        Sweatshirts: false,
        "Tank Tops": false,
        "Dress Shirts": false,
      },
      productNeedsByClient: [],
      range: 50,
    };
    this.handeRange = this.handeRange.bind(this);
    this.handleProductChange = this.handleProductChange.bind(this);
    this.renderClientArrays = this.renderClientArrays.bind(this);
  }
  handeRange(event) {
    this.setState({ range: event.target.value });
  }

  handleProductChange(event, type) {
    let value = event.target.value;
    let productChecked = this.state[`${type}Checked`];
    let productNeedsByClient = this.state[`${type}NeedsByClient`];
    productChecked[value] = !productChecked[value];
    if (productChecked[value]) {
      productNeedsByClient.push(value);
    } else {
      productNeedsByClient.splice(productNeedsByClient.indexOf(value), 1);
    }
    this.renderClientArrays();
  }
  renderClientArrays() {
    console.log(
      this.state.sizeNeedsByClient,
      this.state.colorNeedsByClient,
      this.state.productNeedsByClient
    );
  }

  render() {
    return (
      <>
        <div className="sidebar">
          {/* Product Form  */}
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
                    value={product}
                    type="checkbox"
                    onChange={(e) => this.handleProductChange(e, "product")}
                  />
                  <span>{product}</span>
                </label>
              );
            })}
          </form>
          {/* Range Form */}
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
          {/* Size Form  */}
          <form className="sidebar_box ">
            <div className="sidebar_header">
              <span>Size</span>
              <button className="button_menu-collapse">
                <span className="material-icons">expand_less</span>
              </button>
            </div>
            <div className="sidebar_box-size">
              {this.state.sizeType.map((size) => {
                return (
                  <input
                    type="button"
                    value={size}
                    onClick={(e) => this.handleProductChange(e, "size")}
                  />
                );
              })}
            </div>
          </form>
          {/* Color Form */}
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
                      onClick={(e) => this.handleProductChange(e, "color")}
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
