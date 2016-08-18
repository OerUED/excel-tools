/**
 * 传入excel数据数组  输出前端需要的秒杀数组
 */
module.exports = function(arr) {
  var result = [];
  var obj = {};
  var tempNick = ''; // 存储店铺名称
  arr.forEach(item => {
    if (item.A !== tempNick) {
      // 创建新对象
      if (Object.keys(obj).length) {
        // 如果之前对象不为空 存入结果集里面
        result.push(obj);
      }
      obj = {
        productList: []
      };
      tempNick = obj.type = item.A;
      obj.productList.push({
        "id": item.B,
        "title": item.C,
        "price": item.D,
        "oldPrice": item.E,
        "imgUrl": item.F
      });
    } else {
      //在原来对象上处理
      obj.productList.push({
        "id": item.B,
        "title": item.C,
        "price": item.D,
        "oldPrice": item.E,
        "imgUrl": item.F
      });
    }
  });
  // 最后一项需要做存储
  result.push(obj);

  return result;
}
