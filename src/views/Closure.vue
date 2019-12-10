<template>
    <div>
        <Button type="primary" @click="f1()">演示闭包</Button>
        <Button type="primary" @click="defineProperty()">Object.defineProperty()</Button>
        <Button type="primary" @click="defineProperties()">Object.defineProperties()</Button>
        <Button type="primary" @click="showAvatar()">showAvatar演示</Button>
    </div>
</template>

<script>
export default {
  data () {
    return ({
    })
  },
  methods: {
    f1 () {
      console.log('演示闭包')
      var n = 999
      console.log('n :', n)
      function aAdd () {
        n += 1
      }
      function f2 () {
        alert(n)
      }
      f2()
      console.log('n :', n)
      aAdd()
      console.log('n :', n)
      f2()
      aAdd()
      console.log('n :', n)
    },
    defineProperty () {
      // eslint-disable-next-line no-new-object
      var obj = new Object()

      Object.defineProperty(obj, 'name', {
        configurable: false,
        writable: true,
        enumerable: true,
        value: '张三'
      })

      console.log('defineProperty演示:', obj.name)
    },
    defineProperties () {
      // eslint-disable-next-line no-new-object
      var obj = new Object()

      Object.defineProperties(obj, {
        name: {
          value: '张三',
          configurable: false,
          writable: true,
          enumerable: true
        },
        age: {
          value: 18,
          configurable: true
        }
      })
      console.log('defineProperties:演示 ', obj.name, obj.age)
    },
    async  showAvatar () {
      let user = {
        name: 'vue-course'
      }
      // 读取 github 用户信息
      let githubResponse = await fetch(`https://api.github.com/users/${user.name}`)
      let githubUser = await githubResponse.json()

      // 显示头像
      let img = document.createElement('img')
      img.src = githubUser.avatar_url
      img.className = 'promise-avatar-example'
      document.body.append(img)
      // 等待 3 秒
      await new Promise((resolve, reject) => setTimeout(resolve, 3000))

      img.remove()
    }

  }
}
</script>
