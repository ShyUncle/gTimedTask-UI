<template>
  <div class="app-container">
    <el-table
      v-loading="listLoading"
      :data="list"
      element-loading-text="Loading"
      border
      fit
      highlight-current-row
    >
      <el-table-column align="center" label="ID" width="95">
        <template slot-scope="scope">{{ scope.$index }}</template>
      </el-table-column>
      <el-table-column label="name">
        <template slot-scope="scope">{{ scope.row.name }}</template>
      </el-table-column>
      <el-table-column label="description" width="110" align="center">
        <template slot-scope="scope">
          <span>{{ scope.row.description }}</span>
        </template>
      </el-table-column>
      <el-table-column label="cron" width="110" align="center">
        <template slot-scope="scope">{{ scope.row.cron }}</template>
      </el-table-column>
      <!-- <el-table-column class-name="status-col" label="executorGroup" width="110" align="center">
        <template slot-scope="scope">
          <el-tag :type="scope.row.status">{{ scope.row.executorGroup }}</el-tag>
        </template>
      </el-table-column>-->
      <el-table-column align="center" prop="created_at" label="executorGroup" width="200">
        <template slot-scope="scope">
          <i class="el-icon-time" />
          <span>{{ scope.row.executorGroup }}</span>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/jobApi'

export default {
  filters: {
    statusFilter (status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  data () {
    return {
      list: null,
      listLoading: true
    }
  },
  created () {
    this.fetchData()
  },
  methods: {
    fetchData () {
      this.listLoading = true
      getList({ pageIndex: 1, pageSize: 1 }).then(response => {
        this.list = response.data
        this.listLoading = false
      })
    }
  }
}
</script>
