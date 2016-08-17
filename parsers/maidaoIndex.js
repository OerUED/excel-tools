var partial_miaosha = require('./partial_miaosha');
var partial_recomd = require('./partial_recomd');

function maiDaoIndex(data) {
  var miaoshaArr = data['秒杀'];

  var outJSON = {
    recommendations: {},
    seckills: []
  };

  // 处理秒杀数据
  outJSON.seckills = partial_miaosha(miaoshaArr);
  // 处理各个推荐列表
  Object.keys(data).filter(item => {
    return item !== '秒杀';
  }).forEach(item => {
    // 只有填了数据才处理 要不然鬼知道列表名
    if(data[item].length) {
      outJSON.recommendations[data[item][0].A] = partial_recomd(data[item]);
    }
  });
  return outJSON;
}

module.exports = maiDaoIndex;
