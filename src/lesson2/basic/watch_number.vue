<template>
    <div>
        a <input type="text" v-model="o.a"/>
        b = a * 10 = <span>{{b}}</span>
        <br/>
        这里演示：用Watch监听a 的变化，并触发b的变化
    </div>
</template>
<script>
export default {
  data () {
    return {
      o: {
        a: '1'
      },
      b: '10'
    }
  },
  watch: {
    // key是字符串，可以设置为 'o.a'，表示监听 this.o.a 的变化
    'o.a': function (newVal, oldVal) {
      this.b = parseInt(this.o.a) * 10
    }
  }
}
</script>
