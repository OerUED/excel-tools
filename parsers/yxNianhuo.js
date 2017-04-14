var partial_824ListYxBranchProduct = require('./partial_ListYxThirdShop');
var partial_miaosha = require('./partial_miaosha');

function getData(data) {
  var outJSON = {
    productList: [],
    shopList: [],
    seckills: [],
  };

  var listPro = data['精选'];
  var listShop = data['店铺'];
  var miaoshaArr = data['秒杀'];
  // 处理精选商品
  if (listPro.length) {
    outJSON.productList = listPro.map(item => {
      return {
        "id": item.B,
        "title": item.C,
        "subTitle": item.D,
        "oldPrice": item.F,
        "price": item.E,
        "imgUrl": item.G,
        "rebate": item.H
      }
    });
  }
  // 处理秒杀数据
  outJSON.seckills = partial_miaosha(miaoshaArr);

  if (listShop && listShop.length) {
    var shopJSON = partial_824ListYxBranchProduct(listShop);
    Object.assign(outJSON, shopJSON)
  }
  return outJSON;
}

module.exports = getData;
