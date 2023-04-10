<template>
  <div>
    <el-table
        :data="tableData"
        style="width: 99%"
        height="700"
        :class="{'cursor_pointer': isRowClick}"
        @row-click="sendEvent">
      <el-table-column
          v-for="(col, index) in tableColumns"
          :key="index"
          :prop="col.prop"
          :label="col.label">
        <template v-if="col.prop === 'image'" v-slot="scope">
          <el-image style="width: 100px; height: 100px" :src="scope.row.image"/>
        </template>
        <template v-if="col.prop === 'youtube'" v-slot="scope">
          <iframe width="200" height="150" :src="scope.row.video"></iframe>
        </template>
      </el-table-column>
      <el-table-column
          align="right">
        <template #header>
          <el-input
              class="search-input"
              v-model="search"
              @input="searchData"
              placeholder="Rechercher..."/>
        </template>
        <template v-slot="scope">
          <el-button-group v-if="actions">
            <el-button
                v-for="(action, index) in actions"
                size="mini"
                :key="index"
                :type="action.type"
                @click="actionBtnClick(scope.row)">{{ action.label }}
            </el-button>
          </el-button-group>
        </template>
      </el-table-column>
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
    actions: {
      type: Array,
    },
    isRowClick: {
      type: Boolean,
      default: false,
    }
  },
  data() {
    return {
      tableData: [],
      currentPage: 1,
      pageSize: 30,
      totalItems: 0,
      search: '',
      isLoading: false,
    };
  },
  async created() {
    await this.loadData(this.resourceName, this.currentPage);
  },
  methods: {
    async loadData(resourceName, currentPage) {
      if (this.isLoading) return;
      this.isLoading = true;

      const {data, total} = await axios.get(`/api/${this.resourceName}?page=${currentPage}`);

      if (!data.length) {
        this.currentPage--;
        return this.loadData(this.resourceName, this.currentPage);
      }

      this.tableData = data;
      this.totalItems = Math.ceil(total / this.pageSize);
      this.isLoading = false;
    },
    async searchData() {
      const params = {
        title: this.search || '',
        name: this.search || '',
      };

      const {data, total} = await axios.get(`/api/${this.resourceName}`, {
        params: params,
      })
      this.tableData = data;
      this.totalItems = Math.ceil(total / this.pageSize);
    },
    handleCurrentChange(currentPage) {
      this.currentPage = currentPage;
      this.loadData(this.resourceName, this.currentPage);
    },
    sendEvent(data) {
      this.$emit('rowClicked', data);
    },
    actionBtnClick(data) {
      this.$emit(`addToPlaylist`, data);
    }
  },
};
</script>

<style lang="scss" scoped>

.cursor_pointer {
  cursor: pointer;
}

.search-input {
  width: 350px;
}
</style>
