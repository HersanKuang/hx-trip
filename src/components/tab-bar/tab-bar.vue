<script lang="ts" setup>
import { ref, watch } from 'vue'
import tabbarData from '@/assets/data/tabbar'
import { getAssetURL } from '@/utils'
import { useRoute, useRouter } from 'vue-router'

const currentIndex = ref(0)
const router = useRouter()
const route = useRoute()
/**
 * 通过url字段修改tabbar
 * 监听路由改变时，找到对应的索引，设置currentIndex
 */
watch(route, (newRoute) => {
  const index = tabbarData.findIndex((item) => item.path === newRoute.path)
  // 防止city赋值给currentIndex
  if (index === -1) return
  currentIndex.value = index
})
interface Item {
  path: string
}
const itemClick = (item: Item, index: number) => {
  currentIndex.value = index
  router.push(item.path)
}
</script>

<template>
  <div class="tabbar">
    <template v-for="(item, index) in tabbarData" :key="item">
      <div
        class="tabbar-item"
        :class="{ active: currentIndex === index }"
        @click="itemClick(item, index)"
      >
        <img
          :src="
            currentIndex === index
              ? getAssetURL(item.imageActive)
              : getAssetURL(item.image)
          "
          alt=""
        />
        <span class="text">{{ item.title }}</span>
      </div>
    </template>
  </div>
</template>

<style lang="less" scoped>
.tabbar {
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  height: 50px;
  display: flex;
  border-top: 1px solid #f3f3f3;
  background-color: #fff;

  .tabbar-item {
    flex: 1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    &.active {
      color: var(--primary-color);
    }

    .text {
      font-size: 12px;
      margin-top: 1px;
    }

    img {
      width: 36px;
    }
  }
}
</style>
