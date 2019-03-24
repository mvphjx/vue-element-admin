/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 一些学习&测试的页面demo
const testRouter = {
  path: '/test',
  component: Layout,
  redirect: 'noredirect',
  name: 'test',
  meta: {
    title: '学习总结测试',
    icon: 'lock',
    roles: ['admin'] // you can set roles in root nav
  },
  children: [
    {
      path: 'countUp',
      component: () => import('@/views/test/countUp.vue'),
      name: 'countUp',
      meta: { title: 'countUp', icon: 'dashboard', noCache: true }
    },
    {
      path: 'pagination',
      component: () => import('@/views/test/PaginationHan'),
      name: 'pagination',
      meta: { title: '分页组件', icon: 'dashboard', noCache: true }
    }
  ]
}
export default testRouter
