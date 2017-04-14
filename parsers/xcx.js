function xcx(data) {
  var arr = data[Object.keys(data)[0]];
  var result = [];
  var obj = {};
  var res = arr.map(item => {
    return {
      id: item.A,
      src: item.B,
      title: item.C,
      price: item.D
    }
  });
  return res;
}

module.exports = xcx;
