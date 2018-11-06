function tb11_2018(data) {
  var arr = data[Object.keys(data)[0]];
  var res = arr.map(item => {
    return {
      catType: item.A,
      prodName: item.B,
      count: item.C,
      price: item.D,
      oldPrice: item.E,
      salesType: item.F,
      prodUrl: item.G,
      remark: item.H,
      imgUrl: item.I,
      id: getProdId(item.G, 'id'),
      itemId: getProdId(item.G, 'item_id')
    }
  });
  var mdArr = res.filter(i => i.salesType && i.salesType.indexOf('免单') > -1);
  var msArr = res.filter(i => i.salesType && i.salesType.indexOf('秒杀') > -1);
  var result = [mdArr, msArr];
  return result;
}

function getProdId (url, name) {
  var reg = new RegExp("(^|&)" + name + "=([^&]*)(&|$)", "i");
  var r = url.split('?')[1].match(reg);
  if (r != null) return unescape(r[2]);
  return null;
}

module.exports = tb11_2018;
