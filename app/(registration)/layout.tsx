'use client'
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
  const { boxWidth } = useContainerLayout()
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const { progressMap } = useProgressMap(combinedProgressMap)

  const hideProgressBar = true
  const hideBackButton = false

  return (
    <main className='flex h-screen'>
      <SideBarBase
        showLogo={!isDesktop}
        showReturnButton={!isDesktop && hideBackButton}
      />

      <section className='flex-1 flex flex-col h-full'>
        {!hideProgressBar &&
          (!isDesktop ? (
            <p>ProgressBar</p>
          ) : (
            <div className='h-28 bg-slate-400'>
              <p>DesktopProgressBar</p>
            </div>
          ))}

        <section className={`${boxWidth} h-full`}>{children}</section>
      </section>
    </main>
  )
}
