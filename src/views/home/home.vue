<script lang="ts" setup>
import { computed, onActivated, ref } from 'vue'
import useHomeStore from '@/stores/modules/home'
import HomeNavBar from './cpns/home-nav-bar.vue'
import HomeSearchBox from './cpns/home-search-box.vue'
import HomeCategories from './cpns/home-categories.vue'
import HomeContent from '@/views/home/cpns/home-content.vue'
import SearchBar from '@/components/search-bar/search-bar.vue'
import useScroll from '@/hooks/useScroll'

// 发送网络请求
const homeStore = useHomeStore()
homeStore.fetchHotSuggestData()
homeStore.fetchCategoriesData()
homeStore.fetchHouseListData()

// 监听window窗口的滚动
const homeRef = ref()
const { scrollTop } = useScroll(() => {
  homeStore.fetchHouseListData()
}, homeRef)

// 跳转回home时，保存原来home页面滚动的位置
onActivated(() => {
  homeRef.value?.scrollTo({
    top: scrollTop.value
  })
})

// 搜索框显示的控制
const isShowSearchBar = computed(() => scrollTop.value >= 350)
</script>

<template>
  <div class="home" ref="homeRef">
    <home-nav-bar />
    <div class="banner">
      <img src="@/assets/img/home/banner.webp" alt="" />
    </div>
    <home-search-box />
    <div class="content">
      <home-categories />
      <div class="search" v-if="isShowSearchBar">
        <search-bar />
      </div>
      <home-content />
    </div>
  </div>
</template>

<style lang="less" scoped>
.home {
  height: 100vh;
  box-sizing: border-box;
  overflow-y: auto;
  padding-bottom: 50px;
  .banner {
    img {
      width: 100%;
    }
  }
  .content {
    margin-top: 20px;
    background-color: #f5f7f9;
    .search {
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      height: 45px;
      padding: 16px 16px 10px 16px;
      background-color: white;
      z-index: 100;
    }
  }
}
</style>
