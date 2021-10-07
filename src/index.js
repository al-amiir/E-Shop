import React from "react";
import ReactDOM from "react-dom";
import SideBar from "./Js/components/side-bar";
// import './index.css';
import { Home } from "./Js/pages/main-page";

ReactDOM.render(
  <>
    <Home />
    <SideBar />
  </>,
  document.getElementById("root")
);
