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

request('http://substack.net/images/', function (error, response, body) {
  // if (!error && response.statusCode == 200) {
  //   console.log(body) // 
  // }
  if (error){
    throw error;
  }
  else{
    $ = cheerio.load(body);
    $('tr').each(function(i, elem){
      var permission = $(this).find('td').first().text();
      console.log(permission);
    });
  }
})