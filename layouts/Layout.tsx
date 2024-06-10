import { MAX_CONTENT_WIDTH } from '@utils/constants/theme'
import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const BaseLayout = ({ children }: LayoutProps) => {
  return <main className={`h-screen w-[${MAX_CONTENT_WIDTH}]`}>{children}</main>
}

export default BaseLayout
