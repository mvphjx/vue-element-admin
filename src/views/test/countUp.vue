<template>

  <div>
    <div>
      <countTo ref="child" :start="start" :end="end" :duration="3000" />
    </div>
    <div>
      <el-button type="primary" @click="reStart">再来一次</el-button>
    </div>

  </div>

</template>

<script>
import countTo from '@/components/test/CountUp'
export default {
  components: { countTo },
  data() {
    return {
      start: 0,
      end: 2019
    }
  },
  methods: {
    reStart() {
      console.log('this.start', this.start)
      this.start = 0
      console.log(countTo)
      console.log(this.$refs.child)
      // 调用子组件的方法
      this.$refs.child.initCountUp()
      // countTo.initCountUp()
    }
  }
}
</script>
