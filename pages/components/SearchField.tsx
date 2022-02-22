import React, { FC, memo } from 'react'
import { Controller } from 'react-hook-form'
import { useRecoilValue } from 'recoil'
import { dialogAtom, pageAtom, resultAtom } from '../../recoil/states'

import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  IconButton,
  InputAdornment,
  ListItemText,
  MenuItem,
  Pagination,
  Radio,
  RadioGroup,
  Select,
  Slider,
  TextField,
  Typography,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search'

import { SearchProps } from '../../types/type'

const SearchField: FC<SearchProps> = memo(function SearchField({
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
}) {
  const searchResult = useRecoilValue(resultAtom)!
  const currentPage = useRecoilValue(pageAtom)!
  const searchDetailOpen = useRecoilValue(dialogAtom)!

  return (
    <form action="./" onSubmit={onSearchSubmit}>
      <Controller
        name="keyword"
        control={control}
        rules={{
          required: 'required',
        }}
        defaultValue=""
        render={({ field }) => (
          <TextField
            type="search"
            fullWidth
            {...field}
            error={errors.keyword && true}
            margin="dense"
            size="small"
            variant="outlined"
            color="primary"
            placeholder="商品の検索"
            id="item-search-input"
            helperText={
              <>
                {errors.keyword?.type === 'required' &&
                  '検索条件を入力してください。'}
              </>
            }
            InputProps={{
              endAdornment: (
                <InputAdornment className="my-0 py-0" position="end">
                  <IconButton type="submit">
                    <SearchIcon />
                  </IconButton>
                </InputAdornment>
              ),
              className: 'pr-0',
            }}
          />
        )}
      />
      {searchDetailOpen ? (
        <Box className="grid grid-cols-12">
          <Box
            onClick={() => setSearchDetailOpen(false)}
            className="col-span-12 cursor-pointer"
          >
            <Typography
              color="primary"
              className="underline underline-offset-4"
            >
              閉じる
            </Typography>
          </Box>
          <Box className="col-span-6 m-3">
            <Typography>
              {getValues('minPrice').toLocaleString()}円から
            </Typography>
            <Controller
              name="minPrice"
              control={control}
              render={({ field }) => (
                <>
                  <Slider
                    {...field}
                    aria-label="Temperature"
                    defaultValue={0}
                    getAriaValueText={valuetext}
                    valueLabelDisplay="off"
                    step={1000}
                    min={0}
                    max={50000}
                  />
                </>
              )}
            />
          </Box>
          <Box className="col-span-6 m-3">
            <Typography>
              {getValues('maxPrice').toLocaleString()}円まで
            </Typography>
            <Controller
              name="maxPrice"
              control={control}
              render={({ field }) => (
                <Slider
                  {...field}
                  aria-label="Temperature"
                  defaultValue={0}
                  getAriaValueText={valuetext}
                  valueLabelDisplay="off"
                  step={1000}
                  min={0}
                  max={50000}
                />
              )}
            />
          </Box>
          <Box className="col-span-6 mx-3">
            {isPriceInValid && (
              <Typography color="error">
                価格設定が適切ではありません
              </Typography>
            )}
          </Box>
          <Box className="col-span-12 m-3">
            <Typography>送料</Typography>
            <Controller
              control={control}
              name="postageFlag"
              render={({ field: { onChange } }) => (
                <RadioGroup
                  row
                  defaultValue={0}
                  onChange={(e) => {
                    onChange(e.target.value)
                  }}
                >
                  <FormControlLabel
                    value={0}
                    control={<Radio />}
                    label="すべての商品"
                  />
                  <FormControlLabel
                    value={1}
                    control={<Radio />}
                    label="送料無料"
                  />
                </RadioGroup>
              )}
            />
          </Box>
          <Box className="col-span-12 m-3">
            <Typography className="pb-2">翌日配送</Typography>
            <Controller
              name="asurakuFlag"
              control={control}
              render={({ field }) => (
                <FormControl size="small" fullWidth>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    {selectItem.map((item, index) => (
                      <MenuItem key={index} value={item.value}>
                        <ListItemText
                          primary={item.text}
                          disableTypography
                        ></ListItemText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </Box>
      ) : (
        <Box className="grid grid-cols-12">
          <Box
            onClick={() => setSearchDetailOpen(true)}
            className="col-span-12 cursor-pointer"
          >
            <Typography
              color="primary"
              className="underline underline-offset-4"
            >
              詳しい検索
            </Typography>
          </Box>
        </Box>
      )}

      <Box className="my-3 flex justify-center">
        <Button
          variant="contained"
          color="primary"
          type="submit"
          disabled={!isValid || isPriceInValid}
        >
          検索
        </Button>
      </Box>
      {searchResult && (
        <>
          <Box className="flex items-center justify-end">
            <Typography className="px-3">並べ替え</Typography>
            <Controller
              name="sort"
              control={control}
              render={({ field }) => (
                <FormControl size="small" sx={{ minWidth: 100, maxWidth: 150 }}>
                  <Select
                    {...field}
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                  >
                    {sortItems.map((item, index) => (
                      <MenuItem key={index} value={item.value}>
                        <ListItemText
                          primary={item.text}
                          disableTypography
                        ></ListItemText>
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              )}
            />
          </Box>
        </>
      )}
    </form>
  )
})
export default SearchField
