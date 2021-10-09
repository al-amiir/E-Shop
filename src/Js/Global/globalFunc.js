let data = [
  {
    id: 1,
    title: "Samsung Galaxy S7",
    img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398399/samasung-galaxy-a51-8gb-8uh_tndbgv.jpg",
    amount: 1,
    type: "T-Shirts",
    price: 700.0,
    size: ["s", "l"],
    color: ["red", "blue"],
    views: 3,
    dateTime: 1633816800000,
  },
  {
    id: 2,
    title: "Moto G5 Plus",
    img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398477/MotoGPowerDual_2021_Reformatted_1_330x_wp8gve.png",
    amount: 1,
    type: "Sweatshirts",
    price: 600.0,
    size: ["s", "xl"],
    color: ["red", "black"],
    views: 5,
    dateTime: 1633730400000,
  },
  {
    id: 3,
    title: "Xiaomi Redmi Note 2",
    img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398543/D7A7DA95-AEF8-228B-A2D2-A3FEBF237C33_y9p6wq.png",
    amount: 1,
    type: "Tank Tops",
    price: 500.0,
    size: ["xs", "l"],
    color: ["white", "black"],
    views: 1,
    dateTime: 1633644000000,
  },
  {
    id: 4,
    title: "Nokia G20",
    img: "https://res.cloudinary.com/drecbsopp/image/upload/v1627398698/nokia3_resize_md_qdw7bv.jpg",
    amount: 1,
    type: "Dress shirts",
    price: 400.0,
    size: ["xxxl", "xxl"],
    color: ["red", "white"],
    views: 9,
    dateTime: 1633557600000,
  },
];

let filteredArray, clientSearch;

/**
 * If client send me an array, if my data had at least one component of client request, it is okay,
 * else return false
 * @param {array} client
 * @param {array} item
 * @returns boolean
 */
function interSect(client, item) {
  let counter = 0;
  for (let i = 0; i < item.length; i++) {
    if (client.includes(item[i])) {
      counter++;
      break;
    }
  }
  return counter === 0 ? false : true;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Filter Data Function
//////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * 1- loop through data
 * 2- get single item data
 * 3- set filter check = true
 * 4- start looping through clientSearch Array to compare what client need with what we have
 * 5- if we have client sends number ( the price limit )
 * 6- if we compare client array with singleItemData array , i will use intersect function
 * 7- if we compare client array with singleItemData string
 * 8- if any of filter condition had a false value, break all loop
 * 9- if filterCheck had true value, push this item to filteredArray
 * @param {array} clientSearchArray
 * @param {array} data
 *
 */
export function filterDataFunc(clientSearchArray, data) {
  let filteredArray = [];
  data.filter((item) => {
    // 1- loop through data
    // 2- get single item data
    let singleItemData = [item.type, item.price, item.size, item.color];

    // 3- set filter check = true
    let filterCheck = true;
    // 4- start looping through clientSearch Array to compare what client need with what we have
    for (let i = 0; i < clientSearchArray.length; i++) {
      // 5- if we have client sends number ( the price limit )
      if (typeof clientSearchArray[i] === "number") {
        if (!singleItemData[i] <= clientSearchArray[i]) filterCheck = false;
      }
      // 6- if we compare client array with singleItemData array , i will use intersect function
      if (typeof singleItemData[i] === "object") {
        filterCheck = interSect(clientSearchArray[i], singleItemData[i]);
      }
      // 7- if we compare client array with singleItemData string
      else {
        if (!clientSearchArray[i].includes(singleItemData[i])) {
          filterCheck = false;
        }
      }
      // 8- if any of filter condition had a false value, break all loop
      if (filterCheck === false) break;
    }
    // 9- if filterCheck had true value, push this item to filteredArray
    if (filterCheck) filteredArray.push(item);
  });
  return filteredArray;
}

// clientSearch = [
//   ["T-Shirts", "Sweatshirts"],
//   [700],
//   ["s", "l"],
//   ["red", "blue"],
// ];
// filterDataFunc(clientSearch);

function sortingFunc(array, type) {
  if (type === "popular") {
    array.sort(function (a, b) {
      return b.views - a.views;
    });
  } else {
    array.sort(function (a, b) {
      return b.dateTime - a.dateTime;
    });
  }
  return array;
}
// sortingFunc(data, "popular");
// sortingFunc(data, "new");
// sortingFunc(data, "popular");

// console.log(data);
// sortingFunc(data, "new");
// console.log(data);
