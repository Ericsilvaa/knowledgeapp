'use client'
import ContactUsFooter from '@components/Footer'
import HeaderBase from '@components/Headers/HeaderBase'
import { useContainerLayout } from '@hooks/useContainerLayout'
import { useIsDesktop } from '@hooks/useIsDesktop'
import useProgressMap from '@hooks/useProgressBar'
import { combinedProgressMap } from '@utils/pathsProgressMap'

export default function RegistrationLayout({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  const isDesktop = useIsDesktop()
  const { boxMargin, boxWidth } = useContainerLayout()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { progressMap } = useProgressMap(combinedProgressMap)

  const hideProgressBar = true
  const hideBackButton = false
  const hideFooter = false

  return (
    <main className=''>
      {isDesktop && <p>DesktopProgressBar</p>}

      {!hideProgressBar &&
        (!isDesktop ? (
          <p>ProgressBar</p>
        ) : (
          <div>
            <p>DesktopProgressBar</p>
          </div>
        ))}

      <HeaderBase
        showLogo={!isDesktop}
        showReturnButton={!isDesktop && hideBackButton}
      />

      <section
        className={`px-[${isDesktop ? 10 : 2}] ml-[${isDesktop && boxMargin}] my-2 pb-8 flex-1 w-[${boxWidth}] bg-red-400`}
      >
        {children}
      </section>

      {!hideFooter && <ContactUsFooter />}
    </main>
  )
}
