import axios, { AxiosInstance } from 'axios'
import { BASE_URL, TIMEOUT } from './config'
import type { HXRequestConfig } from './type'

class HXRequest {
  instance: AxiosInstance

  constructor(baseURL: string, timeout = 10000) {
    this.instance = axios.create({
      baseURL,
      timeout
    })
  }

  request<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return new Promise((resolve, reject) => {
      this.instance
        .request(config)
        .then((res: any) => {
          resolve(res.data)
        })
        .catch((err: any) => {
          reject(err)
        })
    })
  }

  get<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'get' })
  }

  post<T = any>(config: HXRequestConfig<T>): Promise<T> {
    return this.request({ ...config, method: 'post' })
  }
}

export default new HXRequest(BASE_URL, TIMEOUT)
