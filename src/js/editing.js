Vue.component('edit-message', {
  props:['isActive','message'],
  template:`
  <span class="edit-content" :class="{active: isActive}">
    <textarea name="" rows="1" wrap="off" v-model="message" @input="input"></textarea>
  </span>
  `,
  methods:{
    input() {
      this.$emit('input',this.message)
    }
  }
})