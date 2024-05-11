'use client'

import LayoutContainer from '@components/containers/LayoutContainer'
import { type ReactNode } from 'react'

interface LayoutProps {
  children: ReactNode
}

const Layout = ({ children }: LayoutProps) => {
  // const { data: session } = useSession()
  // const { isOpen, closeModal } = useModalForm()

  return (
    <>
      {/* <Toast /> */}
      {/* {session && <Header />}
      {session && <Sidebar />} */}
      <LayoutContainer session={''}>{children}</LayoutContainer>
    </>
  )
}

export default Layout
