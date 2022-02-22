import { Box, Pagination } from '@mui/material'
import { FC, memo } from 'react'
import { PageNationProps } from '../../types/type'

const PageNation: FC<PageNationProps> = memo(function PageNation({
  currentPage,
  handlePage,
}) {
  return (
    <Box className="flex justify-center">
      <Pagination
        count={100}
        color="primary"
        showFirstButton
        showLastButton
        onChange={handlePage}
        page={currentPage}
      />
    </Box>
  )
})
export default PageNation
