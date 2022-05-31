import { motion } from 'framer-motion'

export default function ProgressBar () {
  return (
    <div className="h-1 rounded-lg bg-gray-200 relative overflow-hidden">
      <motion.div
        className="h-1 rounded-lg bg-black absolute w-1/3 top-0 transition"
        animate={{ left: ['-30%', '130%'] }}
        transition={{ duration: 1, ease: 'easeInOut', repeat: Infinity }}
      />
    </div>
  )
}