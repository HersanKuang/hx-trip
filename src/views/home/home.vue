<script lang="ts" setup>
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from '@/views/home/cpns/home-content.vue'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()
</script>

<template>
  <div class="home">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <div class="content">
      <home-categories />
      <home-content />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  padding-bottom: 50px;
  .banner {
    img {
      width: 100%;
    }
  }
  .content {
    margin-top: 20px;
    background-color: #f5f7f9;
  }
}
</style>
