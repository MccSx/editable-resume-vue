Vue.component('edit-span', {
  props:['message'],
  template:`
  <span class="edit-wrapper">
    <span class="edit" @click='edit'>编辑</span>{{message}}
    <edit-input></edit-input>
  </span>
  `,
  methods:{
    edit() {
      console.log(1)
    }
  }
})