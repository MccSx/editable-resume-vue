window.SignUp = {
  props:['resume','currentUser'],
  data() {
    return {
      signUpData:{
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
        <input type="text" name="email" placeholder="email" v-model="signUpData.email">
        <input type="password" name="password" placeholder="password" v-model="signUpData.password">
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
      user.setUsername(this.signUpData.email)
      user.setPassword(this.signUpData.password)
      user.setEmail(this.signUpData.email)
      user.set('resume', this.resume)
      user.signUp().then((user) => {
        alert('注册成功')
      }, (error) => {
        alert(error.rawMessage)
      })
    }
  }
}

Vue.component('sign-up',SignUp)