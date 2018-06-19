window.SignUp = {
  data() {
    return {
      loginData:{
        email:'',
        password:''
      }
    }
  },
  template:`
  <div class="signUp-wrapper">
    <div class="sign-up">
      <button class="icon" @click="toIndex">X</button>
      <form action="" class="form" @submit.prevent="onLogin">
        <h2>注册</h2>
        <input type="text" name="email" placeholder="email" v-model="loginData.email">
        <input type="password" name="password" placeholder="password" v-model="loginData.password">
        <button>注册</button>
        <p><span>已经有账号？<router-link to="/login">立即登录</router-link></span></p>
      </form>
    </div>
  </div>
  `,
  methods: {
    toIndex() {
      this.$router.push('/')
    },
    onLogin() {
      var user = new AV.User();
      user.setUsername(this.loginData.email)
      user.setPassword(this.loginData.password)
      user.setEmail(this.loginData.email)
      user.signUp().then((user) => {
        alert('注册成功')
      }, (error) => {
        alert(error.rawMessage)
      })
    }
  }
}

Vue.component('sign-up',SignUp)