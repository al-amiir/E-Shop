import React, { useState } from "react";
import Card from "./card";
import Pagination from "./pagination";
export default class MainContent extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="maincontent">
          <div className="maincontent_header">
            <span>
              Men's Tops <span>(number)</span>
            </span>
            <div className="maincontent_header-right">
              <form>
                <label>
                  Show products :
                  <select>
                    <option value="10">10</option>
                    <option value="20">20</option>
                    <option value="30">30</option>
                    <option value="40">40</option>
                  </select>
                </label>
              </form>
              <form>
                <label>
                  Sort :
                  <select>
                    <option value="popular">popular</option>
                    <option value="new">new</option>
                  </select>
                </label>
              </form>
            </div>
          </div>
          <div className="maincontent_content">
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
            <Card />
          </div>
          <Pagination />
        </div>
      </>
    );
  }
}
