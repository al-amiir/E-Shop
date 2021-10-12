import React, { useState } from "react";
import { Link } from "react-router-dom";
import Card from "../subComponent/card";
import Pagination from "../subComponent/pagination";
import { useSelector, useDispatch } from "react-redux";
import { sort } from "../../features/filter/filterSlice";
import { overraySliding, sliding } from "../Global/globalFunc";

export default function MainContent(props) {
  const [sortValue, setSortValue] = useState("-select-");
  const dispatch = useDispatch();
  let sidebarSliding = false;
  function handleSelect(event) {
    setSortValue(event.target.value);
  }
  function handleDispatch() {
    dispatch(sort(sortValue));
  }
  function handlesidebarSliding(event) {
    sliding(".sidebar", "0px", "270px");
    overraySliding("reverse");
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
            <span
              onClick={handlesidebarSliding}
              className="button_filter fa fa-filter "
            ></span>
          </div>
        </div>
        <div className="maincontent_content">
          {products.length > 0 ? (
            products.map((c) => (
              <Link to={`/${c.id}`} key={c.id}>
                <Card data={c} key={c.id} />
              </Link>
            ))
          ) : (
            <p className="text-error">Sorry Not Found!.</p>
          )}
        </div>
        {products.length > 0 ? <Pagination /> : ""}
      </div>
    </>
  );
}
