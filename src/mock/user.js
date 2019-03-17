import Mock from 'mockjs'
import { param2Obj } from '@/utils'

const List = []
const count = 100
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    userName: '@string("lower", 5, 20)',
    roleName: '@string("lower", 5, 20)',
    'status|1': ['published', 'draft', 'deleted'],
    createTime: +Mock.Random.date('T'),
    createUser: '@string("lower", 5, 20)'
  }))
}

export default {
  getList: config => {
    const { userName, roleName, page = 1, limit = 20, sort } = param2Obj(config.url)

    let mockList = List.filter(item => {
      if (userName && item.userName.indexOf(userName) < 0) return false
      if (roleName && item.roleName.indexOf(roleName) < 0) return false
      return true
    })

    if (sort === '-id') {
      mockList = mockList.reverse()
    }

    const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))

    return {
      total: mockList.length,
      items: pageList
    }
  },
  getPv: () => ({
    pvData: [{ key: 'PC', pv: 1024 }, { key: 'mobile', pv: 1024 }, { key: 'ios', pv: 1024 }, { key: 'android', pv: 1024 }]
  }),
  getUser: (config) => {
    const { id } = param2Obj(config.url)
    for (const article of List) {
      if (article.id === +id) {
        return article
      }
    }
  },
  createUser: () => ({
    data: 'success'
  }),
  updateUser: () => ({
    data: 'success'
  })
}
