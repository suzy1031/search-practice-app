const encodeFreeWord = (searchText: string): string => {
  var urlEncode = require('urlencode')
  return urlEncode(searchText)
}
export default encodeFreeWord
