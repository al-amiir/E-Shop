import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "./card";
import Pagination from "./pagination";
import { useSelector, useDispatch } from "react-redux";
import { sort } from "../../features/filter/filterSlice";

export default function MainContent(props) {
  const [sortValue, setSortValue] = useState("-select-");
  const dispatch = useDispatch();

  function handleSelect(event) {
    setSortValue(event.target.value);
  }
  function handleDispatch() {
    dispatch(sort(sortValue));
  }
  let products = useSelector((state) => state.filter.dataArray);
  return (
    <>
      <div className="maincontent">
        <div className="maincontent_header">
          <span>
            Men's Tops
            <span style={{ marginLeft: "5px" }}>({products.length})</span>
          </span>
          <div className="maincontent_header-right">
            <form>
              <label>
                Show products :
                <select>
                  <option value="10">10</option>
                  <option value="20">20</option>
                  <option value="30">30</option>
                  <option value="40">40</option>
                </select>
              </label>
            </form>
            <form>
              <label>
                Sort :
                <select
                  value={sortValue}
                  onClick={handleDispatch}
                  onChange={handleSelect}
                >
                  <option value="select">select</option>
                  <option value="popular">popular</option>
                  <option value="new">new</option>
                </select>
              </label>
            </form>
          </div>
        </div>
        <div className="maincontent_content">
          {products.length > 0 ? (
            products.map((c) => (
              <Link to={`${c.id}`} key={c.id}>
                <Card data={c} key={c.id} />
              </Link>
            ))
          ) : (
            <p className="text-error">
              Sorry We Don't Have What you Searched For !.
            </p>
          )}
        </div>
        {products.length > 0 ? <Pagination /> : ""}
      </div>
    </>
  );
}
