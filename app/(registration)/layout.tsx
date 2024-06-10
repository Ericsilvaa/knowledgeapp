'use client'
import ContactUsFooter from '@components/Footer'
import SideBarBase from '@components/Headers/HeaderBase'
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
    <main className='flex h-screen'>
      <SideBarBase
        showLogo={!isDesktop}
        showReturnButton={!isDesktop && hideBackButton}
      />

      <section className='flex-1 flex flex-col justify-between h-full'>
        {!hideProgressBar &&
          (!isDesktop ? (
            <p>ProgressBar</p>
          ) : (
            <div className='h-14'>
              <p>DesktopProgressBar</p>
            </div>
          ))}

        <section className={`${boxMargin} ${boxWidth} h-full`}>
          {children}
        </section>

        {!hideFooter && <ContactUsFooter />}
      </section>
    </main>
  )
}
