/**
 * 传入excel数据数组  输出前端需要的店铺数组
 */
module.exports = function(arr) {
  var json = {};
  var result = [];
  var obj = {};
  var tempNick = ''; // 存储店铺名称
  arr.forEach(item => {
    if (item.C !== tempNick) {
      // 创建新对象
      if (Object.keys(obj).length) {
        // 如果之前对象不为空 存入结果集里面
        result.push(obj);
      }
      obj = {
        productList: []
      };
      tempNick = obj.shopName = item.C;
      obj.shopId = item.D;
      obj.shopUrl = item.B;
      obj.shopDesc = item.E;
      obj.productList.push({
        "id": item.F,
        "title": item.G,
        "price": item.H,
        "oldPrice": item.I,
        "imgUrl": item.J
      });
    } else {
      //在原来对象上处理
      obj.productList.push({
        "id": item.F,
        "title": item.G,
        "price": item.H,
        "oldPrice": item.I,
        "imgUrl": item.J
      });
    }
  });
  // 最后一项需要做存储
  result.push(obj);
  json.shopList = result;
  return json;
}
