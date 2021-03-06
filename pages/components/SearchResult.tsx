import React, { FC, memo } from 'react'
import Image from 'next/image'

import { Box, Typography } from '@mui/material'

import { ResultProps } from '../../types/type'

const SearchResult: FC<ResultProps> = memo(function SearchResult({
  result,
  itemLinkClick,
}) {
  return (
    <>
      {result && (
        <Box className="mt-3 flex justify-end">
          <Typography>
            {result.first} ~ {result.last} ({result.count.toLocaleString()}件)
          </Typography>
        </Box>
      )}
      <Box className="relative my-3 flex-grow">
        <Box className="w-full overflow-hidden">
          {result && result.Items.length >= 1 ? (
            result.Items.map((item, index) => (
              <React.Fragment key={index}>
                <Box
                  className="cursor-pointer"
                  onClick={() => itemLinkClick(item.Item)}
                >
                  <a>
                    <Box className="mx-2 grid grid-cols-12">
                      <Box className="col-span-3">
                        {/* TODO: item.Item.mediumImageUrls[0]でimageが取得できないバグ修正 */}
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
                  </a>
                </Box>
              </React.Fragment>
            ))
          ) : (
            <Box
              className="flex flex-col items-center"
              sx={{ marginTop: `10vh` }}
            >
              <Typography variant="subtitle2">該当がありません</Typography>
              <Typography variant="body2">
                絞り込みの条件を変えて試してください。
              </Typography>
            </Box>
          )}
        </Box>
      </Box>
    </>
  )
})
export default SearchResult
