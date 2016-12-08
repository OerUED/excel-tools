
function app(data) {
  var arr = data['优惠券'];
  var res = arr.map(item => {
    return JSON.stringify({
      title: item.A,
      url: item.B,
      img: item.C
    });
  });
  return 'var array = [' + res.join(',') + '];';
}

module.exports = app;
