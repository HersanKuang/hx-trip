<script lang="ts" setup>
interface Props {
  topInfos: any
}
withDefaults(defineProps<Props>(), {
  topInfos: () => ({})
})
</script>

<template>
  <div class="infos">
    <div class="name">{{ topInfos.houseName }}</div>
    <div class="tags">
      <template v-for="item in topInfos.houseTags" :key="item.tagCode">
        <span
          class="item"
          v-if="item.tagText"
          :style="{
            color: item.tagText.color,
            background: item.tagText.background.color
          }"
          >{{ item.tagText.text }}</span
        >
      </template>
    </div>
    <div class="comment extra">
      <div class="left">
        <div class="score">{{ topInfos.commentBrief.overall }}</div>
        <div class="title">{{ topInfos.commentBrief.scoreTitle }}</div>
        <div class="brief">{{ topInfos.commentBrief.commentBrief }}</div>
      </div>
      <div class="right">
        <div class="count">
          {{ topInfos.commentBrief.totalCount }}条评论
          <van-icon name="arrow" />
        </div>
      </div>
    </div>
    <div class="position extra">
      <div class="left address">
        {{ topInfos.nearByPosition.address }}
      </div>
      <div class="right">地图·周边 <van-icon name="arrow" /></div>
    </div>
  </div>
</template>

<style lang="less" scoped>
.infos {
  padding: 16px;
  background-color: #fff;

  .name {
    font-weight: 700;
    font-size: 20px;
    color: #333;
    text-align: justify;
    line-height: 24px;
    overflow: hidden;
    margin-bottom: 6px;
  }

  .tags {
    margin: 10px 0;

    .item {
      font-size: 12px;
      margin: 0 2px;
      padding: 1px 3px;
    }
  }

  .extra {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 8px 12px;
    margin: 12px 0;
    border-radius: 5px;
    font-size: 12px;
    background-color: #f5f7fa;

    .right {
      color: #ff9645;
    }
  }

  .comment {
    .left {
      display: flex;
      align-items: center;
      .score {
        font-size: 18px;
        font-weight: 700;
        color: #333;
      }

      .title {
        color: #333;
        font-weight: 700;
        margin: 0 3px;
      }

      .brief {
        color: #666;
      }
    }
  }

  .position {
    .address {
      font-size: 14px;
      font-weight: 700;
      color: #333;
    }
  }
}
</style>
