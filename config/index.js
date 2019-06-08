const env = process.env.NODE_ENV || 'development'

const config = {
  production: {
    port: 8888,
    dbURL: 'mongodb://mongo/zzc-wechat-helper',
  },
  development: {
    port: 3000,
    dbURL: 'mongodb://localhost/zzc-wechat-helper',
  }
}
  
module.exports = config[env]