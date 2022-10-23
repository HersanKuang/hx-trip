import { onMounted, onUnmounted, ref } from 'vue'
import { hxthrorrle } from '@/utils'

export default function (reachBottomCB: () => void) {
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  // 防抖
  const scrollListenerHandler = hxthrorrle(
    () => {
      clientHeight.value = document.documentElement.clientHeight
      scrollTop.value = document.documentElement.scrollTop
      scrollHeight.value = document.documentElement.scrollHeight
      if (
        clientHeight.value + Math.ceil(scrollTop.value) >=
        scrollHeight.value
      ) {
        if (reachBottomCB) reachBottomCB()
      }
    },
    200,
    { trailing: true }
  )

  onMounted(() => {
    window.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    window.removeEventListener('scroll', scrollListenerHandler)
  })
  return { scrollTop, scrollHeight, clientHeight }
}
