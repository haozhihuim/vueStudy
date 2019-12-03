<template>
    <div>
        <h1>管理</h1>
        <Table border :columns="TableColumns" :data="result" >
            <template slot-scope="{ row }" slot="name">
                <strong>{{ row.name }}</strong>
            </template>
            <template slot-scope="{ row }" slot="action">
                <Button type="primary" size="small" style="margin-right: 5px" @click="edit">Edit</Button>
                <Button type="error" size="small" @click="remove(row)">Delete</Button>
            </template>
        </Table>
        <Modal
            v-model="flag"
            title="提示" @on-ok="ok"
            @on-cancel="cancel">
            >确认要删除{{delItem.name}}这条数据吗？
        </Modal>
    </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return ({
      deleteData: {},
      editDate: {},
      flag: false,
      switchFlag: '',
      result: [],
      TableColumns: [
        {
          title: 'Name',
          slot: 'name'
        },
        {
          title: 'Tel',
          key: 'tel'
        },
        {
          title: 'Action',
          slot: 'action',
          width: 150,
          align: 'center'
        }
      ],
      delItem: {}
    })
  },
  mounted () {
    this.getList()
  },
  methods: {
    cancel () {
      this.deleteFlag = false
    },
    ok () {
      this.flag = false
      console.log(this.delItem)
      axios.request({
        method: 'POST',
        url: '/api/delete',
        data: {
          id: this.delItem.id
        }
      })
        .then(res => {
          this.$Message.info('删除成功')
          this.result = res.data
        })
        .catch(function (error) {
          console.log(error)
        })
    },
    edit () {
      this.switchFlag = 'edit'
    },
    remove (item) {
      this.switchFlag = 'delete'
      this.delItem = item
      this.flag = true
    },
    getList () {
      axios.request({
        method: 'GET',
        url: '/api/getList'
      })
        .then(res => {
          this.result = res.data
        })
    }

  }
}
</script>

<style>

</style>
