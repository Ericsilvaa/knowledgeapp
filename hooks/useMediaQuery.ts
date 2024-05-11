'use client'
import { useEffect, useState } from 'react'

export const useMediaQuery = (query: string) => {
  const [matches, setMatches] = useState(false)

  useEffect(() => {
    const mediaQuery = window.matchMedia(query)
    console.log('🚀 ~ useEffect ~ mediaQuery:', mediaQuery)

    const handleMediaQueryChange = (event: MediaQueryListEvent) => {
      setMatches(event.matches)
    }

    mediaQuery.addListener(handleMediaQueryChange)
    setMatches(mediaQuery.matches)

    return () => {
      mediaQuery.removeListener(handleMediaQueryChange)
    }
  }, [query])

  return matches
}
