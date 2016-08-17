'use strict';
const excelToJson = require('convert-excel-to-json');
const fs = require('fs');
const parsers = require('./parsers');

const data = excelToJson({
    sourceFile: 'buyerShow.xlsx',
    header:{
        rows: 1
    }
});

var arr = data.Sheet1;
var result = parsers.buyerShow(arr);

var json = {'status': 1, list: result};
fs.writeFile('./buyerShow.json', JSON.stringify(json), err => {
  if(err) throw err;
  console.log('success');
});