import Head from 'next/head'
import { NextPage } from 'next'
import { useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { useRecoilState } from 'recoil'
import { genreAtom } from '../../recoil/states'

import { Box, Breadcrumbs, Button, Link, Typography } from '@mui/material'
import HomeIcon from '@mui/icons-material/Home'
import WhatshotIcon from '@mui/icons-material/Whatshot'
import GrainIcon from '@mui/icons-material/Grain'

import AppRoot from '../layout/AppRoot'

import { Genre, GenreProps, Item } from '../../types/type'
import { apiUtil } from '../../utils/ApiUtil'

const ItemPage: NextPage = () => {
  const router = useRouter()
  const itemCode = router.query.itemCode
  const genreId = router.query.genreId

  const [item, setItem] = useState<Item>()
  const [genre, setGenre] = useState<Genre>()

  const [selectedGenre, setSelectedGenre] = useRecoilState(genreAtom)

  useEffect(() => {
    if (typeof itemCode !== 'undefined') {
      const itemCodeStr = itemCode.toString()
      const func = async () => {
        const itemRes = await apiUtil.getItem({ itemCode: itemCodeStr })
        setItem(itemRes.Items[0].Item)
      }

      func()
    }

    if (typeof genreId !== 'undefined') {
      const genreIdStr = genreId.toString()
      const func = async () => {
        const genreRes = await apiUtil.genreSearch({ genreId: genreIdStr })
        setGenre(genreRes)
      }
      func()
    }
  }, [genreId, itemCode])
  // console.log('item state', item)
  // console.log('genre state', genre)

  const handleGenreSearch = (genre: GenreProps): void => {
    // console.log(genre)
    setSelectedGenre(genre)
    router.push('/genre')
  }
  // console.log('global genre state', selectedGenre)

  return (
    <>
      <Head>
        <title>Search Practice App | 詳細</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <AppRoot>
        {genre && (
          <>
            <Box className="mb-3">
              <div role="presentation">
                <Breadcrumbs aria-label="breadcrumb">
                  <Link underline="hover" color="inherit" href="/">
                    <HomeIcon sx={{ mr: 0.5, mb: 0.5 }} fontSize="inherit" />
                    ホーム
                  </Link>
                  <Typography>
                    <WhatshotIcon
                      sx={{ mr: 0.5, mb: 0.5 }}
                      fontSize="inherit"
                    />
                    {genre.parents[0].parent.genreName}
                  </Typography>
                  <Typography color="text.primary">
                    <GrainIcon sx={{ mr: 0.5, mb: 0.5 }} fontSize="inherit" />
                    {genre.current.genreName}
                  </Typography>
                </Breadcrumbs>
              </div>
            </Box>
            <Box className="mb-3">
              <Typography variant="h6">カテゴリー</Typography>
              {genre.parents.map((parent, index) => (
                <Box key={index} className="mx-1">
                  <Button
                    size="small"
                    variant="text"
                    color="inherit"
                    onClick={() => handleGenreSearch(parent.parent)}
                  >
                    {parent.parent.genreName}
                  </Button>
                </Box>
              ))}
            </Box>
            <Box className="mb-10">
              <Typography variant="h6">関連カテゴリー</Typography>
              {genre.brothers.map((brother, index) => (
                <Button
                  key={index}
                  variant="outlined"
                  color="secondary"
                  size="small"
                  sx={{ marginLeft: 1, marginBottom: 1 }}
                  onClick={() => handleGenreSearch(brother.brother)}
                >
                  {brother.brother.genreName}
                </Button>
              ))}
            </Box>
          </>
        )}
        {item && (
          <>
            <Typography color="primary">{item.itemName}</Typography>
            <Typography>の詳細ページです</Typography>
            <Box className="my-3 flex justify-center">
              <Button variant="outlined" onClick={() => router.back()}>
                戻る
              </Button>
            </Box>
          </>
        )}
      </AppRoot>
    </>
  )
}
export default ItemPage
