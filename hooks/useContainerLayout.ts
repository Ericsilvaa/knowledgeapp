'use client'
import { useIsDesktop } from '@hooks/useIsDesktop'
import { DRAWER_WIDTH } from '@utils/constants/theme'

export const useContainerLayout = () => {
  const isDesktop = useIsDesktop()
  const boxWidth = isDesktop ? `calc(100% - ${DRAWER_WIDTH})` : '100%'
  const boxMargin = isDesktop ? DRAWER_WIDTH : '0'

  return { boxWidth, boxMargin }
}
