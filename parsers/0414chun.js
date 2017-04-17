"use strict";

function index(data) {
  var pintuan = data[Object.keys(data)[0]],
    meishi = data[Object.keys(data)[1]],
    nvzhuang = data[Object.keys(data)[2]],
    meizhuang = data[Object.keys(data)[3]],
    muying = data[Object.keys(data)[4]],
    lottery = data[Object.keys(data)[5]];

  var result = {
    pintuan: [], // 拼团
    meishi: {}, // 美食
    nvzhuang: {}, // 女装
    meizhuang: {}, // 美妆
    muying: {}, // 母婴
    lottery: []
  }


  result.pintuan = parserPinTuan(pintuan);
  result.meishi = parserProduct(meishi);
  result.nvzhuang = parserProduct(nvzhuang);
  result.meizhuang = parserProduct(meizhuang);
  result.muying = parserProduct(muying);
  result.lottery = lottery.map(item => {
    return {
      tel: item.B,
      nick: item.A
    }
  });

  return result;
}

function parserPinTuan(source) {
  let data = source.map(item => {
      return {
        id: item.A,
        title: item.B,
        count: item.C * 1,
        price: item.D,
        oldPrice: item.E,
        imgUrl: item.F
      }
    });
  return data;
}

function parserProduct(source) {
  let res = {
    main: [],
    tuan: []
  }
  let key = '';
  let data = source.map(item => {
      if (item.F == '是') {
        key = 'tuan';
      } else {
        key = 'main';
      }

      res[key].push({
        id: item.A,
        title: item.B,
        price: item.C,
        oldPrice: item.D,
        imgUrl: item.E
      });
  });
  return res;
}

module.exports = index;
