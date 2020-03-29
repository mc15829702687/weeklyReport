<template>
  <ul class="menu-list">
    <li
      class="item"
      v-for="(item, index) in list"
      :key="'key' + index"
      :class="{active: currentIndex === index}"
      @click="itemClick(index)"
    >
      <i class="icon" :class="item.icon"></i>
      <span class="text">{{item.text}}</span>
    </li>
  </ul>
</template>

<script>
export default {
  name: "AsideMenuList",
  data() {
    return {
      currentIndex: 0,
      list: [
        {
          icon: "el-icon-user-solid",
          text: "我的周报"
        },
        {
          icon: "el-icon-share",
          text: "分享给我的"
        },
        {
          icon: "el-icon-setting",
          text: "设置分享人"
        },
        {
          icon: "el-icon-s-custom",
          text: "联系管理员"
        }
      ]
    };
  },
  methods: {
    itemClick(index) {
      if (index === this.list.length - 1) {
        return;
      }
      this.currentIndex = index;

      // 路由跳转
      switch (index) {
        case 0:
          this.$router.replace({
            name: "myWeeklyReport"
          });
          break;
        case 1:
          this.$router.replace({
            name: "shareMe"
          });
          break;
        case 2:
          this.$router.replace({
            name: "setSharer"
          });
          break;
      }
    }
  }
};
</script>

<style lang="scss" scoped>
.menu-list {
  margin: 0;
  padding: 10px 0px 0px 0px;
  font-size: 13px;
  color: #8e8e8e;
  position: relative;
  height: calc(100% - 200px);

  .item {
    border-left: 4px solid transparent;
    list-style: none;
    line-height: 40px;
    display: flex;
    align-items: center;
    cursor: pointer;

    .icon {
      color: #3596f7;
      padding-left: 20px;
      font-size: 16px;
    }
    .text {
      padding-left: 25px;
      padding-right: 20px;
    }
  }

  .item.active {
    background-color: #e0f2fe;
    border-left: 4px solid #3596f7;
  }
  .item:last-child {
    position: absolute;
    bottom: 0;
  }
}
</style>