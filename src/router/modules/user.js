/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'

const userRouter = {
  path: '/user',
  component: Layout,
  redirect: 'noredirect',
  name: 'user',
  meta: {
    title: 'usermenu',
    icon: 'lock',
    roles: ['admin'] // you can set roles in root nav
  },
  children: [
    {
      path: 'usermgr',
      component: () => import('@/views/abispage/user/usermgr'),
      name: 'usermgr',
      meta: { title: 'usermgr', icon: 'dashboard', noCache: true }
    },
    {
      path: 'classmgr',
      component: () => import('@/views/abispage/user/classmgr'),
      name: 'classmgr',
      meta: { title: 'classmgr', icon: 'dashboard', noCache: true }
    },
    {
      path: 'rolemgr',
      component: () => import('@/views/abispage/user/rolemgr'),
      name: 'rolemgr',
      meta: { title: 'rolemgr', icon: 'dashboard', noCache: true }
    },
    {
      path: 'trainmgr',
      component: () => import('@/views/abispage/user/trainmgr'),
      name: 'trainmgr',
      meta: { title: 'trainmgr', icon: 'dashboard', noCache: true }
    }
  ]
}
export default userRouter
