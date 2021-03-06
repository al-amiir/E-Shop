import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { filter } from "../../features/filter/filterSlice";
import { collapseHeight } from "../Global/globalFunc";
export default function SideBar(props) {
  let state = {
    sizeType: ["xs", "s", "m", "l", "xl", "xxl"],
    sizeChecked: {
      xs: false,
      s: false,
      m: false,
      l: false,
      xl: false,
      xxl: false,
    },
    sizeNeedsByClient: [],

    color: ["black", "red", "yellow", "green", "grey", "blue"],
    colorChecked: {
      black: false,
      brown: false,
      wheat: false,
      grey: false,
      white: false,
      blue: false,
    },
    colorNeedsByClient: [],

    productType: ["T-Shirts", "Sweatshirts", "Tank Tops", "Dress Shirts"],
    productChecked: {
      "T-Shirts": false,
      Sweatshirts: false,
      "Tank Tops": false,
      "Dress Shirts": false,
    },
    productNeedsByClient: [],
  };
  let [range, setRange] = useState(50);
  // range: 50,
  let finalArraySent;
  const dispatch = useDispatch();

  function handleRange(event) {
    setRange(+event.target.value);
    // state.range = event.target.value;
  }

  function handleProductChange(event, type) {
    let value = event.target.value;
    let productChecked = state[`${type}Checked`];
    let productNeedsByClient = state[`${type}NeedsByClient`];

    productChecked[value] = !productChecked[value];

    if (productChecked[value]) {
      productNeedsByClient.push(value);
      event.target.style.boxShadow = " 0px 0px 8px 0px black";
    } else {
      productNeedsByClient.splice(productNeedsByClient.indexOf(value), 1);
      event.target.style.boxShadow = " 0px 0px white";
    }
    finalArraySent = [state.productNeedsByClient, range, state.sizeNeedsByClient, state.colorNeedsByClient];

    dispatch(filter(finalArraySent));
  }

  function handleFormDisplay(event) {
    event.preventDefault();
    let targetForm = event.target.closest("form").classList[1];
    if (event.target.style.transform === "" || event.target.style.transform === "rotateZ(0deg)") {
      event.target.style.transform = "rotateZ(180deg)";
    } else {
      event.target.style.transform = "rotateZ(0deg)";
    }
    if (targetForm === "sidebar_component-1") {
      collapseHeight(targetForm, "40px", "160px");
    } else {
      collapseHeight(targetForm, "40px", "83px");
    }
    console.log(event.target.style.transform);
  }
  return (
    <>
      <div className="sidebar">
        {/* Product Form  */}
        <form className=" sidebar_component sidebar_component-1  sidebar_product">
          <div className="sidebar_header">
            <span>Product Type</span>
            <button onClick={handleFormDisplay} className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          {state.productType.map((product, i) => {
            return (
              <label key={i}>
                <input value={product} type="checkbox" onChange={(e) => handleProductChange(e, "product")} />
                <span>{product}</span>
              </label>
            );
          })}
        </form>
        {/* Range Form */}
        <form className="sidebar_component sidebar_component-2 sidebar_range">
          <div className="sidebar_header">
            <span>Price</span>
            <button onClick={handleFormDisplay} className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_range-text">
            <span>0 USD</span>
            <span>{range} USD</span>
          </div>
          <input type="range" id="vol" name="vol" min="0" max="500" value={range} onChange={handleRange} />
        </form>
        {/* Size Form  */}
        <form className="sidebar_component sidebar_component-3 ">
          <div className="sidebar_header">
            <span>Size</span>
            <button onClick={handleFormDisplay} className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_component-size">
            {state.sizeType.map((size, i) => {
              return <input key={i} type="button" value={size} onClick={(e) => handleProductChange(e, "size")} />;
            })}
          </div>
        </form>
        {/* Color Form */}
        <form className="sidebar_component sidebar_component-4">
          <div className="sidebar_header">
            <span>Color</span>
            <button onClick={handleFormDisplay} className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_component-color">
            {state.color.map((color, i) => {
              return (
                <div key={i}>
                  <input style={{ backgroundColor: color }} type="button" value={color} onClick={(e) => handleProductChange(e, "color")} />
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
