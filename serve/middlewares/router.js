import Router from 'koa-router'

export const router = async app => {
  const router = new Router()
  router.use(async (ctx,next)=>{
    const categories = await Category.find({}).sort('-created')
    const pathName = url.parse(ctx.request.url).pathname
    ctx.state.categories = categories
    ctx.state.pathName = pathName 
    ctx.state.moment = moment
    ctx.state.truncate = truncate
    ctx.state.user = ctx.session.user
    await next()
  })

  app.use(router.routes())
  app.use(router.allowedMethods())
}