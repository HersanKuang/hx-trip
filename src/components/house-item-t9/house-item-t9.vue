<script lang="ts" setup>
interface Props {
  itemData: object
}
const props = withDefaults(defineProps<Props>(), {
  itemData: () => ({})
})
</script>

<template>
  <div class="house-item">house-item-t9</div>
</template>

<style lang="less" scoped></style>
