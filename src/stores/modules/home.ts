import { defineStore } from 'pinia'
import {
  getHomeCategories,
  getHomeHotSuggests,
  getHomeHouseList
} from '@/service'

interface State {
  hotSuggests: any[]
  categories: any[]
  currentPage: number
  houseList: any[]
}
const useHomeStore = defineStore('home', {
  state: (): State => ({
    hotSuggests: [],
    categories: [],
    currentPage: 1,
    houseList: []
  }),
  actions: {
    async fetchHotSuggestData() {
      const res = await getHomeHotSuggests()
      this.hotSuggests = res.data
    },
    async fetchCategoriesData() {
      const res = await getHomeCategories()
      this.categories = res.data
    },
    async fetchHouseListData() {
      const res = await getHomeHouseList(this.currentPage++)
      this.houseList.push(...res.data)
    }
  }
})

export default useHomeStore
