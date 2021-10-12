import React from "react";
import { Link } from "react-router-dom";
import TEST_DATA from "../../TEST_DATA";
import Card from "./card";
export default class ProductsLine extends React.Component {
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
          {TEST_DATA.slice(0, 3).map((p) => (
            <Link to={`/${p.id}`} key={p.id}>
              <Card data={p} key={p.id} />
            </Link>
          ))}
          <button>
            <span className="material-icons">arrow_forward</span>
          </button>
        </div>
      </div>
    );
  }
}
