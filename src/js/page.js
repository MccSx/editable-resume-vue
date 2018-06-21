window.Page = {
  props:['resume','currentUser'],
  template:`
  <div>
    <aside>
      <div class="up">
        <ul>
          <li @click="isLogin" v-show="!currentUser.objectId">登录/注册</li>
          <li class="user" v-show="currentUser.objectId">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-yonghu"></use>
            </svg>
          </li>
        </ul>
      </div>
      <div class="down">
        <ul>
          <li @click="logout" v-show="currentUser.objectId">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-dengchu"></use>
            </svg>
            登出
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon--"></use>
            </svg>
            保存
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
            分享
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pdf"></use>
            </svg>
            打印
          </li>
          <li>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-huanfu"></use>
            </svg>
            换肤
          </li>
        </ul>
      </div>          
    </aside>
    <main>
      <h2><span ref="output">{{resume.name}}</span></h2>
    </main>
  </div>
  `,
  methods:{
    isLogin() {
      if (this.currentUser.objectId) {
        console.log(this.currentUser)
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