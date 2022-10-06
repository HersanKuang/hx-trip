<script lang="ts" setup>
import { ref } from "vue"
import { useRouter } from "vue-router"
import { storeToRefs } from "pinia"
import useCityStore from "@/stores/modules/city"

const router = useRouter()

// 搜索框功能
const searchValue = ref("")
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
    <!-- 1.搜索框 -->
    <van-search
      v-model="searchValue"
      shape="round"
      show-action
      @cancel="cancelClick"
      placeholder="城市/区域/位置"
    />
    <!-- 2.标签栏的切换 -->
    <van-tabs v-model:active="tabActive" color="#ff9854">
      <template v-for="(value, key) in allCities" :key="key">
        <van-tab :title="value.title" />
      </template>
    </van-tabs>
  </div>
</template>

<style lang="less" scoped></style>