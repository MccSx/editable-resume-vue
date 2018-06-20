let globalData = {
  resume:{
    name:'姓名'
  },
  currentUser:{},
  // logoutVisible:true
  logoutVisible: {logout: true}
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
  data:globalData
})