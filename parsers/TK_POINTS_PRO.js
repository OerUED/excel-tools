"use strict";

function index(data) {
  var result = {};

  result.data = parserProduct(data[Object.keys(data)[0]]);

  return result;
}

function parserProduct(source) {
  let arr = [];
  let data = source.map(item => {
      arr.push({
        id: +item.A,
        prodName: item.B,
        imageUrls: [item.C],
        promotionPrice: +item.D,
        salesPrice: +item.E,
        salesQuantity: +item.F
      });
  });
  return arr;
}

module.exports = index;
