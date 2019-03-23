
<template>
  <v-pagination :total="total" :current-page="current" @pagechange="pagechange" />
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
      console.log(currentPage)
      // ajax请求, 向后台发送 currentPage, 来获取对应的数据
    }
  }
}
</script>
