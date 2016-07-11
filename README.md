

Format koa's respond json.

## Installation

```sh
$ npm install koa-body-res
```

## Use with koa

```js
var app = require('koa')();
var koaRes = require('koa-body-res');
app.use(koaRes());

this.data = 'This is a body';
this.msg = 'This is a msg';

output

this.body = {
	code: 200,
	data: 'This is a body',
	msg: 'This is a msg'
}

```
作者官网:
http://www.wemallshop.com