<template>
    <div>
    <Address :addr="addr1"/>
    </div>
</template>

<script>
import Address from './Address'
export default {
  components: {
    Address
  },
  data () {
    return {
      addr1: {
        country: '中国',
        province: '广西',
        city: '桂林'
      }
    }
  }
}
</script>
