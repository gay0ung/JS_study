const url = require('url');
const querystring = require('querystring');

const parsedUrl = url.parse('http://www.abc.co.kr/?page=3&size=10&category=nodejs&category=javascript');
const query = querystring.parse(parsedUrl.query);

console.log('querystring.parse(): ',query);
console.log('querystring.stringify(): ',querystring.stringify(query));