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
      <div class="main-page">
        <section class="profile">
          <h2 class="name">{{resume.name}}</h2>
          <h5 class="job">{{resume.jobTitle}}</h5>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youjian"></use>
              </svg>
              <span>{{resume.email}}</span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xingbie"></use>
              </svg>
              <span>{{resume.gender}}</span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
              </svg>
              <span>{{resume.phone}}</span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xueli"></use>
              </svg>
              <span>{{resume.education}}</span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dizhi"></use>
              </svg>
              <span>{{resume.address}}</span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
              </svg>
              <span>{{resume.birthday}}</span>
            </div>
          </div>
        </section>
        <section class="skills">
          <h3>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-skills"></use>
            </svg>
            个人技能
          </h3>
          <ul>
            <li v-for="skill in resume.skills">
              <div class="skillName">
                <span>{{skill.name}}</span>
                <star :num="skill.starNumber"></star>
              </div>
              <div class="skillDescription">
                <p>{{skill.description}}</p>
              </div>
            </li>
          </ul>
        </section>
        <section class="projects">
          <h3>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-project"></use>
            </svg>
            个人项目
          </h3>
          <ul>
            <li v-for="project in resume.projects">
              <div class="projectName">
                <span>{{project.name}}</span>
                <a :href="project.link">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tiaozhuan"></use>
                  </svg>
                </a>
              </div>
              <p class="keywords">{{project.keywords}}</p>
              <div class="description">
                <p>{{project.description}}</p>
              </div>
            </li>
          </ul>
        </section>
      </div>
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