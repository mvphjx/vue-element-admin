
<template>
  <div>
    <v-pagination ref="pagination" :total="total" :current-page="current" @pagechange="pagechange" />
    <div>
      <el-button type="primary" @click="jump">跳转到第7页</el-button>
    </div>
  </div>
</template>

<script type="es6">
import pagination from '@/components/Test/PaginationHan'
export default {
  components: {
    'v-pagination': pagination
  },
  data() {
    return {
      total: 150, // 记录总条数
      display: 10, // 每页显示条数
      current: 1 // 当前的页数
    }
  },
  methods: {
    pagechange: function(currentPage) {
      console.log('监听子组件的状态：', currentPage, '，ajax请求获取翻页后数据')
    },
    jump: function() {
      // 调用子组件的方法
      this.$refs.pagination.setCurrent(7)
    }
  }
}
</script>
