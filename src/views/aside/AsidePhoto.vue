<template>
  <div class="photo-box">
    <div class="photo">
      <img src="~assets/img/photo.jpg" alt />
    </div>
    <div class="admin-infomation">
      <div class="info">
        <span class="name">{{adminInfo.name}}</span>
        <span class="tel">{{adminInfo.tel}}</span>
      </div>
      <div class="des">{{adminInfo.desc}}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "AsidePhoto",
  data() {
    return {
      adminInfo: {
        name: "刘全",
        tel: "1777777777777",
        desc: "都还哦啊大会到时候撒后悔急吼吼刷卡号地块哈克斯都会看到"
      }
    };
  }
};
</script>

<style lang="scss">
.photo-box {
  padding: 20px;
  padding-bottom: 0;

  // 头像
  .photo {
    img {
      width: 80px;
      height: 80px;
    }
  }

  // 信息
  .admin-infomation {
    font-size: 13px;
    color: #c2c2c2;
    line-height: 22px;
    border-bottom: 1px solid #eee;
    padding-bottom: 10px;
    
    .info {
      padding-top: 5px;
      .name {
        color: #686868;
        font-size: 14px;
      }
      .tel {
        padding-left: 10px;
      }
    }
    .desc {
      word-break: break-all;
    }
  }
}
</style>