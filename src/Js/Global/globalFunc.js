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
export function filterDataFunc(clientSearch, data) {
  let filteredArray = [];
  data.filter((item) => {
    // 1- loop through data
    // 2- get single item data
    let singleItemData = [item.type, item.price, item.size, item.color];
    // 3- set filter check = true
    let filterCheck = true;
    // 4- start looping through clientSearch Array to compare what client need with what we have
    for (let i = 0; i < clientSearch.length; i++) {
      if (clientSearch[i].length === 0) {
        filterCheck = true;
      }
      // 5- if we have client sends number ( the price limit )
      else if (typeof clientSearch[i] === "number") {
        if (singleItemData[i] <= clientSearch[i]) {
          filterCheck = true;
        }
      }
      // 6- if we compare client array with singleItemData array , i will use intersect function
      else if (typeof singleItemData[i] === "object") {
        filterCheck = interSect(clientSearch[i], singleItemData[i]);
      }
      // 7- if we compare client array with singleItemData string
      else {
        if (!clientSearch[i].includes(singleItemData[i])) {
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
// Sort Data Function
//////////////////////////////////////////////////////////////////////////////////////////////////////

export function sortingFunc(array, type) {
  if (type === "popular") {
    array.sort(function (a, b) {
      return b.views - a.views;
    });
  } else if (type === "new") {
    array.sort(function (a, b) {
      return b.dateTime - a.dateTime;
    });
  }

  return array;
}
