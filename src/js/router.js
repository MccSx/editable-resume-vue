let globalData = {
  resume:{
    name: '姓 名',
    jobTitle: '前端工程师',
    birthday: '1990.1.1',
    email: 'xxx@163.com',
    address:'江苏省xxx市xxx区xxx街xxx号',
    education:'本科',
    gender: '男',
    phone: '12312341234',
    skills: [
      {name: '技能名称', starNumber:4, description: '请填写技能描述请填写技能描述请填写技能描述'},
      {name: '技能名称', starNumber:5, description: '请填写技能描述请填写技能描述请填写技能描述'},
      {name: '技能名称', starNumber:3, description: '请填写技能描述请填写技能描述请填写技能描述'},
      {name: '技能名称', starNumber:4, description: '请填写技能描述请填写技能描述请填写技能描述'}
    ],
    projects: [
      {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},
      {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},
      {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'},
      {name: '请填写项目名称', link: 'http://...', keywords: '请填写关键词', description: '请详细描述'}
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
    onLogin(data) {
      this.currentUser = data
    }
  }
})

let currentUser = AV.User.current()
if (currentUser) {
  globalData.currentUser = currentUser.toJSON()
}