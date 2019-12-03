<template>
    <div>
        <div v-for="(a, idx) in list" v-bind:key="idx">
            * {{a}}
        </div>
        <hr/>
        <div v-for="(a, ids) in list" v-bind:key="ids">
            * <input v-model="list[ids]">
        </div>
        两个列表都绑定到了data的“list”成员
    </div>
</template>

<script>
export default {
  data () {
    return {
      list: ['第一个', '第二个', '第三个']
    }
  }
}
</script>
