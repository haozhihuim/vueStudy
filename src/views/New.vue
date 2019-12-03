<template>
  <div class="new-creat">
    <h1>新增</h1>
    <div>姓名<Input v-model="name" /></div>
    <div>电话<Input v-model="tel" /></div>
    <Button @click="submit">提交</Button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      name: '',
      tel: ''
    }
  },
  methods: {
    submit () {
      // 演示调试手段
      // debugger // eslint-disable-line
      // let o = {a:{b:1, c:2}, d:'hello'}
      // console.log(o)
      axios.request({
        method: 'POST',
        url: '/api/new',
        headers: {
          'Content-Type': 'application/json'
        },
        data: JSON.stringify({
          name: this.name,
          tel: this.tel
        })
      }).then((res) => {
        // 200
        alert('新增成功!')
        this.name = ''
        this.tel = ''
      }).catch((err) => {
        alert('失败：' + err)
      })
    }
  }
}
</script>

<style lang="scss">
.new-creat {
    div {
        line-height: 30px;
        margin-bottom: 15px;
        .ivu-input-wrapper {
            width: 300px;
            display: inline-block;
            margin-left: 5px;
        }
    }
}
</style>
