import React, { FC } from 'react'
import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import { Result } from '../../types/type'

const SearchResult: FC<{ result: Result | undefined }> = ({ result }) => {
  return (
    <>
      {result && result.Items.length >= 1 ? (
        result.Items.map((item, index) => (
          <React.Fragment key={index}>
            <Box className="mx-2 grid grid-cols-12">
              <Box className="col-span-3">
                <Image
                  src={
                    item.Item.mediumImageUrls[0]
                      ? item.Item.mediumImageUrls[0].imageUrl
                      : '/images/noimage.png'
                  }
                  alt={
                    item.Item.mediumImageUrls[0]
                      ? item.Item.mediumImageUrls[0].imageUrl
                      : '/images/noimage.png'
                  }
                  width={128}
                  height={128}
                />
              </Box>
              <Box className="col-span-9 grid place-items-center pr-2">
                <Box className="w-full">
                  <Typography variant="subtitle2" className="truncate">
                    {item.Item.itemName}
                  </Typography>
                  <Typography variant="h6" color="error">
                    {item.Item.itemPrice.toLocaleString()}円
                  </Typography>
                </Box>
              </Box>
            </Box>
          </React.Fragment>
        ))
      ) : (
        <Box className="flex flex-col items-center" sx={{ marginTop: `10vh` }}>
          <Typography variant="subtitle2">該当がありません</Typography>
          <Typography variant="body2">
            絞り込みの条件を変えて試してください。
          </Typography>
        </Box>
      )}
    </>
  )
}
export default SearchResult
