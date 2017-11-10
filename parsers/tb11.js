function xcx(data) {
  var keys = Object.keys(data);
  var result = {
    keys: keys,
    datas: {}
  };
  keys.forEach(function (key) {
    var ret = [];
    data[key].forEach(function (d) {
      ret.push({
        prodName: d.A,
        url: d.B,
        oldPrice: d.C,
        price: d.D,
        coupon: d.E,
        sales: d.F,
        img: d.G
      });
    });
    result.datas[key] = ret;
  });
  return result
}

module.exports = xcx;
