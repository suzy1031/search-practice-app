export type FormData = {
  keyword: string
  minPrice: number
  maxPrice: number
}

export type Result = {
  Items: [
    Item: {
      Item: Item
    },
  ]
  carrier: number
  count: number
  first: number
  hits: number
  last: number
  page: number
  pageCount: number
}

type Item = {
  affiliateRate: number
  affiliateUrl: string
  asurakuArea: string
  asurakuClosingTime: string
  asurakuFlag: number
  availability: number
  catchcopy: string
  creditCardFlag: number
  endTime: string
  genreId: string
  giftFlag: number
  imageFlag: number
  itemCaption: string
  itemCode: string
  itemName: string
  itemPrice: number
  itemUrl: string
  mediumImageUrls: [{ imageUrl: string }]
  pointRate: number
  pointRateEndTime: string
  pointRateStartTime: string
  postageFlag: number
  reviewAverage: number
  reviewCount: number
  shipOverseasArea: string
  shipOverseasFlag: number
  shopAffiliateUrl: string
  shopCode: string
  shopName: string
  shopOfTheYearFlag: number
  shopUrl: string
  smallImageUrls: [{ imageUrl: string }]
  startTime: string
  tagIds: number[]
  taxFlag: number
}
