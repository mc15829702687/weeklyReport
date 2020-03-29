<template>
  <div class="share-me-box">
    <ul class="share-me-ul">
      <li class="item" v-for="(item, index) in shareMeList" :key="index">
        <div class="title">{{item.title}}</div>
        <ul class="share-me-content">
          <li
            v-if="index === 0"
            class="share-me-text"
            v-for="(childItem, index2) in item.children"
            :key="index2"
            :class="{active: isActive1 === index2}"
            @click="clickChildItem1(index2)"
          >
            <i class="icon"></i>
            {{childItem}}
          </li>
          <li
            v-if="index === 1"
            class="share-me-text"
            v-for="(childItem, index2) in item.children"
            :key="index2"
            :class="{active: isActive2 === index2}"
            @click="clickChildItem2(index2)"
          >
            <i class="icon"></i>
            {{childItem}}
          </li>
          <li
            v-if="index === 2"
            class="share-me-text"
            v-for="(childItem, index2) in item.children"
            :key="index2"
            :class="{active: isActive3 === index2}"
            @click="clickChildItem3(index2)"
          >
            <i class="icon"></i>
            {{childItem}}
          </li>
        </ul>
        <div class="search-box" v-if="index === 0">
          <div class="block" v-show="searchShow">
            <el-date-picker v-model="week" type="week" format="yyyy 第 WW 周" placeholder="选择周"></el-date-picker>
            <el-button type="primary" class="search">搜索</el-button>
          </div>
        </div>
        <div class="add-box" v-if="index === 1">
          <i class="add el-icon-circle-plus-outline"></i>
          添加
        </div>
      </li>
    </ul>
    <div class="content-box">
      <div class="content">
        <div class="icon el-icon-s-data"></div>
        <div class="text">暂无相关数据</div>
        <div class="need-search">请进行搜索</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      shareMeList: [
        {
          title: "时间范围",
          children: [
            "全部",
            "两周内",
            "一个月内",
            "三个月内",
            "六个月内",
            "历史周"
          ]
        },
        {
          title: "人员范围",
          children: ["全部"]
        },
        {
          title: "查询状态",
          children: ["全部", "未审或未阅"]
        }
      ],
      isActive1: 0,
      isActive2: 0,
      isActive3: 0,
      searchShow: false,
      week: ""
    };
  },
  methods: {
    clickChildItem1(index) {
      this.isActive1 = index;
      if (index === this.shareMeList[0].children.length - 1) {
        this.searchShow = true;
        return;
      }
      this.searchShow = false;
    },
    clickChildItem2(index) {
      this.isActive2 = index;
    },
    clickChildItem3(index) {
      this.isActive3 = index;
    }
  }
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
.share-me-box {
  font-size: 14px;
  color: #9d9d9d;
  display: flex;
  height: 100%;
  flex-direction: column;

  .share-me-ul {
    padding: 0;
    margin: 0;
    background-color: #fff;
    flex: 0 0 150px;

    .item {
      list-style: none;
      line-height: 50px;
      display: flex;
      height: 50px;
      align-items: center;

      .title {
        width: 100px;
        color: #333;
        text-align: center;
        font-weight: 520;
        background-color: #f5f7fa;
      }

      // 右侧内容
      .share-me-content {
        display: flex;
        padding-left: 10px;

        .share-me-text {
          width: 80px;
          text-align: center;
          position: relative;
          border: 1px solid transparent;
          cursor: pointer;
          height: 30px;
          line-height: 30px;

          .icon {
            display: block;
            position: absolute;
            border-bottom: 15.4px solid transparent;
            border-left: 2rem solid transparent;
            width: 0px;
            height: 0px;
            bottom: 0rem;
            right: 0;
          }
          .icon:after {
            position: absolute;
            content: "\2714";
            color: #fff;
            left: -1rem;
            top: -0.5rem;
            font-size: 1.2rem;
          }
        }
        .share-me-text.active {
          border: 1px solid #6fc4fa;
          .icon {
            border-bottom: 15.4px solid #6fc4fa;
          }
        }
      }

      // 搜索
      /deep/ .el-date-editor.el-input,
      .el-date-editor.el-input__inner {
        width: 180px;
      }
      /deep/ .el-input__inner {
        height: 35px;
      }
      .search-box {
        padding-left: 10px;
        .search {
          padding: 8px 20px;
          margin-left: 8px;
        }
      }

      // 添加
      .add-box {
        padding-left: 10px;
        color: #eee;
        display: flex;
        align-items: center;
        cursor: pointer;

        .add {
          font-size: 20px;
          padding-right: 5px;
        }
      }
    }
  }

  // 暂无数据
  .content-box {
    margin-top: 10px;
    flex: auto;
    background-color: #fff;
    align-items: center;
    justify-content: center;
    display: flex;

    .content {
      text-align: center;

      .icon {
        font-size: 50px;
        color: #57b9f8;
      }
      .text {
        color: #999999;
        line-height: 25px;
        font-size: 16px;
      }
      .need-search {
        line-height: 25px;
      }
    }
  }
}
</style>