import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../features/filter/filterSlice";

export function Counter() {
  // const count = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  return (
    <div>
      {/* <span>{count}</span> */}
      <button onClick={() => dispatch(filter(["results"]))}>Decrement</button>
    </div>
  );
}
