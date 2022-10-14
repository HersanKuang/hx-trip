<script setup lang="ts">
import TabBar from '@/components/tab-bar/tab-bar.vue'
import { useRoute } from 'vue-router'

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view />
    <tab-bar v-if="!route.meta.hideTabBar" />
  </div>
</template>

<style lang="less" scoped></style>
