/**
 * 传入excel数据数组  输出前端需要的推荐数组
 */
module.exports = function(arr) {
  arr = arr.map(item => {
    return({
      "img": item.C,
      "name": item.D,
      "origin_price": item.E,
      "activity_price": item.F,
      "id": item.B,
      "groupNum": parseInt(item.G)
    })
  });
  return arr;
}
