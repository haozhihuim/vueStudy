<template>
    <div>
        a <input type="text" v-model="o.a"/><br/>
        b <input type="text" v-model="o.b"/>
        c = a + b = <span>{{c}}</span>
    </div>
</template>
<script>
export default {
  data () {
    return {
      o: {
        a: '1',
        b: '2'
      },
      c: '3'
    }
  },
  watch: {
    // 因为设置了deep: true, this.o / this.o.a / this.o.b 变化，都会导致 handler 被触发
    'o': {
      handler: function (newVal, oldVal) {
        this.c = parseInt(this.o.a) + parseInt(this.o.b)
      },
      deep: true
    }
  }
}
</script>
