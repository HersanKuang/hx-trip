<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
// 位置/城市
const cityClick = () => {
  router.push("/city")
}

const positionClick = () => {
  // 获取当前位置
  navigator.geolocation.getCurrentPosition((res) => {
    console.log("获取位置成功", res)
  }, (err) => {
    console.log("获取位置失败", err)
  }, {
    enableHighAccuracy: true,
    timeout: 5000,
    maximumAge: 0
  })
}
</script>

<template>
  <div class="search-box">
    <div class="location">
      <div class="city" @click="cityClick">广州</div>
      <div class="position" @click="positionClick">
        <span class="text">我的位置</span>
        <img src="@/assets/img/home/icon_location.png" alt="">
      </div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.search-box {
  .location {
    display: flex;
    align-items: center;
    height: 44px;
    padding: 0 20px;
    .city {
      flex: 1;
      font-size: 15px;
      color: #333333;
    }
    .position {
      display: flex;
      align-items: center;
      width: 74px;
      .text {
        font-size: 12px;
        color: #666666;
      }
      img {
        width: 18px;
        height: 18px;
        margin-left: 8px;
      }
    }
  }
}
</style>