var partial_824ListYxBranchProduct = require('./partial_824ListYxBranchProduct');

function yx1111Branch(data) {
  console.log(data);
  var tuanArr = data['团购'];

  var outJSON = {
    tuanList: [],
    shopList: []
  };

  // 处理秒杀数据
  if (tuanArr.length) {
    outJSON.tuanList = tuanArr.map(item => {
      return {
        "id": item.B,
        "title": item.C,
        "subTitle": item.D,
        "oldPrice": item.E,
        "price": item.F,
        "imgUrl": item.G
      }
    });
  }

  if (data['店铺'] && data['店铺'].length) {
    var shopJSON = partial_824ListYxBranchProduct(data['店铺']);
    Object.assign(outJSON, shopJSON)
  }
  return outJSON;
}

module.exports = yx1111Branch;
