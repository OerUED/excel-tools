"use strict";
var partial_miaosha = require('./partial_miaosha');

function index(data) {
  var miaosha = data[Object.keys(data)[0]],
    xskq = data[Object.keys(data)[1]],
    tuan = data[Object.keys(data)[2]],
    food = data[Object.keys(data)[3]],
    nvzhuang = data[Object.keys(data)[4]],
    muying = data[Object.keys(data)[5]],
    shops = data[Object.keys(data)[6]];

  var result = {
    miaosha: {}, // 秒杀
    xskq: {}, // 限时快抢
    tuan: {}, // 年中必团
    food: {},  // 美食汇
    nvzhuang: {}, // 爱逛街
    muying: {}, //省钱妈咪
    shops: {} // 店铺
  }


  result.miaosha = partial_miaosha(miaosha);
  result.xskq = parseQiang(xskq);
  result.tuan = parserProduct(tuan);
  result.food = parserProduct(food);
  result.nvzhuang = parserProduct(nvzhuang);
  result.muying = parserProduct(muying);
  result.shops = parserShop(shops);

  return result;
}

// c营销类型:0 普通， 1拼团 2团购

function parserProduct(source) {
  let res = {
    main: [],
    tuangou: [],
    pintuan: [],
  }
  let key = '';
  let data = source.map(item => {
      if (item.C == '0') {
        key = 'main';
      } else if (item.C == '1') {
        key = 'pintuan';
      } else {
        key = 'tuangou';
      }

      res[key].push({
        id: item.A,
        title: item.B,
        groupNum: item.D,
        price: item.E,
        oldPrice: item.F,
        imgUrl: item.H,
        skuId: item.G,
        shopId: item.I,
      });
  });
  return res;
}

function parserShop(source) {
    var obj = {};
    var result = [];
    var shopId = ''; // 存储店铺名称
    source.forEach(item => {
        if (item.C !== shopId) {
            // 创建新对象
            if (Object.keys(obj).length) {
                // 如果之前对象不为空 存入结果集里面
                result.push(obj);
            }
            obj = {
                productList: []
            };
            shopId = obj.shopId = item.C;
            obj.shopImg = item.A;
            obj.shopName = item.B;
            obj.productList.push({
                "id": item.D,
                "title": item.E,
                "price": item.F,
                "oldPrice": item.G,
                "skuId": item.H,
                "imgUrl": item.I
            });
        } else {
            //在原来对象上处理
            obj.productList.push({
                "id": item.D,
                "title": item.E,
                "price": item.F,
                "oldPrice": item.G,
                "skuId": item.H,
                "imgUrl": item.I
            });
        }
    });
    // 最后一项需要做存储
    result.push(obj);
    return result;
}


// 限时快抢
function parseQiang(source) {
  let res = [];
  var obj = {};
  var tempTime = '';
  source.map(item => {
    if (item.A !== tempTime) {
      // 创建新对象
      if (Object.keys(obj).length) {
        res.push(obj);
      }
      obj = {
        goods: []
      };
      tempTime = obj.start_time = item.A;
      obj.goods.push({
        id: item.B,
        title: item.C,
        price: item.D,
        oldPrice: item.E,
        skuId: item.F,
        imgUrl: item.G,
        shopId: item.H,
      });
    } else {
      obj.goods.push({
        id: item.B,
        title: item.C,
        price: item.D,
        oldPrice: item.E,
        skuId: item.F,
        imgUrl: item.G,
        shopId: item.H,
      });
    }
  });
  res.push(obj);
  return res;
}

module.exports = index;
