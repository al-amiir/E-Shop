import React, { useState } from "react";
import Navigation from "../components/nav";
import SideBar from "../components/side-bar";
import MainContent from "../components/main-content ";
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navigation />
        <div style={{ display: "flex" }}>
          <SideBar />
          <MainContent />
        </div>
      </>
    );
  }
}
