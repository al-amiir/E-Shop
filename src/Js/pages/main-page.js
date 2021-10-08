import React, { useState } from "react";
import Header from "../components/header";
import SideBar from "../components/side-bar";
import MainContent from "../components/main-content ";
export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <MainContent />
        </div>
      </>
    );
  }
}
