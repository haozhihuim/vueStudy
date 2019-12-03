// 请先安装依赖： cnpm install mockjs --save
import Mock from 'mockjs'

// 是否使用 mock
var doMock = true

let list = [{
  'id': 0,
  'name': '张三',
  'tel': '123123'
}, {
  'id': 1,
  'name': '李四',
  'tel': '234234'
}, {
  'id': 2,
  'name': 'sss',
  'tel': '234234'
}]
let maxId = 1

if (doMock) {
  Mock.mock(/\/api\/hello/, 'get', ({ url, type, body }) => {
    return 'hello from mock'
  })

  Mock.mock(/\/api\/search/, 'get', ({ url }) => {
    const searchParams = url.split('?')[1]
    const params = searchParams
      ? Object.fromEntries(new URLSearchParams(searchParams))
      : {}
    const key = Object.keys(params)[0]
    // 如果有传入查询条件  则根据条件筛选
    if (key) {
      return list.filter(item => {
        return item[key].indexOf(params[key]) !== -1
      })
    }
    return list
  })

  Mock.mock(/\/api\/delete/, 'post', ({ url, type, body }) => {
    let id = JSON.parse(body).id
    // 根据 id 删除指定元素
    return list.filter(item => item.id !== id)
  })

  Mock.mock(/\/api\/getList/, 'get', ({ url, type, body }) => {
    return list
  })

  Mock.mock(/\/api\/edit/, 'post', ({ url, type, body }) => {
    let { id, name, tel } = JSON.parse(body)
    list.forEach(function (item) {
      if (item.id === id) {
        item.name = name
        item.phone = tel
      }
    })
  })
  Mock.mock(/\/api\/new/, 'post', ({ url, type, body }) => {
    let { name, tel } = JSON.parse(body)
    maxId++
    list.push({
      id: maxId,
      name,
      tel
    })

    // 可以在console看到当前list情况
    console.log(list)
  })
}
