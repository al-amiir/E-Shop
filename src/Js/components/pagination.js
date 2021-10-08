import React, { useState } from "react";

export default class Pagination extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <>
        <div className="pagination">
          <button className="button_pagination pagination_prev">PREV</button>

          <span>page</span>
          <button className="pagination_number">1</button>

          <button className="button_pagination pagination_next">NEXT</button>
        </div>
      </>
    );
  }
}
