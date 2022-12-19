import useNearScreen from '@/hooks/useNearScreen'
import React, { Suspense } from 'react'
import Loader from '../Loader/Loader'

const TrendingSearches = React.lazy(
  () => import('./TrendingSearches')
)

export default function LazyTrending () {
  const { isNearScreen, elementRef } = useNearScreen()

  return (
    <div ref={elementRef}>
      <Suspense fallback={<Loader />}>
        {isNearScreen ? <TrendingSearches /> : <Loader />}
      </Suspense>
    </div>
  )
}
