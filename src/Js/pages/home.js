import React from "react";

import Header from "../components/header";
import SideBar from "../components/side-bar";
import MainContent from "../components/main-content ";
import Footer from "../components/footer";
import OverRay from "../subComponent/overRay";

export class Home extends React.Component {
  render() {
    return (
      <>
        <OverRay />
        <Header />
        <div style={{ marginLeft: "3rem" }}>
          <ul className="breadcrumb">
            <li>
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">All products</a>
            </li>
          </ul>
        </div>
        <div style={{ display: "flex" }}>
          <SideBar />
          <MainContent sidebarSliding={this.handleSliding} />
        </div>
        <Footer />
      </>
    );
  }
}
