import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import type { NextPage } from 'next'
import axios from 'axios'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {
  formDataAtom,
  itemAtom,
  resultAtom,
  dialogAtom,
  pageAtom,
} from '../recoil/states'

import Typography from '@mui/material/Typography'

import { BASE_URL } from '../constants/constants'
import { FormData, Item } from '../types/type'
import Presenter from './components/Presenter'

const Container: NextPage = () => {
  // 検索結果
  const [result, setResult] = useRecoilState(resultAtom)
  // 入力されたフォームデータ
  const [formData, setFormData] = useRecoilState(formDataAtom)
  // 詳しい検索
  const [searchDetailOpen, setSearchDetailOpen] = useRecoilState(dialogAtom)

  // react-hook-form
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
    getValues,
  } = useForm<FormData>({
    mode: 'all',
    defaultValues: formData,
  })

  const onSearchSubmit = handleSubmit(async (data: FormData): Promise<void> => {
    // console.log('form data', data)

    setFormData(data)

    apiClient(data, 1)
  })
  // console.log('result', result)

  // TODO: エラーハンドリングなど
  const apiClient = async (data: FormData, page: number) => {
    try {
      await axios
        .get(`${BASE_URL}`, {
          params: {
            keyword: data.keyword,
            minPrice: data.minPrice,
            maxPrice: data.maxPrice,
            postageFlag: data.postageFlag,
            asurakuFlag: data.asurakuFlag,
            page: page,
            sort: data.sort,
            applicationId: process.env.NEXT_PUBLIC_KEY,
          },
        })
        .then((response) => {
          setResult(response.data)
          // ページネーション初期化
          setCurrentPage(page)
        })
        .catch((error) => console.log(error))
    } catch (error) {
      console.log('error')
    }
  }

  // 価格
  const watchMin = watch('minPrice')
  const watchMax = watch('maxPrice')
  const isPriceInValid = watchMin > watchMax

  const valuetext = (value: number) => {
    return `${value}`
  }

  // 翌日配送
  const selectItem = [
    { value: 0, text: '設定しない' },
    { value: 1, text: '翌日配送' },
  ]

  // 検索結果の件数
  const searchResultCount = useCallback(() => {
    const first = result?.first
    const last = result?.last
    const totalCount = result?.count
    if (result) {
      return (
        <Typography>
          {first} ~ {last}（{totalCount?.toLocaleString()}件）
        </Typography>
      )
    } else {
      return null
    }
  }, [result])

  // 並び替え
  const sortItems = [
    { value: '-updateTimestamp', text: '新着順' },
    { value: '-reviewAverage', text: 'レビュー評価順' },
    { value: '+itemPrice', text: '安い順' },
    { value: '-itemPrice', text: '高い順' },
  ]

  // ページネーション
  const [, setCurrentPage] = useRecoilState(pageAtom)
  const handlePage = (
    event: React.ChangeEvent<unknown>,
    page: number,
  ): void => {
    apiClient(formData, page)
  }

  const router = useRouter()
  const [, setItem] = useRecoilState(itemAtom)
  // 商品詳細
  const itemLinkClick = (item: Item): void => {
    const itemObject = item
    setItem(itemObject)
    router.push('/item/item-detail')
  }

  return (
    <Presenter
      onSearchSubmit={onSearchSubmit}
      control={control}
      errors={errors}
      setSearchDetailOpen={setSearchDetailOpen}
      valuetext={valuetext}
      isPriceInValid={isPriceInValid}
      selectItem={selectItem}
      isValid={isValid}
      sortItems={sortItems}
      getValues={getValues}
      searchResultCount={searchResultCount}
      handlePage={handlePage}
      itemLinkClick={itemLinkClick}
    />
  )
}

export default Container
