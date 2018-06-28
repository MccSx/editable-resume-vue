let globalData = {
  displayResume:{
    name: '姓名',
    isSkinChange:false,
    jobTitle: '前端工程师',
    birthday: '1990.1.1',
    email: 'xxx@163.com',
    address:'江苏省xxx市xxx区xxx街xxx号',
    education:'本科',
    gender: '男性',
    phone: '123-1234-1234',
    skills: [
      {name: '请填写技能名称', starNumber:4, description: '请在这里填写技能描述，例如：会使用html和css技能1:1还原设计图'},
      {name: '请填写技能名称', starNumber:5, description: '请在这里填写技能描述，例如：会使用html和css技能1:1还原设计图'},
      {name: '请填写技能名称', starNumber:3, description: '请在这里填写技能描述，例如：会使用html和css技能1:1还原设计图'},
      {name: '请填写技能名称', starNumber:4, description: '请在这里填写技能描述，例如：会使用html和css技能1:1还原设计图'}
    ],
    projects: [
      {name: '请填写项目名称', link: '你的项目链接', keywords: '请填写关键词', description: '请在这里填写详细描述，例如：我这个项目有哪些功能，遇到哪些问题，怎样去解决'},
      {name: '请填写项目名称', link: '你的项目链接', keywords: '请填写关键词', description: '请在这里填写详细描述，例如：我这个项目有哪些功能，遇到哪些问题，怎样去解决'},
      {name: '请填写项目名称', link: '你的项目链接', keywords: '请填写关键词', description: '请在这里填写详细描述，例如：我这个项目有哪些功能，遇到哪些问题，怎样去解决'},
      {name: '请填写项目名称', link: '你的项目链接', keywords: '请填写关键词', description: '请在这里填写详细描述，例如：我这个项目有哪些功能，遇到哪些问题，怎样去解决'}
    ]
  },
  currentUser: {},
  previewResume: {},
  shareLink: '',
  mode: 'edit'
}

const routes = [
  {path:'/', component: window.Page, props:globalData},
  {path:'/login', component: window.Login, props:globalData},
  {path:'/signUp', component: window.SignUp, props:globalData}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  el: '#page',
  data:globalData,
  methods:{
    onLogin(user) {
      this.currentUser = user
      getResume(user).then((resume) => {
        globalData.displayResume = resume
      })
    },
    change(data) {
      this.displayResume = data
    },
    addSkill(skillItem) {
      this.displayResume.skills.push(skillItem)
    },
    addProject(projectItem) {
      this.displayResume.projects.push(projectItem)
    },
    removeSkill(index) {
      console.log(1)
      console.log(index)
      console.log(2)
      this.displayResume.skills.splice(index, 1)
      console.log(3)
    },
    removeProject(index) {
      this.displayResume.projects.splice(index, 1)
    },
    changeLight(bol) {
      console.log(bol)
      this.displayResume.isSkinChange = bol
    },
    changeDark(bol) {
      console.log(bol)
      this.displayResume.isSkinChange = bol
    }
  }
})

let currentUser = AV.User.current()
if (currentUser) {
  globalData.currentUser = currentUser.toJSON()
  globalData.shareLink = location.origin + location.pathname + '?user_id=' + globalData.currentUser.objectId
  // console.log(globalData.shareLink)
  getResume(currentUser.toJSON()).then((resume) => {
    globalData.displayResume = resume
  })
}

let search = location.search
let reg = /user_id=([^&]+)/
let matches = search.match(reg)
let userId
if (matches) {
  userId = matches[1]
  getResume({objectId: userId}).then((resume) => {
    globalData.displayResume = resume
  })
}

function getResume(user) {
  let query = new AV.Query('User')
  return query.get(user.objectId).then((user) => {
    return user.toJSON().resume
  }, (error) => {
    console.log(error)
  })
}