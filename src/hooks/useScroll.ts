import { onMounted, onUnmounted, ref } from 'vue'
import { hxthrottle } from '@/utils'

export default function useScroll(reachBottomCB?: () => void, elRef?: any) {
  let el: any = window
  const clientHeight = ref(0)
  const scrollTop = ref(0)
  const scrollHeight = ref(0)
  // 防抖
  const scrollListenerHandler = hxthrottle(
    () => {
      if (el === window) {
        clientHeight.value = document.documentElement.clientHeight
        scrollTop.value = document.documentElement.scrollTop
        scrollHeight.value = document.documentElement.scrollHeight
      } else {
        clientHeight.value = el.clientHeight
        scrollTop.value = el.scrollTop
        scrollHeight.value = el.scrollHeight
      }
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
    if (elRef && elRef.value) el = elRef.value
    el.addEventListener('scroll', scrollListenerHandler)
  })
  onUnmounted(() => {
    el.removeEventListener('scroll', scrollListenerHandler)
  })
  return { scrollTop, scrollHeight, clientHeight }
}
