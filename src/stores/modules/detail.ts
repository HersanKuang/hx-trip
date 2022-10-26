import { defineStore } from 'pinia'
import { getDetailInfos } from '@/service'

interface State {
  houseDetail: { mainPart?: object }
}
const useDetailStore = defineStore('detail', {
  state: (): State => ({
    houseDetail: {}
  }),
  actions: {
    async fetchHouseDetailData<T>(houseId: T | T[]) {
      const res = await getDetailInfos(houseId)
      this.houseDetail = res.data
    }
  }
})

export default useDetailStore
