'use client'
import { useEffect, useState, type ReactNode } from 'react'

export const Hydration = ({ children }: { children: ReactNode }) => {
  const [isHydrated, setIsHydrated] = useState(false)

  // Wait till Next.js rehydration completes
  useEffect(() => {
    setIsHydrated(true)
  }, [])

  return <>{isHydrated ? <div className='h-screen'>{children}</div> : null}</>
}
