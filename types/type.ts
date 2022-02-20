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
  readonly Items: [
    Item: {
      Item: Item
    },
  ]
  readonly carrier: number
  readonly count: number
  readonly first: number
  readonly hits: number
  readonly last: number
  readonly page: number
  readonly pageCount: number
}

export type Item = {
  readonly affiliateRate: number
  readonly affiliateUrl: string
  readonly asurakuArea: string
  readonly asurakuClosingTime: string
  readonly asurakuFlag: number
  readonly availability: number
  readonly catchcopy: string
  readonly creditCardFlag: number
  readonly endTime: string
  readonly genreId: string
  readonly giftFlag: number
  readonly imageFlag: number
  readonly itemCaption: string
  readonly itemCode: string
  readonly itemName: string
  readonly itemPrice: number
  readonly itemUrl: string
  readonly mediumImageUrls: [{ imageUrl: string }]
  readonly pointRate: number
  readonly pointRateEndTime: string
  readonly pointRateStartTime: string
  readonly postageFlag: number
  readonly reviewAverage: number
  readonly reviewCount: number
  readonly shipOverseasArea: string
  readonly shipOverseasFlag: number
  readonly shopAffiliateUrl: string
  readonly shopCode: string
  readonly shopName: string
  readonly shopOfTheYearFlag: number
  readonly shopUrl: string
  readonly smallImageUrls: [{ imageUrl: string }]
  readonly startTime: string
  readonly tagIds: number[]
  readonly taxFlag: number
}

export type PresenterProps = ResultProps & SearchProps

export type SearchProps = {
  onSearchSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>
  control: Control<FormData, object>
  errors: Error
  setSearchDetailOpen: (value: React.SetStateAction<boolean>) => void
  valuetext: (value: number) => string
  isPriceInValid: boolean
  selectItem: {
    value: number
    text: string
  }[]
  isValid: boolean
  sortItems: {
    value: string
    text: string
  }[]
  getValues: <T>(name: T) => number
  searchResultCount?: any
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void
}

export type ResultProps = {
  itemLinkClick: (item: Item) => void
}

export type Error = {
  keyword?: FieldError | undefined
  minPrice?: FieldError | undefined
  maxPrice?: FieldError | undefined
  postageFlag?: FieldError | undefined
  asurakuFlag?: FieldError | undefined
  sort?: FieldError | undefined
}
