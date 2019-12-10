<template>
<div>
    <div>
        <Button type="primary" @click="fn.call()">点击运行fn.call()</Button>
        <Button type="primary" @click="fn.call(obj)">点击运行fn.call(obj)</Button>
        <Button type="primary" @click="fn.call(1, 2)">点击运行n.call(1, 2)</Button>
        <Button type="primary" @click="fn.call(obj, 1, 2)">点击运行fn.call(obj, 1, 2)</Button>
     </div>
     <div>
        <Button type="primary" @click="fn.bind()">点击运行fn.call()</Button>
        <Button type="primary" @click="fn.bind(obj)">点击运行fn.bind(obj)</Button>
        <Button type="primary" @click="fn.bind(10, 20)()">点击运行fn.bind(10, 20)()</Button>
        <Button type="primary" @click="fn.bind(obj, 10, 20)">点击运行fn.bind(obj, 10, 20)</Button>
    </div>
    <div>
        <Button type="primary" @click="fn.apply()">点击运行fn.pply()</Button>
        <Button type="primary" @click="fn.apply(obj)">点击运行apply(obj)</Button>
        <Button type="primary" @click="fn.apply(obj, [1,2])()">点击运行fn.bind(10, 20)()</Button>
        <Button type="primary" @click="fn.apply(obj, 10, 20)">点击运行apply(obj, [1,2])()</Button>
        <Button type="primary" @click="fn.apply(obj,[11,'apply',{a:123}])">点击运行apply(obj,[11,'apply',{a:123}])</Button>
    </div>
</div>
</template>
<script>
export default {
  data () {
    return ({
      obj: {}
    })
  },
  methods: {
    fn (n1, n2) {
      console.log(this)
      console.log(n1, n2)
      console.log(arguments)
    }
  }

}
</script>
