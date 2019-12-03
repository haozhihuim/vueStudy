<template>
    <div>
        a <input type="text" v-model="a"/><br/>
        b <input type="text" v-model="b"/><br/>
        c = a + b = <span>{{c}}</span>
        这里演示使用watch监听a, b的变化，然后跟新c
    </div>
</template>
<script>
export default {
  data () {
    return {
      a: '1',
      b: '2',
      c: '3'
    }
  },
  watch: {
    // 提示：这里用两个watch来实现此功能并不科学，更合适的方式是computed
    'a': function (newVal, oldVal) {
      this.c = parseInt(this.a) + parseInt(this.b)
    },
    'b': function (newVal, oldVal) {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>
