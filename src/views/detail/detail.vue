<script lang="ts" setup>
import { computed, ref, watch } from 'vue'
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
import useScroll from '@/hooks/useScroll'

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

// tabControl的相关操作
const tabActive = ref(0)
const detailRef = ref()
const { scrollTop } = useScroll(undefined, detailRef)
const showTabControl = computed(() => scrollTop.value >= 350)

// 顶部tabs相关
interface SectionEls {
  [n: string]: string
}
const sectionEls = ref<SectionEls>({})
const names = computed(() => Object.keys(sectionEls.value))
const getSectionRef = (value: any) => {
  if (!value) return
  const name = value.$el.getAttribute('name')
  sectionEls.value[name] = value.$el
}

// 判断是否点击，点击则跳过页面滚动
let isClick = false
let currentDistance = -1
const tabClick = (name: { name: number }) => {
  const key = Object.keys(sectionEls.value)[name.name]
  const el: any = sectionEls.value[key]
  let distance = el.offsetTop
  if (name.name !== 0) distance = distance - 44

  isClick = true
  currentDistance = distance

  detailRef.value.scrollTo({
    top: distance,
    behavior: 'smooth'
  })
}

// 页面滚动，滚动时匹配对应的tabControl的index
watch(scrollTop, (newValue) => {
  if (newValue === currentDistance) isClick = false
  if (isClick) return

  // 1.获取所有的曲艺的offsetTops
  const els = Object.values(sectionEls.value)
  const values = els.map((el: any) => el.offsetTop)
  // 2.根据newValue去匹配响应的索引
  let index = values.length - 1
  for (let i = 0; i < values.length; i++) {
    if (values[i] > newValue + 44 + 15) {
      index = i - 1
      break
    }
  }
  // 修改当前选中的标签的标识符(索引)
  if (index === -1) return
  tabActive.value = index
})
</script>

<template>
  <div
    ref="detailRef"
    v-if="mainPart?.topModule?.housePicture?.housePics"
    class="detail"
  >
    <van-tabs
      v-model:active="tabActive"
      v-if="showTabControl"
      class="tabs"
      @click-tab="tabClick"
    >
      <van-tab v-for="item in names" :title="item" :key="item" />
    </van-tabs>
    <van-nav-bar
      title="房屋详情"
      left-text="旅途"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="main" v-memo="[mainPart]">
      <detail-swiper :swipe-data="mainPart.topModule.housePicture.housePics" />
      <detail-infos
        name="描述"
        :ref="getSectionRef"
        :top-infos="mainPart.topModule"
      />
      <detail-facility
        name="设施"
        :ref="getSectionRef"
        :house-facility="mainPart.dynamicModule.facilityModule.houseFacility"
      />
      <detail-landlord
        name="房东"
        :ref="getSectionRef"
        :landlord="mainPart.dynamicModule.landlordModule"
      />
      <detail-comment
        name="评论"
        :ref="getSectionRef"
        :comment="mainPart.dynamicModule.commentModule"
      />
      <detail-notice
        name="须知"
        :ref="getSectionRef"
        :order-rules="mainPart.dynamicModule.rulesModule.orderRules"
      />
      <detail-map
        name="周边"
        :ref="getSectionRef"
        :position="mainPart.dynamicModule.positionModule"
      />
      <detail-intro :price-intro="mainPart.introductionModule" />
    </div>
    <div class="footer" v-if="mainPart">
      <img src="@/assets/img/detail/icon_ensure.png" alt="" />
      <div class="text">弘源旅途, 永无止境!</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.detail {
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  .tabs {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 99;
  }
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
}
</style>
