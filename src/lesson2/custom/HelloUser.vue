<template>
    <div>
        传入一个变量：<input type="text" v-model="n"><br/>
        <Hello :name='n'></Hello>
        <br/>

        传一个常量：小明
        <br/>
         <!-- 提示：:xxx 会被认为是表达式，字符串需要引号 -->
        <Hello :name="'小明'"></Hello>
    </div>
</template>

<script>
import Hello from './Hello'
export default {
  components: {
    Hello
  },
  data () {
    return {
      n: 'haozhihui'
    }
  }
}
</script>
