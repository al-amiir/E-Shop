import React, { useState } from "react";
import Description from "./description";
import MyGallery from "./gallery";
export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: ["XS", "S", "M", "L", "xL", "XXL"],
      color: ["black", "brown", "wheat", "grey", "white", "blue"],
    };
  }
  render() {
    return (
      <>
        <div className="singleproduct">
          <div className="singleproduct_gallery">
            <ul class="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Men's Top</a>
              </li>
              <li>
                <a href="#">T-Shirt</a>
              </li>
              <li>T-Shirt Summer Vibes</li>
            </ul>
            <MyGallery />
          </div>
          <div className="singleproduct_details">
            <div className="delivery">
              <div className="delivery-car delivery-car-1">
                <span className="material-icons">local_shipping</span>
                <span>
                  <p style={{ color: "black" }}>Standard shipment</p>
                  <p>Free with in 3-6 business days</p>
                </span>
              </div>
              <div className="delivery-car delivery-car-2">
                <span className="material-icons">electric_rickshaw</span>{" "}
                <span>
                  <p style={{ color: "black" }}>Express delevirey</p>
                  <p>$35,00 available</p>
                </span>
              </div>
            </div>
            <div>
              <p className="sale">SALE</p>
              <p className="id">Product ID</p>
            </div>
            <h2 className="name">T-Shirt</h2>
            <div className="price">
              <span className="price_now">$45</span>
              <span className="price_before">$55</span>
            </div>
            <div className="color">
              <p>Color:</p>
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
            </div>
            <div>
              <p>Size</p>
              <div className="sidebar_box-size">
                {this.state.sizes.map((size) => {
                  return <input type="button" value={size} />;
                })}
              </div>
            </div>
            <p>Quantity</p>
            <div className="quantity">
              <div>
                <button>-</button>
                <span>1</span>
                <button>+</button>
              </div>
              <button className="button_addToCart">ADD TO CART</button>
              <button className="button_love">
                <span className="material-icons">favorite_border</span>
              </button>
            </div>
          </div>
        </div>
        <div className="description-reviews">
          <button>Description</button>
          <button style={{ color: "lightgray", borderColor: "lightgray" }}>
            Reviews
          </button>
        </div>
        <div>
          <Description />
        </div>
      </>
    );
  }
}
