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
    {
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

export type PresenterProps = ResultProps & SearchProps & PageNationProps

export type SearchProps = {
  control: Control<FormData, object>
  errors: Error
  isPriceInValid: boolean
  selectItem: Options
  isValid: boolean
  sortItems: Options
  onSearchSubmit: (
    e?: React.BaseSyntheticEvent<object, any, any> | undefined,
  ) => Promise<void>
  setSearchDetailOpen: (value: React.SetStateAction<boolean>) => void
  valuetext: (value: number) => string
  getValues: <T>(name: T) => number
}

export type ResultProps = {
  result: Result | undefined
  itemLinkClick: (item: Item) => void
}

export type PageNationProps = {
  currentPage: number
  handlePage: (event: React.ChangeEvent<unknown>, page: number) => void
}

export type Error = {
  keyword?: FieldError | undefined
  minPrice?: FieldError | undefined
  maxPrice?: FieldError | undefined
  postageFlag?: FieldError | undefined
  asurakuFlag?: FieldError | undefined
  sort?: FieldError | undefined
}

type Options = {
  value: string | number
  text: string
}[]

export type Genre = {
  readonly brothers: [
    {
      brother: GenreProps
    },
  ]
  readonly children: []
  readonly current: GenreProps
  readonly parents: [
    {
      parent: GenreProps
    },
  ]
  readonly tagGroups: [
    {
      tagGroup: {
        tagGroupId: number
        tagGroupName: string
        tags: [
          {
            tag: {
              parentTagId: number
              tagId: number
              tagName: string
            }
          },
        ]
      }
    },
  ]
}

export type GenreProps = {
  genreId: number
  genreLevel: number
  genreName: string
}
