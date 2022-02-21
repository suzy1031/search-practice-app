import { atom } from 'recoil'
import { FormData, GenreProps, Result } from '../types/type'

const initFormData: FormData = {
  keyword: '',
  minPrice: 0,
  maxPrice: 0,
  postageFlag: '0',
  asurakuFlag: 0,
  sort: '-updateTimestamp',
}

/* globalで一意であること
 * Duplicate atom key "formData". This is a FATAL ERROR in
 * production. But it is safe to ignore this warning if it occurred because of
 * hot module replacement.
 */
enum AtomKey {
  formData = 'formDataKey',
  result = 'resultKey',
  searchDialogOpen = 'searchDialogOpenKey',
  currentPage = 'currentPageKey',
  genre = 'genreKey',
}

export const formDataAtom = atom({
  key: AtomKey.formData,
  default: initFormData,
})

export const resultAtom = atom({
  key: AtomKey.result,
  default: undefined as undefined | Result,
})

export const dialogAtom = atom({
  key: AtomKey.searchDialogOpen,
  default: false,
})

export const pageAtom = atom({
  key: AtomKey.currentPage,
  default: 1,
})

export const genreAtom = atom({
  key: AtomKey.genre,
  default: undefined as undefined | GenreProps,
})
