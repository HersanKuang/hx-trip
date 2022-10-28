<script lang="ts" setup>
interface Props {
  priceIntro: any
}
withDefaults(defineProps<Props>(), {
  priceIntro: () => ({})
})
</script>

<template>
  <div class="intro">
    <h2 class="title">{{ priceIntro.title }}</h2>
    <div class="content">
      {{ priceIntro.introduction }}
    </div>
  </div>
</template>

<style lang="less" scoped>
.intro {
  margin-top: 15px;
  padding: 16px 12px;
  background-color: var(--van-background-color-light);

  .title {
    font-size: 14px;
    color: #000;
    font-weight: 700;
  }

  .content {
    margin-top: 10px;
    font-size: 12px;
    line-height: 1.5;
    color: #666;
  }
}
</style>
