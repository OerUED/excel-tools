/**
 * 传入excel数据数组  输出前端需要的推荐数组
 */
module.exports = function(arr) {
  var result = [];
  arr.forEach(item => {
    result.push({
      "img": item.C,
      "name": item.D,
      "origin_price": item.E,
      "activity_price": item.F,
      "id": item.B
    })
  });
  return result;
}
