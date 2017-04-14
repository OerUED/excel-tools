var partial_miaosha = require('./partial_miaosha');
var branch = require('./yx1111Branch');

function yxIndex(data) {
  var miaoshaArr = data['秒杀'];

  var outJSON = {
    seckills: [],
    tuanList: [],
    shopList: []
  };

  // 处理秒杀数据
  outJSON.seckills = partial_miaosha(miaoshaArr);

  // 下面部分的数据逻辑和分会场一样 直接取分会场数据
  var tuanShop = branch(data);
  Object.assign(outJSON, tuanShop);
  // 处理各个推荐列表
  return outJSON;
}

module.exports = yxIndex;
