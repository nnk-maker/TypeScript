"use strict";
const details = { lastname: "Shrivastava", firstname: "Sarthak" };
function getElement(obj, key) {
    return obj[key];
}
console.log(getElement(details, 'firstname'));
//  function getPerson<T>(data: T) {
//      return data
//  }
//  const details = { lastname: "Shrivastava"}
//  console.log(getPerson(details));
