var formidable = require('formidable');
var path = require('path');

var excelToJson = require('convert-excel-to-json');
var fs = require('fs');
var parsers = require('./parsers');

module.exports = function(req, res, next) {
  var form = new formidable.IncomingForm();
  form.uploadDir = path.join(__dirname, 'temp');
  form.parse(req, function(err, fields, files) {
    if (err) {
      res.send(err);
    } else {
      try {
        const data = excelToJson({
          sourceFile: files.file.path,
          header: {
            rows: 1
          }
        });
        
        var result = parsers[fields.type](data);
        var listName = fields.type == 'buyerShow' ? 'list' : 'data'; //此处之前写死了 懒得改了..
        var json = { 'status': 1, [listName]: result };
        res.setHeader('Content-Description', 'File Transfer');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename='+ fields.type +'.json');
        res.setHeader('Expires', '0');
        res.setHeader('Cache-Control', 'must-revalidate');
        console.log(fields.type);
        if (fields.type === 'tb11') {
          res.setHeader('Content-Disposition', 'attachment; filename='+ fields.type +'.js');
          res.send(result);
        } else {
          res.setHeader('Content-Disposition', 'attachment; filename='+ fields.type +'.json');
          res.send(json);
        }
      } catch (e) {
        console.log(e);
        res.send('格式不正确,请再试');
      } finally {
        // 删除文件
        fs.unlink(files.file.path);
      }
    }
  });
}
