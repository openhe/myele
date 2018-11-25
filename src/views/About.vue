<template>
  <div class="about">
    <h1>This is an about page</h1>
  </div>
</template>

<script>
export default {
  mounted() {
    //获取热门城市
    this.$api
      .getCityByType("hot")
      .then(res => {
        console.log("hot citys:", res);
        this.hotcity = res;
      })
      .catch(err => {
        alert(err);
      });

    //vipCart
    this.$api
      .vipCart("id1", "123", "pwd")
      .then(res => {
        console.log("mobiles:", res);
      })
      .catch(err => {
        console.log("error:", err);
      });
  }
};
</script>
