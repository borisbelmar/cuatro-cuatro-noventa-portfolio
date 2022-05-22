import { useAnimation, motion } from "framer-motion"
import { useRef, useCallback, useEffect } from "react"
import useIntersectionObserver from "hooks/useIntersectionObserver"
import Image from "next/image"
import useBreakpoint from "hooks/useBreakpoint"

const getTop = idx => {
  const threeModule = (idx + 1) % 3
  switch (threeModule) {
    case 0:
      return [0, 60, -30]
    case 1:
      return [30, 0, -30]
    case 2:
      return [30, -30, 0]
  }
}

export default function ProjectItem ({ project, idx }) {
  const nodeRef = useRef(null)
  const intersected = useRef(false)
  const controls = useAnimation()

  const { breakpoint, isXlBreakpointOrLarger } = useBreakpoint()

  const handleIntersected = useCallback(() => {
    if (breakpoint === null) return
    if (intersected.current) return
    intersected.current = true

    controls.start({
      top: isXlBreakpointOrLarger ? getTop(idx) : 0,
      opacity: [0, 1],
      marginBottom: isXlBreakpointOrLarger ? 0 : 8
    })
  }, [controls, idx, breakpoint, isXlBreakpointOrLarger])

  useEffect(() => {
    controls.start({
      top: isXlBreakpointOrLarger ? getTop(idx) : 0,
      opacity: intersected.current ? 1 : 0,
      marginBottom: isXlBreakpointOrLarger ? 0 : 8
    })
  }, [idx, controls, isXlBreakpointOrLarger])

  useIntersectionObserver(nodeRef, {
    onIntersecting: handleIntersected
  })
  
  return (
    <motion.div
      animate={controls}
      ref={nodeRef}
      initial={{
        top: 0,
        opacity: 0
      }}
      transition={{
        duration: 0.75
      }}
      className="flex flex-col justify-center items-center relative w-full aspect-[3/4]"
    >
      <Image
        src={project.image}
        alt={project.title}
        layout="fill"
        objectFit="cover"
      />
      <div className="z-10 w-full h-full flex flex-col justify-center text-center text-white px-8 md:px-16 bg-gray-800 bg-opacity-50 hover:bg-opacity-75 transition duration-300">
        <div className="flex flex-1 items-center justify-center">
          <h3 className="font-display font-semibold tracking-widest text-xl sm:text-3xl lg:text-4xl uppercase">
            {project.title}
          </h3>
        </div>
        <p className="mb-4 text-center text-sm sm:text-lg md:text-xl">
          {project.category}
        </p>
      </div>
    </motion.div>
  )
}