function buyerShow(data) {
  var arr = data[Object.keys(data)[0]];
  var result = [];
  var obj = {};
  var tempNick = '';
  arr.forEach(item => {
    if (item.B !== tempNick) {
      // 创建新对象
      if (Object.keys(obj).length) {
        // 如果之前对象不为空 存入结果集里面
        result.push(obj);
      }
      obj = {
        imgs: []
      };
      obj.avatar = item.A;
      tempNick = obj.name = item.B;
      obj.text = item.D;
      obj.productId = item.E;
      obj.imgUrl = item.F;
      obj.title = item.G;
      obj.price = item.H;
      obj.imgs.push({
        'imgUrl': item.C,
        'link': ''
      });
    } else {
      //在原来对象上处理
      obj.imgs.push({
        'imgUrl': item.C,
        'link': ''
      });
    }
  });
  // 最后一项需要做存储
  result.push(obj);
  return result;
}

module.exports = buyerShow;
