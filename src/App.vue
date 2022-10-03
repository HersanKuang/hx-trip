<script setup lang="ts">
import Tabbar from "@/components/tabbar/tabbar.vue"
import { useRoute } from "vue-router"

const route = useRoute()
</script>

<template>
  <router-view />
  <tabbar v-if="!route.meta.hideTabbar" />
</template>

<style scoped>
</style>
