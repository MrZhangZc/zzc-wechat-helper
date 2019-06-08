import { Wechaty } from 'wechaty'
import { onScan, onLogin } from './methods'

const bot = new Wechaty({ name: 'zzc-wechat-helper' })

bot.on('scan', onScan)
bot.on('login', onLogin)
bot.start()
  .then(() => { console.log('开始登陆微信') })
  .catch(e => console.error(e))