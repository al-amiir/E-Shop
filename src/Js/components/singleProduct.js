import React from "react";
import Description from "../subComponent/description";
import ProductsLine from "../subComponent/productsLine";
import MyGallery from "../subComponent/gallery";
import TEST_DATE from "../../TEST_DATA";
import { Link } from "react-router-dom";
import Footer from "./footer";
export default class SingleProduct extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      sizes: ["XS", "S", "M", "L", "xL", "XXL"],
      color: ["black", "brown", "wheat", "grey", "white", "blue"],
      product: null,
    };
  }
  componentDidMount() {
    const { id } = this.props.match.params;
    const [product] = TEST_DATE.filter((p) => p.id == id);
    this.setState({ product });
  }

  render() {
    if (!this.state.product) {
      return (
        <div className="error">
          <p>404</p>
          <Link to="/">Home</Link>
        </div>
      );
    }

    return (
      <>
        <div className="singleproduct">
          <div className="singleproduct_gallery">
            <ul className="breadcrumb">
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Men's Top</a>
              </li>
              <li>
                <a href="#">T-Shirt</a>
              </li>
              <li>{this.state.product.title}</li>
            </ul>
            <MyGallery data={this.state.product} />
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
              {this.state.product.sale ? <p className="sale">SALE</p> : ""}

              <p className="id">Product ID {this.state.product.id}</p>
            </div>
            <h2 className="name">{this.state.product.title}</h2>
            <div className="price">
              {this.state.product.sale ? (
                <>
                  <font color="red">${this.state.product.sale}</font>
                  <font
                    color="lightgrey"
                    style={{
                      textDecoration: "line-through",
                      marginLeft: "10px",
                    }}
                  >
                    ${this.state.product.price}
                  </font>
                </>
              ) : (
                <font color="black">${this.state.product.price}</font>
              )}
            </div>
            <div className="color">
              <p>Color:</p>
              <div className="sidebar_box-color">
                {this.state.product.color.map((color, i) => {
                  return (
                    <div key={i}>
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
                {this.state.product.size.map((size, i) => {
                  return <input type="button" key={i} value={size} />;
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
        <ProductsLine />
        <Footer />
      </>
    );
  }
}
