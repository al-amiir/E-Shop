import React from "react";
import { overraySliding, sliding } from "../Global/globalFunc";

export default function OverRay(props) {
  function handlefading() {
    overraySliding("100vw", "0vw");
    sliding(".sidebar", "270px", "0px");
  }
  return (
    <>
      <span onClick={handlefading} className="overray"></span>
    </>
  );
}
