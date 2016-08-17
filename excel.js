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
        var arr = data[Object.keys(data)[0]];
        var result = parsers[fields.type](arr);

        var json = { 'status': 1, list: result };
        res.setHeader('Content-Description', 'File Transfer');
        res.setHeader('Content-Type', 'application/json; charset=utf-8');
        res.setHeader('Content-Disposition', 'attachment; filename='+ fields.type +'.json');
        res.setHeader('Expires', '0');
        res.setHeader('Cache-Control', 'must-revalidate');
        res.send(json);
      } catch (e) {
        res.send('格式不正确,请再试');
        return;
      } finally {
        // 删除文件
        fs.unlink(files.file.path);
      }
    }
  });
}
