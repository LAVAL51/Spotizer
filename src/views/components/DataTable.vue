<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column :prop="tableProp" :label="tableLabel"></el-table-column>
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
    tableProp: {
      type: String,
      required: true,
    },
    tableLabel: {
      type: String,
      required: true,
    },
  },
};
</script>


<style scoped>

</style>