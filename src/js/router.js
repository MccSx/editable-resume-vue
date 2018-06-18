const routes = [
  {path:'/', component: window.Page},
  {path:'/login', component: window.Login},
  {path:'/signUp', component: window.SignUp}
]

const router = new VueRouter({
  routes
})

const app = new Vue({
  router,
  el: '#page'
})