import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const BaseLayout = ({ children }: LayoutProps) => {
  return <main className='h-screen'>{children}</main>
}

export default BaseLayout
