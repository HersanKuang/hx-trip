<script lang="ts" setup>
import { useRouter } from 'vue-router'

const router = useRouter()
const onClickLeft = () => {
  router.back()
}
</script>

<template>
  <div class="message">
    <van-nav-bar
      title="消息中心"
      left-text="返回"
      left-arrow
      @click-left="onClickLeft"
    />
    <div class="content">
      <img src="@/assets/img/message/icon_message.png" alt="" />
      <div class="text">暂无聊天消息</div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.content {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 100px;
  img {
    width: 88%;
  }
}
</style>
