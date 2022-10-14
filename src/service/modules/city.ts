import hxRequest from '../request/index'

export const getCityAll = () => hxRequest.get({ url: 'city/all' })
