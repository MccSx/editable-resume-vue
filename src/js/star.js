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
    <div class="star">
      <span v-for="n in number">
        <svg class="icon active" aria-hidden="true">
          <use xlink:href="#icon-wujiaoxing1"></use>
        </svg>
      </span><span v-for="n in (5-number)">
        <svg class="icon" aria-hidden="true">
          <use xlink:href="#icon-wujiaoxing1"></use>
        </svg>
      </span><edit-span :message="num + '分(1-5分)'" @changeMessage="changeStar"></edit-span>
    </div>
  `,
  methods:{
    changeStar(starNumber) {
      let myStarNumber = starNumber.substring(0,1)
      if (parseInt(myStarNumber)) {
        this.$emit('changeStar', parseInt(myStarNumber))
      }
    }
  }
})