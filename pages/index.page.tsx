import React, { useCallback, useState } from 'react'
import { useForm } from 'react-hook-form'
import type { NextPage } from 'next'
import axios from 'axios'

import Typography from '@mui/material/Typography'

import encodeFreeWord from '../utils/encodedUtil'
import { BASE_URL } from '../constants/constants'
import { FormData, Result } from '../types/type'
import Presenter from './components/Presenter'

const Container: NextPage = () => {
  // 検索結果
  const [result, setResult] = useState<Result>()
  // 入力されたフォームデータ
  const [formData, _] = useState<FormData>({
    keyword: '',
    minPrice: 0,
    maxPrice: 0,
    postageFlag: '0',
    asurakuFlag: 0,
    sort: '-updateTimestamp',
  })
  // 詳しい検索
  const [searchDetailOpen, setSearchDetailOpen] = useState(false)

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
    console.log('form data', data)

    const encodedFreeWord = encodeFreeWord(data.keyword)
    const encodedSort = encodeURI(data.sort)

    // TODO: 他の検索条件を実装後にhook化する
    const func = async () => {
      try {
        axios
          .get(`${BASE_URL}`, {
            params: {
              keyword: encodedFreeWord,
              minPrice: data.minPrice,
              maxPrice: data.maxPrice,
              postageFlag: data.postageFlag,
              asurakuFlag: data.asurakuFlag,
              page: 1,
              sort: encodedSort,
              applicationId: process.env.NEXT_PUBLIC_KEY,
            },
          })
          .then((response) => {
            setResult(response.data)
          })
          .catch((error) => console.log(error))
      } catch (error) {
        console.log('error')
      }
    }
    func()
  })
  console.log('result', result)

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

  return (
    <Presenter
      onSearchSubmit={onSearchSubmit}
      control={control}
      errors={errors}
      searchDetailOpen={searchDetailOpen}
      setSearchDetailOpen={setSearchDetailOpen}
      valuetext={valuetext}
      isPriceInValid={isPriceInValid}
      selectItem={selectItem}
      isValid={isValid}
      result={result}
      sortItems={sortItems}
      getValues={getValues}
      searchResultCount={searchResultCount}
    />
  )
}

export default Container
