<script lang="ts" setup>
import { computed } from 'vue'
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from '@/views/home/cpns/home-content.vue'
import useScroll from '@/hooks/useScroll'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()
// 监听window窗口的滚动
const { scrollTop } = useScroll(() => {
  homeStore.fetchHouseListData()
})
// 搜索框显示的控制
const isShowSearchBar = computed(() => {
  return scrollTop.value >= 100
})
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
      <div class="search-bar" v-if="isShowSearchBar">我是搜索框的内容</div>
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
