import { atom } from 'recoil'
import { FormData, Item, Result } from '../types/type'

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
  item = 'itemKey',
  result = 'resultKey',
  searchDialogOpen = 'searchDialogOpenKey',
  currentPage = 'currentPageKey',
}

export const formDataAtom = atom({
  key: AtomKey.formData,
  default: initFormData,
})

export const itemAtom = atom({
  key: AtomKey.item,
  default: null as null | Item,
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
