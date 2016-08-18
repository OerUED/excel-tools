var partial_824ListBao = require('./partial_824ListBao');
var partial_824ListYxBranchProduct = require('./partial_824ListYxBranchProduct');

function yx824Branch(data) {
  var baoArr = data['爆品'];

  var outJSON = {
    baoping: [],
    shopList: []
  };

  // 处理秒杀数据
  if (baoArr.length) {
    outJSON.baoping = partial_824ListBao(baoArr);
  }

  if (data['店铺'] && data['店铺'].length) {
    var shopJSON = partial_824ListYxBranchProduct(data['店铺']);
    Object.assign(outJSON, shopJSON)
  }
  return outJSON;
}

module.exports = yx824Branch;
