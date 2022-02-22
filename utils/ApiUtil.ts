import { fetchUtil } from './FetchUtil'
import { apiUrl } from './ApiUrl'
import { Result, FormData, Genre } from '../types/type'

class ApiUtil {
  public searchItems = async (args: {
    params: FormData
    page: number
  }): Promise<Result> => {
    // Promise<>の型はfetchUtil.get<>と同じ型
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

    const res = await fetchUtil.get<Result>({
      // fetchUtil.get<>の型はPromise<>と同じ型
      url: apiUrl.itemSearch(),
      data,
    })
    return res.data
  }

  public getItem = async (args: { itemCode: string }): Promise<Result> => {
    const { itemCode } = args

    const data = {
      itemCode: itemCode,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    const res = await fetchUtil.get<Result>({ url: apiUrl.itemSearch(), data })
    return res.data
  }

  public getGenreItems = async (args: {
    genreId: number
    page: number
  }): Promise<Result> => {
    const { genreId, page } = args

    const data = {
      genreId: genreId,
      page: page,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    const res = await fetchUtil.get<Result>({ url: apiUrl.itemSearch(), data })
    return res.data
  }

  public genreSearch = async (args: { genreId: string }): Promise<Genre> => {
    const { genreId } = args

    const data = {
      genreId: genreId,
      applicationId: process.env.NEXT_PUBLIC_KEY,
    }

    const res = await fetchUtil.get<Genre>({
      url: apiUrl.genreSearch(),
      data,
    })
    return res.data
  }
}
/* インスタンス化してexportする
 * 呼び出し方
 * apiUtil.method({ args: args })
 */
export const apiUtil = new ApiUtil()
