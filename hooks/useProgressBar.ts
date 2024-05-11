'use client'
import { useState } from 'react'

const useProgressMap = (initialProgressMap: Record<string, number>) => {
  const [progressMap, setProgressMap] = useState(initialProgressMap)

  const updateProgressMap = (newProgressMap: Record<string, number>) => {
    setProgressMap(newProgressMap)
  }

  return { progressMap, updateProgressMap }
}

export default useProgressMap
