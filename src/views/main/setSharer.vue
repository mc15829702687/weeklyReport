<template>
  <div class="set-share-box">
    <ul class="list">
      <li class="set-share-item" v-for="(item, index) in list" :key="index">
        <div class="title">{{item.title}}</div>
        <div class="content">{{item.content}}</div>
      </li>
    </ul>
    <div class="edit-box">
      <el-button type="primary" class="edit" @click="editBox = true">编辑</el-button>
    </div>
    <el-dialog title="提示" :visible.sync="editBox" width="30%" center>
      <span>编辑</span>
      <span slot="footer" class="dialog-footer">
        <el-button @click="editBox = false">取 消</el-button>
        <el-button type="primary" @click="editBox = false">确 定</el-button>
      </span>
    </el-dialog>
  </div>
</template>

<script>
export default {
  data() {
    return {
      list: [
        {
          title: "周报分享人",
          content: "XXXX"
        },
        {
          title: "周报分享人",
          content: "XXXX"
        }
      ],
      editBox: false
    };
  },
  methods: {}
};
</script>

<style lang="scss" scoped>
li {
  list-style: none;
}
ul {
  padding: 0;
  margin: 0;
}

.list {
  padding: 10px;
  font-size: 14px;

  .set-share-item {
    background-color: #fff;
    padding: 10px;
    margin-top: 10px;

    .title {
      line-height: 24px;
      color: #333;
      font-weight: 550;
    }
    .content {
      color: #666;
      line-height: 24px;
      text-indent: 72px;
    }
  }
}
.edit-box {
  display: flex;
  margin-top: 10px;
  justify-content: center;

  .edit {
    padding: 10px 20px;
  }
}
</style>