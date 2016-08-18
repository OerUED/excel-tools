/**
 * 传入excel数据数组  输出前端需要的秒杀数组
 */
module.exports = function(arr) {
  var result = [];
  arr.forEach(item => {
    var data = {
      "id": item.B,
      "title": item.D,
      "price": item.F,
      "oldPrice": item.E,
      "imgUrl": item.G,
      "timeLeft": 0,
      "timeRight": 0,
      "limitNum": item.H
    };

    var t = item.A.replace('，', ',').replace(/\s/g, '').split(',');

    var time = new Date('2016 08-'+ t[0] +' '+ t[1]);
    data.timeLeft = time.getTime();
    var nextTime = time.setMinutes((item.C - 0));
    data.timeRight = new Date(nextTime).getTime();

    result.push(data);
  });
  return result;
}
