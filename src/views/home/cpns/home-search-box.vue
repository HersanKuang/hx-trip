<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import useCityStore from '@/stores/modules/city'
import { storeToRefs } from 'pinia'
import useHomeStore from '@/stores/modules/home'
import { formatMonthDay, getDiffDays } from '@/utils/format_date'

const router = useRouter()
// 位置/城市
const cityClick = () => {
  router.push('/city')
}
const positionClick = () => {
  // 获取当前位置
  navigator.geolocation.getCurrentPosition(
    (res) => {
      console.log('获取位置成功', res)
    },
    (err) => {
      console.log('获取位置失败', err)
    },
    {
      enableHighAccuracy: true,
      timeout: 5000,
      maximumAge: 0
    }
  )
}
const cityStore = useCityStore()
const { currentCity } = storeToRefs<any>(cityStore)

// 日期范围的处理
const nowDate = new Date()
const newDate = new Date()
newDate.setDate(nowDate.getDate() + 1)
const startDate = ref(formatMonthDay(nowDate))
const endDate = ref(formatMonthDay(newDate))
const stayCount = ref(getDiffDays(nowDate, newDate))
// 日历范围的选择
const showCalendar = ref(false)
interface Day {
  type: string
  bottomInfo: string
  text?: number
  date?: string
}
const formatterDate = (day: Day) => {
  if (day.type === 'start') {
    day.bottomInfo = '入住'
  } else if (day.type === 'end') {
    day.bottomInfo = '离店'
  }
  return day
}
const onDateConfirm = (value: any[]) => {
  // 1.设置日期
  const selectStartDate = value[0]
  const selectEndDate = value[1]
  startDate.value = formatMonthDay(selectStartDate)
  endDate.value = formatMonthDay(selectEndDate)
  stayCount.value = getDiffDays(selectStartDate, selectEndDate)
  // 2.隐藏日历
  showCalendar.value = false
}
// 热门建议
const homeStore = useHomeStore()
const { hotSuggests } = storeToRefs(homeStore)
</script>

<template>
  <div class="search-box">
    <!-- 位置信息 -->
    <div class="location bottom-gray-line">
      <div class="city" @click="cityClick">{{ currentCity.cityName }}</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="" />
      </div>
    </div>
    <!-- 日期范围 -->
    <div
      class="section date-range bottom-gray-line"
      @click="showCalendar = true"
    >
      <div class="start">
        <div class="date">
          <span class="tip">入住</span>
          <span class="time">{{ startDate }}</span>
        </div>
      </div>
      <div class="stay">共{{ stayCount }}晚</div>
      <div class="end">
        <div class="date">
          <span class="tip">离店</span>
          <span class="time">{{ endDate }}</span>
        </div>
      </div>
    </div>
    <van-calendar
      v-model:show="showCalendar"
      type="range"
      color="#ff9854"
      :round="false"
      :formatter="formatterDate"
      @confirm="onDateConfirm"
    />
    <!-- 价格/人数选择 -->
    <div class="section price-counter bottom-gray-line">
      <div class="start">价格不限</div>
      <div class="end">人数不限</div>
    </div>
    <!-- 关键字 -->
    <div class="section keyword bottom-gray-line">关键字/位置/民宿名</div>
    <!-- 热门建议 -->
    <div class="section hot-suggest">
      <template v-for="(item, index) in hotSuggests" :key="index">
        <div
          class="item"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
        >
          {{ item.tagText.text }}
        </div>
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  --van-calendar-popup-height: 100%;
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
      flex: 1;
      font-size: 15px;
      color: #333333;
    }
    .position {
      display: flex;
      align-items: center;
      width: 74px;
      .text {
        font-size: 12px;
        color: #666666;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
    }
  }
  .section {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    padding: 0 20px;
    color: #999;
    height: 44px;
    .start {
      min-width: 25%;
      display: flex;
      height: 44px;
      align-items: center;
    }
    .stay {
      flex: 1;
      text-align: center;
      font-size: 12px;
      color: #666;
    }
    .end {
      min-width: 25%;
    }
    .date {
      display: flex;
      flex-direction: column;
      //align-items: center;
      .tip {
        font-size: 12px;
        color: #999;
      }
      .time {
        margin-top: 3px;
        color: #333;
        font-size: 15px;
        font-weight: 500;
      }
    }
  }
  .date-range {
    height: 44px;
  }
  .price-counter {
    justify-content: space-between;
    .start {
      border-right: 1px solid #f2f2f2;
    }
  }
  .hot-suggest {
    margin: 10px 0;
    .item {
      font-size: 12px;
      padding: 4px 8px;
      margin: 3px;
      border-radius: 14px;
      color: #3f4954;
      background-color: #f1f3f5;
    }
  }
}
</style>
