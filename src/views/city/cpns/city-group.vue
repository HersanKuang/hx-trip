<script lang="ts" setup>
import { computed } from "vue"

interface Props {
  groupData: { cities?: any[] }
}

const props = withDefaults(defineProps<Props>(), {
  groupData: () => ({})
})
const indexList = computed(() => {
  const list = props.groupData.cities!.map((item) => item.group)
  list.unshift("#")
  return list
})
</script>

<template>
  <div class="city-group">
    <van-index-bar :index-list="indexList" :sticky="false">
      <van-index-anchor index="热门"/>
      <div class="list">
        <template v-for="(city, index) in groupData.hotCities" :key="index">
          <div class="city">{{ city.cityName }}</div>
        </template>
      </div>
      <template v-for="(group, index) in groupData.cities" :key="index">
        <van-index-anchor :index="group.group"/>
        <template v-for="(city, index) in group.cities" :key="index">
          <van-cell :title="city.cityName"/>
        </template>
      </template>
    </van-index-bar>
  </div>
</template>

<style lang="less" scoped>
.list {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-evenly;
  margin: 10px;
  padding-right: 20px;

  .city {
    width: 70px;
    height: 28px;
    margin: 6px;
    text-align: center;
    line-height: 28px;
    border-radius: 14px;
    font-size: 12px;
    background-color: #fff4ec;
  }
}
</style>