<script lang="ts" setup>
import { onMounted, onUnmounted, ref, shallowRef } from 'vue'
import DetailSection from '@/components/detail-section/detail-section.vue'
import AMapLoader from '@amap/amap-jsapi-loader'

// 获取房屋周围位置
interface Props {
  position: any
}
const props = withDefaults(defineProps<Props>(), {
  position: () => ({})
})

// 显示高德地图
const mapRef = ref()
const map = shallowRef<any>(null)
const initMap = () => {
  AMapLoader.load({
    key: '76430c0062c23f012827db17a102d2fe', // 申请好的Web端开发者Key，首次调用 load 时必填
    version: '2.0', // 指定要加载的 JSAPI 的版本，缺省时默认为 1.4.15
    plugins: [''] // 需要使用的的插件列表，如比例尺'AMap.Scale'等
  })
    .then((AMap) => {
      map.value = new AMap.Map(mapRef.value, {
        //设置地图容器id
        viewMode: '3D', //是否为3D地图模式
        zoom: 13, //初始化地图级别
        center: [props.position.longitude, props.position.latitude] //初始化地图中心点位置，不传为当前位置
      })
      // 创建 AMap.Icon 实例：
      const icon = new AMap.Icon({
        size: new AMap.Size(40, 50), // 图标尺寸
        image: '//webapi.amap.com/theme/v1.3/markers/n/mark_b.png', // Icon的图像
        imageSize: new AMap.Size(16, 24) // 根据所设置的大小拉伸或压缩图片
      })
      // 创建一个 Marker 实例：
      const marker = new AMap.Marker({
        icon: icon,
        position: new AMap.LngLat(
          props.position.longitude,
          props.position.latitude
        ), // 经纬度对象
        zoom: 12
      })
      map.value.add(marker)
    })
    .catch((e) => {
      console.log(e)
    })
}
onMounted(() => {
  initMap()
})
onUnmounted(() => {
  // 销毁地图
  map.value.destroy()
})
</script>

<template>
  <div class="map">
    <detail-section title="位置周边" more-text="查看更多周边信息">
      <div class="amap" ref="mapRef"></div>
    </detail-section>
  </div>
</template>

<style lang="less" scoped>
.map {
  .amap {
    height: 250px;
    border-radius: 4px;
  }
}
</style>
