let APP_ID = 'gqfkWWD5iSM3WtC9EMlRHohd-gzGzoHsz'
let APP_KEY = 'Ns87UicdeFTykmbPx4Q85P4t'

AV.init({
  appId: APP_ID,
  appKey: APP_KEY
})

//  // 新建 AVUser 对象实例
//  var user = new AV.User();
//  // 设置用户名
//  user.setUsername('Tom');
//  // 设置密码
//  user.setPassword('cat!@#123');
//  // 设置邮箱
//  user.setEmail('tom@leancloud.cn');
//  user.signUp().then(function (loggedInUser) {
//      console.log(loggedInUser);
//  }, function (error) {
//  })