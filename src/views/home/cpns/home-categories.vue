<script lang="ts" setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <van-tabs scrollspy class="home-categories">
    <van-tab v-for="item in categories" :key="item.id">
      <template #title>
        <div class="category-item">
          <img class="icon" :src="item.pictureUrl" alt="" />
          <div class="title">{{ item.title }}</div>
        </div>
      </template>
    </van-tab>
  </van-tabs>
</template>

<style lang="less" scoped>
.home-categories {
  .category-item {
    text-align: center;

    .icon {
      width: 32px;
      height: 32px;
    }

    .title {
      font-size: 12px;
    }
  }
}
</style>
