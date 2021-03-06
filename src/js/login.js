window.Login = {
  props:['currentUser'],
  data() {
    return {
      loginData:{
        email:'',
        password:''
      }
    }
  },
  template:`
  <div class="login-wrapper">
    <div class="login">
      <button class="icon" @click="toIndex">X</button>
      <form action="" class="form" @submit.prevent="onSignUp">
        <h2>登录</h2>
        <input type="text" name="email" placeholder="email" v-model="loginData.email">
        <input type="password" name="password" placeholder="password" v-model="loginData.password">
        <button>登录</button>
        <p><span>还没有账号？<router-link to="/signUp">立即注册</router-link></span></p>
      </form>
    </div>
  </div>
  `,
  methods: {
    toIndex() {
      this.$router.push('/')
    },
    onSignUp() {
      AV.User.logIn(this.loginData.email, this.loginData.password).then((user) => {
        let currentUser = user.toJSON()
        this.$emit('login', currentUser)
        this.toIndex()
      }, (error) => {
        if (error.code === 211) {
          alert('邮箱不存在')
        } else if (error.code === 210) {
          alert('邮箱和密码不匹配')
        }
      })
    }
  }
}

Vue.component('login',Login)