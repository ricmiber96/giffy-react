import { useRef, useEffect, useState } from 'react'

export default function useNearScreen () {
  const [isNearScreen, setShow] = useState(false)
  const elementRef = useRef()

  const onChange = (entries, observer) => {
    const element = entries[0]
    if (element.isIntersecting) {
      setShow(true)
      observer.disconnect()
    }
  }

  useEffect(() => {
    const observer = new IntersectionObserver(onChange, {
      rootMargin: '100px'
    })
    observer.observe(elementRef.current)
    return () => observer.disconnect()
  })

  return { isNearScreen, elementRef }
}
