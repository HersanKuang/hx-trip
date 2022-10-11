<script setup lang="ts">
<<<<<<< HEAD
import TabBar from "@/components/tab-bar/tab-bar.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <div class="app">
    <router-view />
    <tab-bar v-if="!route.meta.hideTabBar" />
  </div>
</template>

<style lang="less" scoped></style>
=======
</script>

<template>
  <div class="app">Vue app</div>
</template>

<style scoped>
</style>
>>>>>>> 2920fb3a9ab92cb7bb71bfc5dd31bc93e4c2befc
