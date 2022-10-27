<script lang="ts" setup>
interface Props {
  swipeData: any[]
}
const props = withDefaults(defineProps<Props>(), {
  swipeData: () => []
})
// 对轮播图数据进行转换
const swipeGroup: any = {}
for (const item of props.swipeData) {
  let valueArray = swipeGroup[item.enumPictureCategory]
  if (!valueArray) {
    valueArray = []
    swipeGroup[item.enumPictureCategory] = valueArray
  }
  valueArray.push(item)
}
// 定义删除数据中冒号的方法
const nameReg = /【(.*?)】/i
const getName = (name: string) => {
  const result: any[] = nameReg.exec(name)!
  return result[1]
}
// 定义当前类别索引的方法
const getCategoryIndex = (item: any) => {
  const valueArray = swipeGroup[item.enumPictureCategory]
  return valueArray.findIndex((res: any) => res === item) + 1
}
</script>

<template>
  <div class="swiper">
    <van-swipe class="swipe-list" :autoplay="3000" indicator-color="white">
      <template v-for="(item, index) in swipeData" :key="index">
        <van-swipe-item class="item">
          <img :src="item.url" alt="" />
        </van-swipe-item>
      </template>
      <template #indicator="{ active }">
        <div class="indicator">
          <template v-for="(value, key) in swipeGroup" :key="key">
            <span
              class="item"
              :class="{
                active: swipeData[active]?.enumPictureCategory === Number(key)
              }"
            >
              <span class="text">{{ getName(value[0].title) }}</span>
              <span
                class="count"
                v-if="swipeData[active]?.enumPictureCategory === Number(key)"
              >
                {{ getCategoryIndex(swipeData[active]) }}/{{ value.length }}
              </span>
            </span>
          </template>
        </div>
      </template>
    </van-swipe>
  </div>
</template>

<style lang="less" scoped>
.swiper {
  .swipe-list {
    .item {
      img {
        width: 100%;
      }
    }
    .indicator {
      position: absolute;
      right: 5px;
      bottom: 5px;
      padding: 2px 5px;
      font-size: 12px;
      color: white;
      background: rgba(0, 0, 0, 0.1);
      .item {
        margin: 0 3px;
        &.active {
          padding: 0 3px;
          border-radius: 6px;
          background-color: #fff;
          color: #333;
        }
      }
    }
  }
}
</style>
