import { defineStore } from 'pinia'
import { getHomeHotSuggests } from '@/service'

interface State {
  hotSuggests: any[]
  categories: any[]
}
const useHomeStore = defineStore('home', {
  state: (): State => ({
    hotSuggests: [],
    categories: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    }
  }
})

export default useHomeStore
