window.Page = {
  props:['displayResume','currentUser','shareLink'],
  data() {
    return {
      skinVisible: false,
      shareVisible: false
    }
  },
  template:`
  <div :class="{dark: displayResume.isSkinChange}">
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
          <li @click="saveResume">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon--"></use>
            </svg>
            保存
          </li>
          <li @click="share">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-fenxiang"></use>
            </svg>
            分享
          </li>
          <li @click="print">
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-pdf"></use>
            </svg>
            打印
          </li>
          <li @click="skinChange">
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
          <h2 class="name"><edit-span :message="displayResume.name" @changeMessage="change('name', $event)"></edit-span></h2>
          <h5 class="job"><edit-span :message="displayResume.jobTitle" @changeMessage="change('jobTitle', $event)"></edit-span></h5>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-youjian"></use>
              </svg>
              <span><edit-span :message="displayResume.email" @changeMessage="change('email', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xingbie"></use>
              </svg>
              <span><edit-span :message="displayResume.gender" @changeMessage="change('gender', $event)"></edit-span></span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-shouji"></use>
              </svg>
              <span><edit-span :message="displayResume.phone" @changeMessage="change('phone', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-xueli"></use>
              </svg>
              <span><edit-span :message="displayResume.education" @changeMessage="change('education', $event)"></edit-span></span>
            </div>
          </div>
          <div class="row">
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-dizhi"></use>
              </svg>
              <span><edit-span :message="displayResume.address" @changeMessage="change('address', $event)"></edit-span></span>
            </div>
            <div>
              <svg class="icon" aria-hidden="true">
                <use xlink:href="#icon-rili"></use>
              </svg>
              <span><edit-span :message="displayResume.birthday" @changeMessage="change('birthday', $event)"></edit-span></span>
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
            <li v-for="(skill,index) in displayResume.skills">
              <div class="skillName">
                <div class="skillMessage"><edit-span :message="skill.name" @changeMessage="change(['skills',index,'name'], $event)"></edit-span></div>
                <star :num="skill.starNumber" @changeStar="change(['skills',index,'starNumber'], $event)"></star>
              </div>
              <div class="skillDescription">
                <p><edit-span :message="skill.description" @changeMessage="change(['skills',index,'description'], $event)"></edit-span></p>
              </div>
              <button class="remove" @click="removeSkill(index)">×</button>
            </li>
          </ul>
          <div class="add"><button @click="addSkill">+</button</div>
        </section>
        <section class="projects">
          <h3>
            <svg class="icon" aria-hidden="true">
              <use xlink:href="#icon-project"></use>
            </svg>
            个人项目
          </h3>
          <ul>
            <li v-for="(project,index) in displayResume.projects">
              <div class="projectName">
                <span><edit-span :message="project.name" @changeMessage="change(['projects',index,'name'], $event)"></edit-span></span>
                <a href="#">
                  <svg class="icon" aria-hidden="true">
                    <use xlink:href="#icon-tiaozhuan"></use>
                  </svg><edit-span :message="project.link" @changeMessage="change(['projects',index,'link'], $event)"></edit-span>
                </a>
              </div>
              <p class="keywords"><edit-span :message="project.keywords" @changeMessage="change(['projects',index,'keywords'], $event)"></edit-span></p>
              <div class="description">
                <p><edit-span :message="project.description" @changeMessage="change(['projects',index,'description'], $event)"></edit-span></p>
              </div>
              <button class="remove" @click="removeProject(index)">×</button>
            </li>
          </ul>
          <div class="add"><button @click="addProject">+</button</div>
        </section>
      </div>
    </main>
    <div class="skin-wrapper" v-show="skinVisible">
      <div class="skin">
        <div class="row">
          <input type="radio" name="name" @click="changeLight"><span>浅色</span>
        </div>
        <div class="row">
          <input type="radio" name="name" @click="changeDark"><span>深色</span>
        </div>
        <button class="change" @click="removeSkinchange">×</button>
      </div>
    </div>
    <div class="share-wrapper" v-show="shareVisible">
      <div class="share">
        <h3>你可以把下面的链接分享给面试官</h3>
        <textarea readonly>{{shareLink}}</textarea>
        <button @click="removeShare">×</button>
      </div>
    </div>
  </div>
  `,
  methods:{
    isLogin() {
      this.$router.push('/login')
    },
    logout() {
      AV.User.logOut()
      window.location.reload()
      alert('注销成功')
    },
    saveResume() {
      let {id} = AV.User.current()
      if (id) {
        let user = AV.Object.createWithoutData('User', id)
        user.set('resume', this.displayResume)
        user.save().then(() => {alert('保存成功')}, () => {alert('保存失败')})
      } else {
        alert('请先登录')
      }
    },
    change(key,message) {
      if (typeof key === 'string') {
        this.displayResume[key] = message
      } else if(typeof key === 'object') {
        this.displayResume[key[0]][key[1]][key[2]] = message
      }
      this.$emit('change', this.displayResume)
    },
    addSkill() {
      this.$emit('add-skill',{name: '请填写技能名称', starNumber:4, description: '请在这里填写技能描述，例如：会使用html和css技能1:1还原设计图'})
    },
    addProject(index) {
      this.$emit('add-project',{name: '请填写项目名称', link: '你的项目链接', keywords: '请填写关键词', description: '请在这里填写详细描述，例如：我这个项目有哪些功能，遇到哪些问题，怎样去解决'})
    },
    removeSkill(index) {
      this.$emit('remove-skill', index)
    },
    removeProject(index) {
      this.$emit('remove-project', index)
    },
    print() {
      window.print()
    },
    skinChange() {
      this.skinVisible = true
    },
    removeSkinchange() {
      this.skinVisible = false
    },
    changeLight() {
      this.$emit('change-light', false)
    },
    changeDark() {
      this.$emit('change-dark', true)
    },
    share() {
      this.shareVisible = true
    },
    removeShare() {
      this.shareVisible = false
    }
  }
}

Vue.component('page',Page)