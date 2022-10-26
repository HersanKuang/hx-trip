import hxRequest from '@/service/request'
export function getDetailInfos<T>(houseId: T | T[]) {
  return hxRequest.get({
    url: '/detail/infos',
    params: {
      houseId
    }
  })
}
