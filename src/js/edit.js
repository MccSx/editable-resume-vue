Vue.component('edit-span', {
  props:['message'],
  data() {
    return {
      isActive: false
    }
  },
  template:`
  <span class="edit-wrapper">
    <span class="edit" :class="{active: isActive}" @click.prevent='edit'>编辑</span>
    <span class="messageName">{{message}}</span>
    <edit-message :isActive="isActive" :message="message" @input="changeMessage"></edit-message>
  </span>
  `,
  methods:{
    edit() {
      this.isActive = !this.isActive
    },
    changeMessage(message) {
      this.$emit('changeMessage', message)
    }
  }
})