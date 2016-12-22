var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a /api response!';
});

// url:api2
router.get('2', function (ctx, next) {
  ctx.body = 'this a /api response! 2';
});

// url:api/2
router.get('/2', function (ctx, next) {
  ctx.body = 'this a /api response! /2';
});

module.exports = router;
