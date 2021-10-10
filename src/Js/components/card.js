import React from "react";

export default function Card(props) {
  let data = props.data;
  return (
    <>
      <div className="card">
        <button className="button_love">
          <span className="material-icons">favorite_border</span>
        </button>
        <img src={data.thumbnail[1]} />
        <p>{data.title}</p>

        {data.sale ? (
          <>
            <font className="sale">{data.sale}</font>
            <font color="lightgrey">{data.price}</font>
          </>
        ) : (
          <font color="black">{data.price}</font>
        )}
      </div>
    </>
  );
}
