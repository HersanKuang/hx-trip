<script lang="ts" setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'
import HouseItemT3 from '@/components/house-item-t3/house-item-t3.vue'
import HouseItemT9 from '@/components/house-item-t9/house-item-t9.vue'

const homeStore = useHomeStore()
const { houseList } = storeToRefs(homeStore)
</script>

<template>
  <div class="home-content">
    <h2 class="title">热门精选</h2>
    <div class="list">
      <template v-for="item in houseList" :key="item.data.houseId">
        <house-item-t9
          v-if="item.discoveryContentType === 9"
          :item-data="item.data"
        />
        <house-item-t3
          v-else-if="item.discoveryContentType === 3"
          :item-data="item.data"
        />
      </template>
    </div>
  </div>
</template>

<style lang="less" scoped>
.home-content {
  .title {
    margin: 20px 0 0 20px;
  }

  .list {
    display: flex;
    flex-wrap: wrap;
    padding: 8px;
  }
}
</style>
