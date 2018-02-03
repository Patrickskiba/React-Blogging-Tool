const router = new (require('koa-router'))()
const app = new (require('koa'))()
const db = require('./db.json')

router.get('/images', (ctx) => { ctx.body = db['hits'] })

router.get('/images/:index', (ctx) => { ctx.body = db['hits'][ctx.params.index] })

app.use(router.routes()).use(router.allowedMethods())
const server = app.listen(3000)
console.log(server)
console.log('listening on port 3000')
