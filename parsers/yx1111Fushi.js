var partial_824ListYxBranchProduct = require('./partial_ListYxBranchProduct');

function yx1111Branch(data) {
  var keys = Object.keys(data);
  var result = {
    keys: keys
  };
  var thisKey;
  console.log();
  keys.forEach(key => {
    thisKey = data[key][0].A; // json的key名
    var json = partial_824ListYxBranchProduct(data[key]);
    result[thisKey] = json;
  });
  return result;
}

module.exports = yx1111Branch;
