import hxRequest from '@/service/request'

export function getHomeHotSuggests() {
  return hxRequest.get({ url: '/home/hotSuggests' })
}

export function getHomeCategories() {
  return hxRequest.get({
    url: '/home/categories'
  })
}
