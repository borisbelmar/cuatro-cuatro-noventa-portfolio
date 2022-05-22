import { useRef, useCallback, useState } from 'react'
import useIntersectionObserver from "hooks/useIntersectionObserver"
import { useAnimation, motion } from 'framer-motion'

export default function ReasonWhy ({ title, subtitle }) {
  const isVisible = useRef(false)
  const nodeRef = useRef(null)

  const hrControls = useAnimation()

  const textControls = useAnimation()

  const handleIntersecting = useCallback(() => {
    if (isVisible.current) return

    isVisible.current = true

    hrControls.start({
      scaleX: [0, 1]
    })

    textControls.start({
      opacity: [0, 1]
    })
    
  }, [hrControls, textControls])

  useIntersectionObserver(nodeRef, { onIntersecting: handleIntersecting })

  return (
    <div
      ref={nodeRef}
      className="px-8 md:px-16 lg:px-40 pt-32 lg:pt-64 pb-16 lg:pb-32 flex flex-col items-center"
    >
      <motion.hr
        animate={hrControls}
        initial={{
          scaleX: 0
        }}
        transition={{
          delay: 0.1,
          duration: 2
        }}
        className="mb-16 lg:mb-32 border-gray-400 w-8/12"
      />
      <motion.div
        animate={textControls}
        initial={{
          opacity: 0
        }}
        transition={{
          delay: 0.1,
          duration: 1.25
        }}
        className="text-center"
      >
        <p className="text-xl md:text-5xl lg:text-7xl mb-16">
          {title}
        </p>
        <p className="text-lg md:text-2xl lg:text-5xl font-light">
          {subtitle}
        </p>
      </motion.div>
      <motion.hr
        animate={hrControls}
        initial={{
          scaleX: 0
        }}
        transition={{
          delay: 0.1,
          duration: 2
        }}
        className="mt-16 lg:mt-32 border-gray-400 w-8/12"
      />
    </div>
  )
}