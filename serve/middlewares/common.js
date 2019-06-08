import bodyParser from 'koa-body'
import { resolve } from 'path'

const r = path => resolve(__dirname, path)

export const addBodyParser = app => {
  app.use(bodyParser({ multipart: true,formidable: { maxFileSize: 200*1024*1024 }}))
}