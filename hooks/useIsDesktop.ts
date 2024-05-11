'use client'
import { MEDIA_QUERIES_BREAKPOINTS } from '@utils/constants/theme'
import { useMediaQuery } from './useMediaQuery'

export const useIsDesktop = (): boolean => {
  const isDesktop = useMediaQuery(
    `(min-width: ${MEDIA_QUERIES_BREAKPOINTS.md}px)`
  )
  return isDesktop
}

export const useIsMobile = (): boolean => {
  const isMobile = useMediaQuery(
    `(max-width: ${MEDIA_QUERIES_BREAKPOINTS.md}px)`
  )
  return isMobile
}
