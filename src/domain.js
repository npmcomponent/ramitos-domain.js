var parse = require('component-url').parse,
    tld = require('ramitos-tld.js');
    

module.exports = function (url) {
  if(typeof url === 'string') url = parse(url);
  if(!url.hostname) return '';
  var domain = url.hostname.match(new RegExp('([a-zA-Z0-9\-]*?.' + tld(url) + ')$'));
  if(domain) return domain[1];
  else return '';
}
