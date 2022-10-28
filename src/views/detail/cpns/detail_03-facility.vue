<script lang="ts" setup>
import DetailSection from '@/components/detail-section/detail-section.vue'
interface Props {
  houseFacility: any
}
withDefaults(defineProps<Props>(), {
  houseFacility: () => ({})
})
</script>

<template>
  <div class="facility">
    <detail-section title="房屋设施" more-text="查看全部设施">
      <div class="facility-inner">
        <template
          v-for="(item, index) in houseFacility?.houseFacilitys"
          :key="index"
        >
          <div class="item" v-if="houseFacility.facilitySort?.includes(index)">
            <div class="head">
              <img :src="item.icon" alt="" />
              <div class="text">{{ item.groupName }}</div>
            </div>
            <div class="list">
              <template
                v-for="(item, index) in item.facilitys.slice(0, 4)"
                :key="index"
              >
                <div class="item">
                  <i class="icon_check icon"></i>
                  <span>{{ item.name }}</span>
                </div>
              </template>
            </div>
          </div>
        </template>
      </div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.facility {
  .facility-inner {
    padding: 5px 0;
    border-radius: 6px;
    font-size: 12px;
    background-color: #f7f9fb;

    .item {
      display: flex;
      margin: 25px 0;

      .head {
        width: 90px;
        text-align: center;

        img {
          width: 20px;
          height: 20px;
        }

        .text {
          margin-top: 5px;
          color: #000;
        }
      }

      .list {
        flex: 1;
        display: flex;
        flex-wrap: wrap;
        align-items: center;

        .item {
          display: flex;
          align-items: center;
          box-sizing: border-box;
          width: 50%;
          margin: 4px 0;

          .icon {
            margin: 0 6px;
          }

          .text {
            color: #333;
          }
        }
      }
    }
  }
}
</style>
