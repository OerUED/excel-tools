var partial_824ListYxBranchProduct = require('./partial_ListYxBranchProduct');

function yx1111Branch(data) {
  var keys = Object.keys(data);
  var result = {
    keys: []
  };

  var thisKey;
  keys.forEach(key => {
    thisKey = data[key][0].A; // json的key名
    result.keys.push({
      key: thisKey,
      value: key
    });
    var json = partial_824ListYxBranchProduct(data[key]);
    result[thisKey] = json;
  });
  return result;
}

module.exports = yx1111Branch;
