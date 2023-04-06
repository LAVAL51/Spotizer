<template>
  <el-table :data="tableData" style="width: 99%">
    <el-table-column v-for="col in tableColumns" :prop="col.prop" :label="col.label"></el-table-column>
  </el-table>
</template>

<script>
export default {
  name: 'dataTable',
  props: {
    tableData: {
      type: Array,
      required: true,
    },
    tableColumns: {
      type: Array,
      default: () => [],
    },
  },
};
</script>


<style scoped>

</style>