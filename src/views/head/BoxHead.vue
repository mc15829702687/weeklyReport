<template>
  <div class="boxHead">
    <i class="DCone">DCone</i>|
    <span class="text">工作周报</span>
  </div>
</template>

<script>
export default {
  name: "BoxHead",
  data() {
    return {
    }
  }
};
</script>

<style lang="scss" scoped>
.boxHead {
  display: flex;

  .DCone {
    font-weight: 550;
    padding-right: 8px;
    letter-spacing: 1px;
    font-size: 25px;
  }

  .text {
    padding-left: 8px;
    font-size: 20px;
  }
}
</style>