<script lang="ts" setup>
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useDetailStore from '@/stores/modules/detail'
import DetailSwiper from './cpns/detail_01-swiper.vue'
import DetailInfos from './cpns/detail_02-infos.vue'
import DetailFacility from './cpns/detail_03-facility.vue'
import DetailLandlord from './cpns/detail_04-landlord.vue'
import DetailComment from './cpns/detail_05-comment.vue'
import DetailNotice from './cpns/detail_06-notice.vue'
import DetailMap from './cpns/detail_07-map.vue'
import DetailIntro from './cpns/detail_08-intro.vue'

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
  <div class="detail" v-if="mainPart?.topModule?.housePicture?.housePics">
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main">
      <detail-swiper :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos :top-infos="mainPart.topModule" />
      <detail-facility
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord :landlord="mainPart.dynamicModule.landlordModule" />
      <detail-comment :comment="mainPart.dynamicModule.commentModule" />
      <detail-notice
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map :position="mainPart.dynamicModule.positionModule" />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer" v-if="mainPart">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.footer {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 120px;
  background-color: var(--van-background-color-light);

  img {
    width: 123px;
  }

  .text {
    margin-top: 12px;
    font-size: 12px;
    color: #7688a7;
  }
}
</style>
