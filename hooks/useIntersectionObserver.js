import { useRef, useEffect } from 'react'

export default function useIntersectionObserver (nodeRef, {
  onIntersecting,
  thresold = 0.5,
}) {
  useEffect(() => {
    try {
      const nodeRefToObserve = nodeRef.current
      const observer = new IntersectionObserver(entries => {
        if (entries[0].isIntersecting) {
          onIntersecting()
        }
      }, { threshold: thresold })
      observer.observe(nodeRefToObserve)
    } catch {
      console.error('useIntersectionObserver is not supported in this browser')
    }
    return () => {
      observer.unobserve(nodeRefToObserve)
    }
  }, [nodeRef, onIntersecting, thresold])
}