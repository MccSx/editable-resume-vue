window.Login = {
  template:`
  <div class="login-wrapper">
    <div class="login">
      <form action="" class="form">
        <input type="text" name="username">
        <input type="password" name="password">
        <button>登录</button>
        <p><span>还没有账号？<a href="#">立即注册</a></span></p>
      </form>
    </div>
  </div>
  `
}

Vue.component('login',Login)