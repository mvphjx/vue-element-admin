<template>
  <span ref="countup" />
</template>

<script>
import { CountUp } from './countUp.js'
export default {
  name: 'CountupDemo',
  props: {// 接收父组件的参数
    end: {
      type: Number,
      required: true
    },
    options: {
      type: Object,
      default: function name(params) {

      },
      required: false
    }
  },
  data() {
    return {
      numAnim: null
    }
  },
  mounted() {
    this.initCountUp()
  },
  methods: {
    initCountUp() {
      this.numAnim = new CountUp(this.$refs.countup,
        this.end,
        this.options)
      this.numAnim.start()
    }
  }
}
</script>
