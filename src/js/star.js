Vue.component('star', {
  props:['num'],
  computed:{
    number: function () {
      if (this.num < 0) {
        return 0
      } else if (this.num > 5) {
        return 5
      } else {
        return this.num
      }
    }
  },
  template:`
    <div>
      <span v-for="n in number">
        <svg class="icon" aria-hidden="true" style="fill:#1296DB">
          <use xlink:href="#icon-wujiaoxing1"></use>
        </svg>
      </span>
      <span v-for="n in (5-number)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wujiaoxing1"></use>
        </svg>
      </span>
    </div>
  `
})