import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./Js/components/side-bar";
import MainContent from "./Js/components/main-content ";

// import './index.css';
import { Home } from "./Js/pages/main-page";

ReactDOM.render(
  <>
    <Home />
    <div style={{ display: "flex" }}>
      <SideBar />
      <MainContent />
    </div>
  </>,
  document.getElementById("root")
);
