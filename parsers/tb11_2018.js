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
      imgUrl: item.I
    }
  });
  var mdArr = res.filter(i => i.salesType && i.salesType.indexOf('免单') > -1).reverse();
  var msArr = res.filter(i => i.salesType && i.salesType.indexOf('秒杀') > -1).reverse();
  var result = [mdArr, msArr];
  return result;
}

module.exports = tb11_2018;
