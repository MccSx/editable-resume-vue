Vue.component('share', {
  props:['shareLink'],
  template: `
  <div class="share-wrapper">
    <div class="share">
      <h3>你可以把下面的链接分享给面试官</h3>
      <textarea readonly>{{shareLink}}</textarea>
      <button @click="removeShare">×</button>
    </div>
  </div>
  `,
  methods: {
    removeShare() {
      this.$emit('remove-share')
      // this.shareVisible = false
    }
  }
})