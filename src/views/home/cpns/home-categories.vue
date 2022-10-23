<script lang="ts" setup>
import useHomeStore from '@/stores/modules/home'
import { storeToRefs } from 'pinia'

const homeStore = useHomeStore()
const { categories } = storeToRefs(homeStore)
</script>

<template>
  <div class="categories">
    <template v-for="item in categories" :key="item.id">
      <div class="item">
        <img :src="item.pictureUrl" alt="" />
        <div class="text">{{ item.title }}</div>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.categories {
  display: flex;
  overflow-x: auto;
  height: 54px;
  padding: 0 10px;
  background-color: #fff;
  &::-webkit-scrollbar {
    display: none;
  }

  .item {
    flex-shrink: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    width: 70px;
    text-align: center;

    img {
      width: 32px;
      height: 32px;
    }

    .text {
      font-size: 12px;
      margin-top: 2px;
    }
  }
}
</style>
