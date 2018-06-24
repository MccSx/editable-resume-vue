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
          <h2 class="name"><edit-span :message="resume.name" @changeMessage="change('name', $event)"></edit-span></h2>
          <h5 class="job"><edit-span :message="resume.jobTitle" @changeMessage="change('jobTitle', $event)"></edit-span></h5>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youjian"></use>
              </svg>
              <span><edit-span :message="resume.email" @changeMessage="change('email', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xingbie"></use>
              </svg>
              <span><edit-span :message="resume.gender" @changeMessage="change('gender', $event)"></edit-span></span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
              </svg>
              <span><edit-span :message="resume.phone" @changeMessage="change('phone', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xueli"></use>
              </svg>
              <span><edit-span :message="resume.education" @changeMessage="change('education', $event)"></edit-span></span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dizhi"></use>
              </svg>
              <span><edit-span :message="resume.address" @changeMessage="change('address', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
              </svg>
              <span><edit-span :message="resume.birthday" @changeMessage="change('birthday', $event)"></edit-span></span>
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
            <li v-for="(skill,index) in resume.skills">
              <div class="skillName">
                <div class="skillMessage"><edit-span :message="skill.name" @changeMessage="change(['skills',index,'name'], $event)"></edit-span></div>
                <star :num="skill.starNumber" @changeStar="change(['skills',index,'starNumber'], $event)"></star>
              </div>
              <div class="skillDescription">
                <p><edit-span :message="skill.description" @changeMessage="change(['skills',index,'description'], $event)"></edit-span></p>
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
            <li v-for="(project,index) in resume.projects">
              <div class="projectName">
                <span><edit-span :message="project.name" @changeMessage="change(['projects',index,'name'], $event)"></edit-span></span>
                <a :href="project.link">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tiaozhuan"></use>
                  </svg>
                </a>
              </div>
              <p class="keywords"><edit-span :message="project.keywords" @changeMessage="change(['projects',index,'keywords'], $event)"></edit-span></p>
              <div class="description">
                <p><edit-span :message="project.description" @changeMessage="change(['projects',index,'description'], $event)"></edit-span></p>
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
    saveResume() {},
    change(key,message) {
      if (typeof key === 'string') {
        this.resume[key] = message
      } else if(typeof key === 'object') {
        this.resume[key[0]][key[1]][key[2]] = message
      }
      this.$emit('change', this.resume)
    }
  }
}

Vue.component('page',Page)