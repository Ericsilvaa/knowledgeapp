import {
  useDispatch,
  useSelector,
  type TypedUseSelectorHook
} from 'react-redux'
import { type AppDispatch, type RootState } from './types'

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
