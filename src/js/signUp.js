window.SignUp = {
  template:`
  <div class="signUp-wrapper">
    <div class="sign-up">
      <form action="" class="form">
        <input type="text" name="username">
        <input type="password" name="password">
        <button>注册</button>
        <p><span>已经有账号？<a href="#">立即登录</a></span></p>
      </form>
    </div>
  </div>
  `
}

Vue.component('sign-up',SignUp)