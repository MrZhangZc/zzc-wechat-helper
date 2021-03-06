import mongoose from 'mongoose'
import { dbURL } from '../../config'
import glob from 'glob'
import { join } from 'path'
import { log } from '../../util'

mongoose.Promise = global.Promise
glob.sync(join(__dirname, '../app/model', '**/*.js')).forEach(require)

export const mongo = () => {
  if(process.env.NODE_ENV === 'development'){
    mongoose.set('debug', true)
  }

  mongoose.connect(dbURL, { useNewUrlParser: true })

  mongoose.connection.on('disconnected', () => {
      mongoose.connect(dbURL, { useNewUrlParser: true })
  })

  mongoose.connection.on('err', err => {
    log(500, '连接数据库出错', 'zzcwechathelp')
  })

  mongoose.connection.on('open', async () => {
    log(300, '数据库成功链接', 'zzcwechathelp')
  })
}