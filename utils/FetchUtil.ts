import axios, { AxiosResponse } from 'axios'

class FetchUtil {
  public get = async <T>(args: {
    // エンドポイントごとに渡す型は違うのでgenerics型で定義する
    url: string
    data: any
  }): Promise<AxiosResponse<T, any>> => {
    const { url, data } = args

    try {
      const res = await axios.get<T>(url, { params: data })

      return res
    } catch (error) {
      throw new Error()
    }
  }
}
export const fetchUtil = new FetchUtil()
