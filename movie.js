'use strict'


 function get(movieTitle) {
	const request = require('request');
	const apiKey = require("./env");
	const apiId = require("./inv");
    const apiUrl = "https://www.googleapis.com/customsearch/v1?key="+apiKey+"&cx="+apiId+"&q="+movieTitle+"+movie";

    request(apiUrl, function (error, response, body) {
        var parsedBody = JSON.parse(body).items[1].snippet;
		console.log(parsedBody);
    });
 };

module.exports = get;
