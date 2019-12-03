<template>
    <div>
        文本：{{x}}<br/>
        文本框：<input type="text" v-model="x"/><br/>
        两者都绑定了data的x变量!
    </div>
</template>

<script>
export default {
  data () {
    return {
      x: 'hello'
    }
  }
}
</script>
