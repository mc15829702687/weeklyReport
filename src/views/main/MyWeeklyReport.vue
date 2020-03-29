<template>
  <div class="my-weekly-report-box">
    <ul class="tab">
      <li
        class="item"
        :class="{active: isActive === index}"
        v-for="(item, index) in tabList"
        :key="'key' + index"
        @click="clickItem(index)"
      >
        <span>{{item}}</span>
      </li>
    </ul>
    <div class="table">
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="name" label="创建人" width="120"></el-table-column>
        <el-table-column prop="reportName" label="周报名称" width="180"></el-table-column>
        <el-table-column prop="commitTime" label="提交时间" width="180"></el-table-column>
        <el-table-column prop="createTime" label="创建时间" width="180"></el-table-column>
        <el-table-column prop="state" label="状态" width="100"></el-table-column>
        <el-table-column prop="operation" label="操作"></el-table-column>
      </el-table>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isActive: 0,
      tabList: ["全部", "已提交", "草稿"],
      tableData: [
        {
          name: "王小虎",
          reportName: "22222",
          commitTime: "2018-09-07 12:00:00",
          createTime: "2018-09-07 12:00:00",
          state: "已提交",
          operation: ""
        },
        {
          name: "王小虎",
          reportName: "22222",
          commitTime: "2018-09-07 12:00:00",
          createTime: "2018-09-07 12:00:00",
          state: "已提交",
          operation: ""
        },
        {
          name: "王小虎",
          reportName: "22222",
          commitTime: "2018-09-07 12:00:00",
          createTime: "2018-09-07 12:00:00",
          state: "已提交",
          operation: ""
        },
        {
          name: "王小虎",
          reportName: "22222",
          commitTime: "2018-09-07 12:00:00",
          createTime: "2018-09-07 12:00:00",
          state: "已提交",
          operation: ""
        }
      ]
    };
  },
  methods: {
    clickItem(index) {
      this.isActive = index;
    }
  }
};
</script>

<style lang="scss" scoped>
.my-weekly-report-box {
  .tab {
    line-height: 40px;
    margin: 0;
    padding: 0;
    display: flex;
    font-size: 14px;
    background-color: #fff;
    width: 230px;
    color: #cdd2d5;

    .item {
      list-style: none;
      flex: 1;
      text-align: center;
      cursor: pointer;
    }
    .item.active,
    .item:hover {
      background-color: #379ff6;
      color: #fff;
    }
  }

  // 表格
  .table {
    width: 100%;
    height: calc(100% - 40px);
    padding-top: 10px;

    /deep/ .state .cell{
      color: #9bd1bf;
    }
  }
}
</style>