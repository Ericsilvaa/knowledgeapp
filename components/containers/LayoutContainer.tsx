import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
  session?: any
}

function LayoutContainer({ children, session }: LayoutProps) {
  return (
    <main
      className={`flex h-full w-full items-center justify-center bg-secondary-light ${
        !session ? 'pt-0' : 'pb-2 pt-16'
      } dark:bg-secondary-dark`}
    >
      {children}
    </main>
  )
}

export default LayoutContainer
