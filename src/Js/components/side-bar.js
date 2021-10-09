// import React, { useState } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import { filter } from "../../features/filter/filterSlice";
// import { Counter } from "./test";

// export default class SideBar extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       sizeType: ["xs", "s", "m", "l", "xl", "xxl"],
//       sizeChecked: {
//         xs: false,
//         s: false,
//         m: false,
//         l: false,
//         xl: false,
//         xxl: false,
//       },
//       sizeNeedsByClient: [],

//       color: ["black", "brown", "wheat", "grey", "white", "blue"],
//       colorChecked: {
//         black: false,
//         brown: false,
//         wheat: false,
//         grey: false,
//         white: false,
//         blue: false,
//       },
//       colorNeedsByClient: [],

//       productType: ["T-Shirts", "Sweatshirts", "Tank Tops", "Dress Shirts"],
//       productChecked: {
//         "T-Shirts": false,
//         Sweatshirts: false,
//         "Tank Tops": false,
//         "Dress Shirts": false,
//       },
//       productNeedsByClient: [],
//       range: 50,
//     };
//     this.handleRange = this.handleRange.bind(this);
//     this.handleProductChange = this.handleProductChange.bind(this);
//     this.renderClientArrays = this.renderClientArrays.bind(this);
//     // const count = useSelector((state) => state.counter.value);
//     // const dispatch = useDispatch();
//     // const mapStateToProps = (state) => ({
//     //   clientArray: state.sizeNeedsByClient,
//     // });
//     // const mapDispatchToProps = () => ({
//     //   filter,
//     // });
//   }
//   handleRange(event) {
//     this.setState({ range: event.target.value });
//   }

//   handleProductChange(event, type) {
//     let value = event.target.value;
//     let productChecked = this.state[`${type}Checked`];
//     let productNeedsByClient = this.state[`${type}NeedsByClient`];
//     productChecked[value] = !productChecked[value];
//     if (productChecked[value]) {
//       productNeedsByClient.push(value);
//     } else {
//       productNeedsByClient.splice(productNeedsByClient.indexOf(value), 1);
//     }
//     this.renderClientArrays();
//   }
//   renderClientArrays() {
//     console.log(
//       this.state.sizeNeedsByClient,
//       this.state.colorNeedsByClient,
//       this.state.productNeedsByClient
//     );
//   }

//   render() {
//     return (
//       <>
//         <div className="sidebar">
//           {/* Product Form  */}
//           <form className="sidebar_box sidebar_product">
//             <div className="sidebar_header">
//               <span>Product Type</span>
//               <button className="button_menu-collapse">
//                 <span className="material-icons">expand_less</span>
//               </button>
//             </div>
//             {this.state.productType.map((product) => {
//               return (
//                 <label>
//                   <input
//                     value={product}
//                     type="checkbox"
//                     onChange={(e) => this.handleProductChange(e, "product")}
//                   />
//                   <span>{product}</span>
//                 </label>
//               );
//             })}
//           </form>
//           {/* Range Form */}
//           <form className="sidebar_box sidebar_range">
//             <div className="sidebar_header">
//               <span>Price</span>
//               <button className="button_menu-collapse">
//                 <span className="material-icons">expand_less</span>
//               </button>
//             </div>
//             <div className="sidebar_range-text">
//               <span>0 USD</span>
//               <span>{this.state.range} USD</span>
//             </div>
//             <input
//               type="range"
//               id="vol"
//               name="vol"
//               min="0"
//               max="500"
//               onChange={this.handleRange}
//             />
//           </form>
//           {/* Size Form  */}
//           <form className="sidebar_box ">
//             <div className="sidebar_header">
//               <span>Size</span>
//               <button className="button_menu-collapse">
//                 <span className="material-icons">expand_less</span>
//               </button>
//             </div>
//             <div className="sidebar_box-size">
//               {this.state.sizeType.map((size) => {
//                 return (
//                   <input
//                     type="button"
//                     value={size}
//                     onClick={(e) => this.handleProductChange(e, "size")}
//                   />
//                 );
//               })}
//             </div>
//           </form>
//           {/* Color Form */}
//           <form className="sidebar_box ">
//             <div className="sidebar_header">
//               <span>Color</span>
//               <button className="button_menu-collapse">
//                 <span className="material-icons">expand_less</span>
//               </button>
//             </div>
//             <div className="sidebar_box-color">
//               {this.state.color.map((color) => {
//                 return (
//                   <div>
//                     <input
//                       style={{ backgroundColor: color }}
//                       type="button"
//                       value={color}
//                       onClick={(e) => this.handleProductChange(e, "color")}
//                     />
//                   </div>
//                 );
//               })}
//             </div>
//           </form>
//         </div>
//         <Counter />
//       </>
//     );
//   }
// }

import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { filter } from "../../features/filter/filterSlice";

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

    color: ["black", "brown", "wheat", "grey", "white", "blue"],
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
    range: 50,
  };
  let finalArraySent;
  const count = useSelector((state) => state.filter.value);
  const dispatch = useDispatch();

  function handleRange(event) {
    state.range = event.target.value;
  }

  function handleProductChange(event, type) {
    let value = event.target.value;
    let productChecked = state[`${type}Checked`];
    let productNeedsByClient = state[`${type}NeedsByClient`];
    productChecked[value] = !productChecked[value];
    if (productChecked[value]) {
      productNeedsByClient.push(value);
    } else {
      productNeedsByClient.splice(productNeedsByClient.indexOf(value), 1);
    }
    finalArraySent = [
      state.productNeedsByClient,
      state.range,
      state.sizeNeedsByClient,
      state.colorNeedsByClient,
    ];
    // renderClientArrays();
    dispatch(filter(finalArraySent));
  }

  function renderClientArrays() {
    console.log(
      state.sizeNeedsByClient,
      state.colorNeedsByClient,
      state.productNeedsByClient
    );
  }

  return (
    <>
      <div className="sidebar">
        {/* Product Form  */}
        <form className="sidebar_box sidebar_product">
          <div className="sidebar_header">
            <span>Product Type</span>
            <button className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          {state.productType.map((product) => {
            return (
              <label>
                <input
                  value={product}
                  type="checkbox"
                  onChange={(e) => handleProductChange(e, "product")}
                />
                <span>{product}</span>
              </label>
            );
          })}
        </form>
        {/* Range Form */}
        <form className="sidebar_box sidebar_range">
          <div className="sidebar_header">
            <span>Price</span>
            <button className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_range-text">
            <span>0 USD</span>
            <span>{state.range} USD</span>
          </div>
          <input
            type="range"
            id="vol"
            name="vol"
            min="0"
            max="500"
            onChange={handleRange}
          />
        </form>
        {/* Size Form  */}
        <form className="sidebar_box ">
          <div className="sidebar_header">
            <span>Size</span>
            <button className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_box-size">
            {state.sizeType.map((size) => {
              return (
                <input
                  type="button"
                  value={size}
                  onClick={(e) => handleProductChange(e, "size")}
                />
              );
            })}
          </div>
        </form>
        {/* Color Form */}
        <form className="sidebar_box ">
          <div className="sidebar_header">
            <span>Color</span>
            <button className="button_menu-collapse">
              <span className="material-icons">expand_less</span>
            </button>
          </div>
          <div className="sidebar_box-color">
            {state.color.map((color) => {
              return (
                <div>
                  <input
                    style={{ backgroundColor: color }}
                    type="button"
                    value={color}
                    onClick={(e) => handleProductChange(e, "color")}
                  />
                </div>
              );
            })}
          </div>
        </form>
      </div>
    </>
  );
}
