var partial_824ListYxBranchProduct = require('./partial_ListYxBranchProduct');

function getData(data) {
  var outJSON = {
    productList: [],
    shopList: [],
    tuanList: []
  };

  var listPro = data['精选'];
  var listShop = data['店铺'];
  var listTuan = data['团购'];
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

  // 处理团购数据
  if (listTuan.length) {
    outJSON.tuanList = listTuan.map(item => {
      return {
        "articleStatus": "ONSALE",
        "articleActivityStatus": "INPROGRESS",
        "id": item.B,
        "title": item.C,
        "summary": item.D,
        "price": item.E,
        "imgUrl": item.F,
        "avatar": item.G,
        "startTime": item.H,
        "endTime": item.I,
        "publisher": item.J,
      }
    });
  }

  if (listShop && listShop.length) {
    var shopJSON = partial_824ListYxBranchProduct(listShop);
    Object.assign(outJSON, shopJSON)
  }
  return outJSON;
}

module.exports = getData;
