<script lang="ts" setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'
import { storeToRefs } from 'pinia'
import useCityStore from '@/stores/modules/city'
import CityGroup from '@/views/city/cpns/city-group.vue'

const router = useRouter()
// 搜索框功能
const searchValue = ref('')
const cancelClick = () => router.back()
// 标签栏切换
const tabActive = ref(0)
// 从Store中获取数据
const cityStore = useCityStore()
cityStore.fetchAllCitiesData()
const { allCities } = storeToRefs<any>(cityStore)
</script>

<template>
  <div class="city">
    <div class="top">
      <!-- 1.搜索框 -->
      <van-search
        v-model="searchValue"
        placeholder="城市/区域/位置"
        shape="round"
        show-action
        @cancel="cancelClick"
      />
      <!-- 2.标签栏的切换 -->
      <van-tabs v-model:active="tabActive" color="#ff9854">
        <template v-for="(value, key) in allCities" :key="key">
          <van-tab :name="key" :title="value.title" />
        </template>
      </van-tabs>
    </div>
    <div class="content">
      <template v-for="(value, key) in allCities" :key="value">
        <city-group v-show="tabActive === key" :group-data="value" />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.city {
  position: relative;
  z-index: 9;
  height: 100vh;
  background-color: #fff;
  .top {
    position: relative;
    z-index: 9;
  }

  .content {
    position: absolute;
    top: 104px;
    bottom: 0;
    left: 0;
    right: 0;
    overflow-y: scroll;
  }
}
</style>
