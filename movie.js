'use strict'


 function get(movieTitle) {
	const request = require('request');
	const apiKey = require("./env");
	const apiId = require("./inv");
    const apiUrl = "https://www.googleapis.com/customsearch/v1?key="+apiKey+"&cx="+apiId+"&q="+movieTitle+"+movie";
    request(apiUrl, function (error, response, body) {
        if (error) throw (error);
        console.log(JSON.parse(body).items[0].title);
    });
 };

module.exports = get;