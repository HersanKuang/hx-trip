<script lang="ts" setup>
interface Props {
  swiperData: any[]
}
withDefaults(defineProps<Props>(), {
  swiperData: () => []
})
</script>

<template>
  <div class="swiper">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swiperData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swiper {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
  }
}
</style>
