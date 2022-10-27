<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import useDetailStore from '@/stores/modules/detail'
import DetailSwiper from './cpns/detail-swiper.vue'
import { storeToRefs } from 'pinia'

const route = useRoute()
const router = useRouter()
// 监听返回按钮的点击
const onClickLeft = () => {
  router.back()
}
// 发送网络请求，房屋的信息
const detailStore = useDetailStore()
const houseId = route.params.id
detailStore.fetchHouseDetailData(houseId)
const { houseDetail } = storeToRefs(detailStore)
const mainPart = computed(() => houseDetail.value.mainPart)
</script>

<template>
  <div class="detail">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-if="mainPart">
      <detail-swiper :swipe-data="mainPart.topModule.housePicture.housePics" />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
