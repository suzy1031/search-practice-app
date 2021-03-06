import React, { useCallback } from 'react'
import { useForm } from 'react-hook-form'
import type { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import {
  formDataAtom,
  resultAtom,
  dialogAtom,
  pageAtom,
} from '../recoil/states'
import { SelectChangeEvent } from '@mui/material'

import { FormData, Item } from '../types/type'
import Presenter from './components/Presenter'
import { apiUtil } from '../utils/ApiUtil'

const Container: NextPage = () => {
  // 検索結果
  const [result, setResult] = useRecoilState(resultAtom)
  // 入力されたフォームデータ
  const [formData, setFormData] = useRecoilState(formDataAtom)
  // 詳しい検索
  const [, setSearchDetailOpen] = useRecoilState(dialogAtom)
  // ページネーション
  const [currentPage, setCurrentPage] = useRecoilState(pageAtom)

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

    const itemsRes = await apiUtil.searchItems({ params: data, page: 1 })
    setResult(itemsRes)
    setCurrentPage(1)
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

  // 並び替え
  const sortItems = [
    { value: '-updateTimestamp', text: '新着順' },
    { value: '-reviewAverage', text: 'レビュー評価順' },
    { value: '+itemPrice', text: '安い順' },
    { value: '-itemPrice', text: '高い順' },
  ]

  // ページネーション
  const handlePage = useCallback(
    async (event: React.ChangeEvent<unknown>, page: number) => {
      const itemsRes = await apiUtil.searchItems({
        params: formData,
        page: page,
      })
      setResult(itemsRes)
      setCurrentPage(page)
    },
    [formData, setCurrentPage, setResult],
  )

  // ソート
  const handleChange = useCallback(
    async (e: SelectChangeEvent<string>) => {
      const sort = e.target.value
      const params = { ...formData, sort: sort }
      // globalで保持するstateを更新
      setFormData({ ...params, sort: sort })
      const itemsRes = await apiUtil.searchItems({ params: params, page: 1 })
      setResult(itemsRes)
      setCurrentPage(1)
    },
    [formData, setCurrentPage, setFormData, setResult],
  )

  const router = useRouter()
  // 商品詳細
  const itemLinkClick = (item: Item): void => {
    router.push({
      pathname: '/item',
      query: { itemCode: item.itemCode, genreId: item.genreId },
    })
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
      currentPage={currentPage}
      handlePage={handlePage}
      itemLinkClick={itemLinkClick}
      result={result}
      handleChange={handleChange}
    />
  )
}

export default Container
