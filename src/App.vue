<template>
  <div id="app">
    <div>
      <transition name="router-fade" mode="out-in">
        <keep-alive>
          <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive>
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view v-if="!$route.meta.keepAlive"></router-view>
      </transition>
    </div>
    <SvgIcon />
  </div>
</template>

<script>
import SvgIcon from "@/components/common/Svg.vue";
export default {
  components: {
    SvgIcon
  }
};
</script>

<style lang="scss">
@import "@/assets/style/common.scss";
.router-fade-enter-active,
.router-fade-leave-active {
  transition: opacity 0.3s;
}
.router-fade-enter,
.router-fade-leave {
  opacity: 0;
}
</style>
