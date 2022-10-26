<script lang="ts" setup>
import { useRoute, useRouter } from 'vue-router'
import useDetailStore from '@/stores/modules/detail'
import Swiper from './cpns/swiper.vue'
import { storeToRefs } from 'pinia'
import { computed } from 'vue'

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
      <swiper :swiper-data="mainPart.topModule.housePicture.housePics" />
    </div>
  </div>
</template>

<style lang="less" scoped></style>
