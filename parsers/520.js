"use strict";

function index(data) {
  var wajx = data[Object.keys(data)[0]],
    jrbt = data[Object.keys(data)[1]],
    laxxj = data[Object.keys(data)[2]],
    wack = data[Object.keys(data)[3]],
    acdzn = data[Object.keys(data)[4]],
    maxl = data[Object.keys(data)[5]],
    shop = data[Object.keys(data)[6]],
    lottery = data[Object.keys(data)[7]];

  var result = {
    wajx: {}, // 为爱精选
    jrbt: {}, // 节日必团
    laxxj: {}, // 恋爱小心机
    wack: {},  // 为爱痴狂
    acdzn: {}, // 爱穿搭指南
    maxl: {}, //母爱系列
    shop: {}, // 店铺
    lottery: [],
  }


  result.wajx = parserProduct(wajx);
  result.jrbt = parserProduct(wajx);
  result.laxxj = parserProduct(laxxj);
  result.wack = parserProduct(wack);
  result.acdzn = parserProduct(acdzn);
  result.maxl = parserProduct(maxl);
  result.shop = parserShop(shop);
  result.lottery = lottery.map(item => {
    return {
      tel: item.B,
      nick: item.A
    }
  });

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

module.exports = index;
