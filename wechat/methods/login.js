
const onLogin = async user => {
  console.log(`用户${user.payload.name}成功登陆`)
}

module.exports = onLogin