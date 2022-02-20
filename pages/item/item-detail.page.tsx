import { NextPage } from 'next'
import { useRouter } from 'next/router'
import { useRecoilValue } from 'recoil'
import { itemAtom } from '../../recoil/states'

import { Button } from '@mui/material'

const ItemDetail: NextPage = () => {
  const router = useRouter()
  const item = useRecoilValue(itemAtom)!
  console.log('detail page', item)

  return (
    <>
      <h1>これは商品の詳細ページです</h1>
      <Button onClick={() => router.back()}>戻る</Button>
    </>
  )
}
export default ItemDetail
