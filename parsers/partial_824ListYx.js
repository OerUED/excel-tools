/**
 * 传入excel数据数组  输出前端需要的推荐数组
 */
module.exports = function(arr) {
  var result = [];
  arr.forEach(item => {
    result.push({
      "id": item.B,
      "title": item.C,
      "price": item.E,
      "oldPrice": item.D,
      "imgUrl": item.F
    });
  });
  return result;
}
