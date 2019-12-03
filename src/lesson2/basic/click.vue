<template>
    <div>
        <input type="text" v-model="a"/> +
        <input type="text" v-model="b"/>
        <input type="button" value="=" @click="onClick"/> {{c}}
        <br/>
        点击等于号，计算两个数字的和
    </div>
</template>

<script>
export default {
  data () {
    return {
      a: '1',
      b: '2',
      c: ''
    }
  },
  methods: {
    onClick: function () {
      this.c = parseInt(this.a) + parseInt(this.b)
    }
  }
}
</script>
