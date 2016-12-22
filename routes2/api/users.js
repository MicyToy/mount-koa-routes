var router = require('koa-router')();

router.get('/', function (ctx, next) {
  ctx.body = 'this a users response!';
});

// url:api/user2
router.get('2', function (ctx, next) {
  ctx.body = 'this a users response! 2';
});

// url:api/user/2
router.get('/2', function (ctx, next) {
  ctx.body = 'this a users response! /2';
});

module.exports = router;
