
var express = require('express');
var fs      = require('fs');
var request = require('request');
var cheerio = require('cheerio');
var app     = express();

app.get('/scrape', function(req, res) {

  url = 'http://www.imdb.com/title/tt1229340/';

  request(url, function(error, response, html) {
    if (!error) {
      var $ = cheerio.load(html);
      var title,
          rlease,
          rating;
      var json = { title: '', release: '', rating: ''};
    }
  })

})

app.listen('8081')

console.log('Server strated on 8081');

exports = module.exports = app;
