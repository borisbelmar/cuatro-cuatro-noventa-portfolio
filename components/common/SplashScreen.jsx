import { motion, useAnimation } from 'framer-motion'
import { useEffect, useRef } from 'react'
import Logo from './Logo'
import ProgressBar from './ProgressBar'

export default function SplashScreen () {
  const ref = useRef(null)
  const controls = useAnimation()
  useEffect(() => {
    controls.start({
      opacity: 0,
      transition: { duration: 0.5, ease: 'easeInOut', delay: 0.5 }
    }).then(() => {
      ref.current.style.display = 'none'
    })
  }, [controls])

  return (
    <motion.div
      ref={ref}
      animate={controls}
      className="fixed z-50 top-0 left-0 h-screen w-full bg-white flex items-center justify-center flex-col"
    >
      <div className="h-16 mb-16">
        <Logo />
      </div>
      <div className="w-48">
        <ProgressBar />
      </div>
    </motion.div>
  )
}