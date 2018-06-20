window.Page = {
  props:['resume','currentUser','logoutVisible'],
  template:`
  <div>
    <aside>
      <div class="up">
        <button @click="isLogin">登录/注册</button>
        <button @click="logout" v-show="logoutVisible.logout">登出</button>
      </div>
      <div class="down">
        <button>保存</button>
        <button>分享</button>
        <button>打印</button>
        <button>换肤</button>
      </div>          
    </aside>
    <main>
      <h2><span ref="output">{{resume.name}}</span></h2>
    </main>
  </div>
  `,
  methods:{
    isLogin() {
      let currentUser = AV.User.current()
      if (currentUser) {
      }
      else {
        this.$router.push('/login')
      }
    },
    logout() {
      AV.User.logOut()
      this.logoutVisible.logout = false
      window.location.reload()
      alert('注销成功')
    },
    saveResume() {}
  }
}

Vue.component('page',Page)