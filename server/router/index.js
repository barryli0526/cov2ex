const Router = require('koa-router');
const request = require('koa2-request')
const services = require('../services');

const router = new Router()


router.get('/latest', async (ctx, next) => {
    const nodes = ctx.params.nodes
    var body = await services.fetchLatestTopics() 
    ctx.body = body
    await next
});


module.exports = router