import { apiUrl } from './ApiUrl'
import { Result, FormData, Genre } from '../types/type'
import axios from 'axios'

class ApiUtil {
  public searchItems = async (args: {
    params: FormData
    page: number
  }): Promise<Result> => {
    const { params, page } = args

    const data = {
      keyword: params.keyword,
      minPrice: params.minPrice,
      maxPrice: params.maxPrice,
      postageFlag: params.postageFlag,
      asurakuFlag: params.asurakuFlag,
      page: page,
      sort: params.sort,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    try {
      const res = await axios.get(apiUrl.itemSearch(), { params: data })
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error()
    }
  }

  public getItem = async (args: { itemCode: string }): Promise<Result> => {
    const { itemCode } = args

    const data = {
      itemCode: itemCode,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    try {
      const res = await axios.get(apiUrl.itemSearch(), { params: data })
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error()
    }
  }

  public genreSearch = async (args: { genreId: string }): Promise<Genre> => {
    const { genreId } = args

    const data = {
      genreId: genreId,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    try {
      const res = await axios.get(apiUrl.genreSearch(), { params: data })
      return res.data
    } catch (error) {
      console.error(error)
      throw new Error()
    }
  }
}
export const apiUtil = new ApiUtil()
