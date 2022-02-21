class ApiUrl {
  static readonly API_BASE_URL: string =
    'https://app.rakuten.co.jp/services/api'

  public itemSearch = (): string => {
    return `${ApiUrl.API_BASE_URL}/IchibaItem/Search/20170706?format=json`
  }

  public genreSearch = (): string => {
    return `${ApiUrl.API_BASE_URL}/IchibaGenre/Search/20140222?format=json`
  }
}
export const apiUrl = new ApiUrl()
