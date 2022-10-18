import hxRequest from '@/service/request'

export function getHomeHotSuggests() {
  return hxRequest.get({ url: '/home/hotSuggests' })
}
