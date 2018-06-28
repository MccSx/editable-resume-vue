Vue.component('skin-change', {
  template: `
  <div class="skin-wrapper">
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
  `,
  methods: {
    changeLight() {
      this.$emit('change-light')
    },
    changeDark() {
      this.$emit('change-dark')
    },
    removeSkinchange() {
      this.$emit('remove-skin-change')
      // this.skinVisible = false
    },
  }
})