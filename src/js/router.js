let globalData = {
  resume:{
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
  currentUser:{}
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
        globalData.resume = resume
      })
    },
    change(data) {
      this.resume = data
    },
    addSkill(skillItem) {
      this.resume.skills.push(skillItem)
    },
    addProject(projectItem) {
      this.resume.projects.push(projectItem)
    },
    removeSkill(index) {
      console.log(1)
      console.log(index)
      console.log(2)
      this.resume.skills.splice(index, 1)
      console.log(3)
    },
    removeProject(index) {
      this.resume.projects.splice(index, 1)
    },
    changeLight(bol) {
      console.log(bol)
      this.resume.isSkinChange = bol
    },
    changeDark(bol) {
      console.log(bol)
      this.resume.isSkinChange = bol
    }
  }
})

let currentUser = AV.User.current()
if (currentUser) {
  globalData.currentUser = currentUser.toJSON()
  getResume(currentUser.toJSON()).then((resume) => {
    globalData.resume = resume
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