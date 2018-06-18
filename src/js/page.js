window.Page = {
  data() {
    return {
      resume:{
        name:'姓名'
      }
    }
  },
  template:`
  <div>
    <aside>
      <div class="up">
        <button @click="isLogin">登录/注册</button>
        <button @click="logout">登出</button>
      </div>
      <div class="down">
        <button>保存</button>
        <button>分享</button>
        <button>打印</button>
        <button>换肤</button>
      </div>          
    </aside>
    <main>
      <h2><span>{{resume.name}}</span></h2>
    </main>
  </div>
  `,
  methods:{
    isLogin() {
      console.log(1)
      let currentUser = AV.User.current()
      console.log(2)
      console.log(currentUser)
      if (currentUser) {
        this.saveResume()
      }
      else {
        this.$router.push('/login')
      }
    },
    logout() {
      AV.User.logOut()
      window.location.reload()
      alert('注销成功')
    },
    saveResume() {}
  }
}

Vue.component('page',Page)