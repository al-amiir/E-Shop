import React from "react";

import Header from "../components/header";
import SideBar from "../components/side-bar";
import MainContent from "../components/main-content ";
import Footer from "../components/footer";

export class Home extends React.Component {
  render() {
    return (
      <>
        <Header />
        <div style={{ display: "flex" }}>
          <SideBar />
          <MainContent />
        </div>
        <Footer />
      </>
    );
  }
}
