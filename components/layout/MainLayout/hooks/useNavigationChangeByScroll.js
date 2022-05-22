import { useEffect, useRef, useState } from 'react'

export default function useNavigationChangeByScroll({ enabled }) {
  const navRef = useRef(null)
  const [passingOverVideo, setPassingOverVideo] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      const documentTopPosition = Math.abs(document.documentElement.getClientRects()[0].top)
      const windowHeight = window.innerHeight

      if (documentTopPosition < windowHeight) {
        setPassingOverVideo(true)
      } else {
        setPassingOverVideo(false)
      }
    }
    document.addEventListener('scroll', handleScroll)
    handleScroll()
    return () => {
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return {
    passingOverVideo: passingOverVideo && enabled,
    navRef
  }
}