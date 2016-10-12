function lottery(data) {
  var arr = data[Object.keys(data)[0]];
  var result = [];
  var obj = {};
  var res = arr.map(item => {
    return {
      img: item.G,
      link: item.D,
      title: item.C,
      price: item.E,
      originPrice: item.F,
      id: item.B
    }
  });
  return res;
}

module.exports = lottery;
