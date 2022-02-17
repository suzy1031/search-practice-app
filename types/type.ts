import { Control, FieldError } from 'react-hook-form'

export type FormData = {
  keyword: string
  minPrice: number
  maxPrice: number
  postageFlag: string
  asurakuFlag: number
  sort: string
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

export type Props = {
  onSearchSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>
  control: Control<FormData, object>
  errors: Error
  searchDetailOpen: boolean
  setSearchDetailOpen: (value: React.SetStateAction<boolean>) => void
  valuetext: (value: number) => string
  isPriceInValid: boolean
  selectItem: {
    value: number
    text: string
  }[]
  isValid: boolean
  result: Result | undefined
  sortItems: {
    value: string
    text: string
  }[]
  getValues: <T>(name: T) => number
  searchResultCount?: any
}

export type Error = {
  keyword?: FieldError | undefined
  minPrice?: FieldError | undefined
  maxPrice?: FieldError | undefined
  postageFlag?: FieldError | undefined
  asurakuFlag?: FieldError | undefined
  sort?: FieldError | undefined
}
