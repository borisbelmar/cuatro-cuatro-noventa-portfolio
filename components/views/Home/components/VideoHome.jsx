import { motion } from 'framer-motion'
import useTransparentNavigation from 'hooks/useTransparentNavigation';
import ScrollSvg from "./ScrollSvg";

export default function VideoHome () {
  const ref = useTransparentNavigation()
  return (
    <div ref={ref} className="w-full h-screen relative">
      <video className="w-full h-screen object-cover" autoPlay loop muted>
        <source src="/assets/video-home.webm" type="video/webm" />
      </video>
      <div className="absolute w-full h-full flex top-0 items-end justify-center left-0 text-white pb-8 bg-gray-900 bg-opacity-25 z-10">
        <motion.div
          className="h-32 w-32 drop-shadow-lg"
          animate={{ rotate: 360 }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
        >
          <ScrollSvg />
        </motion.div>
      </div>
    </div>
  )
}