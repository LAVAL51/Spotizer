<template>
  <div>
    <el-table :data="tableData" style="width: 99%">
      <el-table-column
          v-for="col in tableColumns"
          :prop="col.prop"
          :label="col.label"
      ></el-table-column>
    </el-table>
    <el-pagination
        background
        layout="prev, pager, next"
        :total="totalItems"
        :page-size="pageSize"
        @current-change="handleCurrentChange"
    >
    </el-pagination>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'dataTable',
  props: {
    resourceName: {
      type: String,
      required: true,
    },
    tableColumns: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 30,
      totalItems: 0,
    };
  },
  async created() {
    await this.loadData(this.resourceName, this.currentPage);
  },
  methods: {
    async loadData(resourceName, currentPage) {
      const { data, total } = await axios.get(`/api/${resourceName}?page=${currentPage}`);
      this.tableData = data;
      this.totalItems = Math.ceil(total / this.pageSize);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.loadData(this.resourceName, this.currentPage);
    },
  },
};
</script>
