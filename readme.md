*This repository is a mirror of the [component](http://component.io) module [ramitos/domain.js](http://github.com/ramitos/domain.js). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/ramitos-domain.js`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*
# domain.js

get the domain from an url

## installation

for [component](https://github.com/component/component):

    $ component install ramitos/domain.js

for [node.js](http://nodejs.org/):

    $ npm install domain.js

## usage

with string url:

```js
var domain = require('domain.js')

domain('http://www.example.co.uk') //=> example.co.uk
```

with parsed url:

```js
var domain = require('domain.js'),
    url = require('url')

domain(url.parse('http://www.example.co.uk')) //=> example.co.uk
```

## test [![Build Status](https://secure.travis-ci.org/ramitos/domain.js.png)](http://travis-ci.org/ramitos/domain.js)

    $ npm test

## credits

 * inspired by [URI.js](https://github.com/medialize/URI.js/)

## license

MIT