<template>
    <div>
        <h1>查找</h1>
        <div>
            <Select style="width:200px" v-model="searchType">
                <Option v-for="item in SelectList" :value="item.value"  :key="item.value" on-change="">{{item.lable}}</Option>
            </Select>
            <Input search placeholder="Search" style="width: auto" v-model="inputValue"/>
        </div>
        <Table
        border
        :columns="TableColumns"
        :data="result"
        style="width:1000px; margin: 20px 10%">
        </Table>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  name: 'Search',
  data () {
    return ({
      TableColumns: [
        {
          title: 'Name',
          key: 'name'
        },
        {
          title: 'Tel',
          key: 'tel'
        }
      ],
      result: [],
      inputValue: '',
      searchType: '',
      SelectList: [
        {
          value: 'name',
          lable: '按照名字查询'
        },
        {
          value: 'tel',
          lable: '按照手机号查询'
        }
      ]
    })
  },
  methods: {
    search () {
      // 请求参数
      // [this.searchType] 根据选择框动态变化，分别传 name 和 phone
      const params = {
        [this.searchType]: this.inputValue
      }
      //   params = {
      //     name: this.inputValue
      //   }

      //   params = {
      //     phone: this.inputValue
      //   }
      axios.request({
        method: 'GET',
        url: '/api/search',
        params: params
      })
        .then(res => {
          this.result = res.data
        }).catch(err => {
          alert('查询失败！' + err)
        })
    }
  },
  watch: {
    inputValue (val) {
      this.search()
    }
  }
}
</script>

<style>

</style>
