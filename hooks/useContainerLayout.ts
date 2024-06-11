'use client'
import { useIsDesktop } from '@hooks/useIsDesktop'
import { DRAWER_WIDTH } from '@utils/constants/theme'

export const useContainerLayout = () => {
  const isDesktop = useIsDesktop()
  const boxWidth = isDesktop ? `w-[calc(100%-${DRAWER_WIDTH})]` : 'w-full'
  const boxMargin = isDesktop ? 14 : 6

  return { boxWidth, boxMargin }
}
