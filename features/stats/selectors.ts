import { type RootState } from '@redux/types'

const getStatsState = (state: RootState) => state.stats

export { getStatsState }
