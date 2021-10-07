import React, { useState } from "react";
import Navigation from "../components/nav";

export class Home extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <Navigation />
      </>
    );
  }
}
