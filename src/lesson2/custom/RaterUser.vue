<template>
    <div>
        <Rater :comment="component1" @rate="onRater"></Rater>
        {{msg}}
    </div>
</template>
<script>
import Rater from './Rater'
export default {
  components: {
    Rater
  },
  data () {
    return {
      component1: '飞流直下三千尺',
      msg: ''
    }
  },
  methods: {
    onRater: function (val) {
      this.msg = `打了${val}分!`
    }
  }

}
</script>
