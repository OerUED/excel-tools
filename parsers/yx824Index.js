var partial_miaosha_yx = require('./partial_miaosha_yx');
var partial_824ListYx = require('./partial_824ListYx');
var partial_824ListYxProduct = require('./partial_824ListYxProduct');

function maiDaoIndex(data) {
  var miaoshaArr = data['秒杀'];

  var outJSON = {
    seckill: []
  };

  // 处理秒杀数据
  outJSON.seckill = partial_miaosha_yx(miaoshaArr);

  // 处理列表数据
  Object.keys(data).filter(item => {
    return item !== '秒杀' && item.indexOf('列表') > -1;
  }).forEach(item => {
    // 只有填了数据才处理 要不然鬼知道列表名
    if(data[item].length) {
      var name = data[item][0].A;
      outJSON[name] = partial_824ListYx(data[item]);
    }
  });

  // 处理店铺数据
  Object.keys(data).filter(item => {
    return item !== '秒杀' && item.indexOf('店铺') > -1;
  }).forEach(item => {
    // 只有填了数据才处理 要不然鬼知道列表名
    if(data[item].length) {
      var shopJSON = partial_824ListYxProduct(data[item]);
      Object.assign(outJSON, shopJSON)
    }
  });
  return outJSON;
}

module.exports = maiDaoIndex;
