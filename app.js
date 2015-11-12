// var http = require('http');

// var options = {
//   host: 'http://substack.net',
//   path: '/images/'
// };

// callback = function(response){
//   var str = '';

//   response.on('data', function(temp){
//     str += temp;
//   });

//   response.on('end', function(){
//     console.log(str);
//   });


// }

// http.request(options, callback).end();

var fs = require('fs');
var cheerio = require('cheerio');
var request = require('request');
var csv = require('csv-write-stream');
var path = require('path');

request('http://substack.net/images/', function (error, response, body) {
  // if (!error && response.statusCode == 200) {
  //   console.log(body) // 
  // }
  if (error){
    throw error;
  }
  else{
    $ = cheerio.load(body);
    $('tr').each(function(index, element){
      var file_permission = $(this).find('td').first().text();
      var absolute_url = $(this).find('td:nth-child(3)').find('a').attr('href');
      var file_type = path.extname($(this).find('td:nth-child(3)').text());
      console.log(file_permission);
      console.log(absolute_url);
      console.log(file_type);
    });
  }
})