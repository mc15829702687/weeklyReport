<template>
  <div class="box">
    <div class="breadcrum">
      <el-breadcrumb separator="/">
        <el-breadcrumb-item>
          <a href="javascript: void(0);">工作周报</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item class="message">{{message}}</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="tips">
      <div class="warn-icon">!</div>
      <div>提交时间：本周五前</div>
      <el-button class="add" @click="newBox = true">
        <i class="el-icon-plus"></i>
        新建工作周报
      </el-button>
    </div>

    <el-dialog title="提示" :visible.sync="newBox" width="30%" center>
      <span>内容</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="newBox = false">取 消</el-button>
        <el-button type="primary" @click="newBox = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      newBox: false
    };
  },
  computed: {
    message() {
      return this.$route.meta.title;
    }
  }
};
</script>

<style lang="scss" scoped>
.box {
  display: flex;
  align-items: center;
  padding: 0 20px;
  font-size: 14px;
  justify-content: space-between;

  // 面包屑导航
  /deep/ .el-breadcrumb__inner a {
    color: #333;
    font-weight: 500;
  }
  /deep/ .el-breadcrumb__inner {
    color: #303133;
    font-weight: 700;
  }
  /deep/
    .el-breadcrumb__inner，
    /deep/
    .el-breadcrumb__item:last-child
    .el-breadcrumb__inner,
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a,
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner a:hover,
  /deep/ .el-breadcrumb__item:last-child .el-breadcrumb__inner:hover {
    color: #303133;
    font-weight: 700;
  }

  // 提示
  .tips {
    display: flex;
    justify-content: flex-end;
    align-items: center;

    .warn-icon {
      background-color: #f01a3b;
      width: 18px;
      border-radius: 50%;
      height: 18px;
      color: #ffffff;
      text-align: center;
      line-height: 18px;
      font-weight: 550;
      margin-right: 5px;
    }
  }

  // 新建工作周报
  .add {
    background-color: #03d4b2;
    color: #fff;
    padding: 10px 20px;
    margin-left: 20px;
  }
  .add:active {
    border-color: #0aaf94;
  }
}
</style>