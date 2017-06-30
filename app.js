const Koa = require('koa');
const compress = require('koa-compress');
const Router = require('koa-router');
const json = require('koa-json');
const send = require('koa-send');
const cors = require('koa-cors');

const apiRouter = require('./server/router');

const app = new Koa();

const router = new Router()

app.use(cors());
app.use(compress())
app.use(json())

router.use('/api', apiRouter.routes(), apiRouter.allowedMethods());
router.get('/*', async (ctx, next) => {
  if(ctx.path === '/'){
    ctx.path = '/index.html'
  }
  await send(ctx, ctx.path, { root: __dirname + '/app/build/' });   
})

app
  .use(router.routes())
  .use(router.allowedMethods());


app.listen(3001, function(){
  console.log("Server linstening on 3001....")
});