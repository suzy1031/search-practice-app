import Head from 'next/head'
import React, { FC, memo } from 'react'

import { Box } from '@mui/material'

import AppRoot from '../layout/AppRoot'
import SearchField from './SearchField'
import SearchResult from './SearchResult'

import { PresenterProps } from '../../types/type'

/*
 * 無名関数から普通の名前付き関数にする
 * memo化するとComponent definition is missing display nameとlintエラー
 */
const Presenter: FC<PresenterProps> = memo(function Presenter({
  onSearchSubmit,
  control,
  errors,
  setSearchDetailOpen,
  valuetext,
  isPriceInValid,
  selectItem,
  isValid,
  sortItems,
  getValues,
  searchResultCount,
  handlePage,
  itemLinkClick,
}) {
  return (
    <>
      <Head>
        <title>Search Practice App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <AppRoot>
        <Box>
          <SearchField
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
            handlePage={handlePage}
          />
        </Box>
        <Box className="mt-3 flex justify-end">{searchResultCount()}</Box>
        <Box className="relative my-3 flex-grow">
          <Box className="w-full overflow-hidden">
            <SearchResult itemLinkClick={itemLinkClick} />
          </Box>
        </Box>
      </AppRoot>
    </>
  )
})
export default Presenter
