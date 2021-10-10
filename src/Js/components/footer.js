import React from "react";

export default class Footer extends React.Component {
  render() {
    return (
      <>
        <div className="footer">
          <div className="footer_top">
            <p>
              Subscribe to our newsletter and receive exclusive offers every
              week
            </p>
            <form>
              <input
                className="footer_input-email"
                type="text"
                placeholder="Enter your email"
              />
              <input
                className="footer_input-subscribe"
                type="button"
                value="Subscribe"
              />
            </form>
          </div>

          <div className="footer_bottom">
            <div className="footer_bottom-left">
              <div className="logo">
                <span className="material-icons">article</span>
                <span className="logo_name">
                  <font color="orange">E</font> shop
                </span>
              </div>
              <p>
                House my brand design clothing for the young, the old & everyone
                in between - but most importantly, for the fashionable.
              </p>
              <div className="footer_bottom-icons">
                <button>
                  <i className="fa fa-facebook"></i>
                </button>
                <button>
                  <i className="fa fa-twitter"></i>
                </button>
                <button>
                  <i className="fa fa-linkedin"></i>
                </button>
                <button>
                  <i className="fa fa-instagram"></i>
                </button>
                <button>
                  <i className="fa fa-youtube"></i>
                </button>
              </div>
            </div>
            <div className="footer_bottom-right">
              <div className="footer_bottom-2">
                <h3>Shopping online</h3>
                <ul>
                  <li>
                    <a href="#">Order status</a>
                  </li>
                  <li>
                    <a href="#">Shipping and Delivery</a>
                  </li>
                  <li>
                    <a href="#">Returns</a>
                  </li>
                  <li>
                    <a href="#">Payment Options</a>
                  </li>
                  <li>
                    <a href="#">Contact Us</a>
                  </li>
                </ul>
              </div>
              <div className="footer_bottom-3">
                <h3>Information</h3>
                <ul>
                  <li>
                    <a href="#">Gift Cards</a>
                  </li>
                  <li>
                    <a href="#">Find a store</a>
                  </li>
                  <li>
                    <a href="#">Newsletter</a>
                  </li>
                  <li>
                    <a href="#">Become a member</a>
                  </li>
                  <li>
                    <a href="#">Site feedback</a>
                  </li>
                </ul>
              </div>
              <div className="footer_bottom-4">
                <div className="footer_bottom-3">
                  <h3>Contact</h3>
                  <ul>
                    <li>
                      <a href="#">store@uikit.com</a>
                    </li>
                    <li>
                      <a href="#">Hotline: +1 131 138 138</a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
          <div className="footer_rights">
            <p>DESIGN BY ICEO.CO-@2019.ALL RIGHTS RECIVED</p>
          </div>
        </div>
      </>
    );
  }
}
