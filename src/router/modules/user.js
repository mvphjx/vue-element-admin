/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'user',
  meta: {
    title: '用户管理',
    icon: 'lock',
    roles: ['admin'] // you can set roles in root nav
  },
  children: [
    {
      path: 'usermgr',
      component: () => import('@/views/abispage/user/usermgr'),
      name: 'usermgr',
      meta: { title: '人员管理', icon: 'dashboard', noCache: true }
    },
    {
      path: 'classmgr',
      component: () => import('@/views/abispage/user/classmgr'),
      name: 'classmgr',
      meta: { title: '班级管理', icon: 'dashboard', noCache: true }
    },
    {
      path: 'rolemgr',
      component: () => import('@/views/abispage/user/rolemgr'),
      name: 'rolemgr',
      meta: { title: '角色管理', icon: 'dashboard', noCache: true }
    },
    {
      path: 'countUp',
      component: () => import('@/views/components-demo/countUp.vue'),
      name: 'countUp',
      meta: { title: '组件测试', icon: 'dashboard', noCache: true }
    },
    {
      path: 'trainmgr',
      component: () => import('@/views/abispage/user/trainmgr'),
      name: 'trainmgr',
      meta: { title: '学员培训情况', icon: 'dashboard', noCache: true }
    }
  ]
}
export default userRouter
