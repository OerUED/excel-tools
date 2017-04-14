/**
 * 传入excel数据数组  输出前端需要的秒杀数组
 */
module.exports = function(arr) {
  var result = [];
  var obj = {};
  var tempNick = '';
  arr.forEach(item => {
    if (item.A !== tempNick) {
      // 创建新对象
      if (Object.keys(obj).length) {
        // 如果之前对象不为空 存入结果集里面
        result.push(obj);
      }
      obj = {
        goods: []
      };
      tempNick = obj.start_time = item.A;
      obj.topic = item.B;
      obj.goods.push({
        "id": item.C - 0,
        "limited_number": item.D - 0,
        "limited_time": item.E - 0,
        "img": item.F,
        "name": item.G,
        "origin_price": item.H,
        "activity_price": item.I
      });
    } else {
      //在原来对象上处理
      obj.goods.push({
        "id": item.C - 0,
        "limited_number": item.D - 0,
        "limited_time": item.E - 0,
        "img": item.F,
        "name": item.G,
        "origin_price": item.H,
        "activity_price": item.I
      });
    }
  });
  // 最后一项需要做存储
  result.push(obj);
  return result;
}
