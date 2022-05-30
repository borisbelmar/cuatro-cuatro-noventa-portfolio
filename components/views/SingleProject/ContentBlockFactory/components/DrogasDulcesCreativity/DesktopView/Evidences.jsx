import Image from 'next/image'
import { motion } from 'framer-motion'
import clsx from 'clsx'
import evidences from '../data/evidences'

export default function DrogasDulcesEvidences ({ onItemClick }) {
  return (
    <>
      {evidences.map((evidence, index) => (
        <motion.div
          key={index}
          onClick={() => onItemClick(evidence)}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: [0, 1], scale: [1.1, 1] }}
          whileHover={{ scale: 1.1, rotate: [0, 5], transition: { duration: 0.25 } }}
          whileTap={{ scale: 0.9 }}
          className={clsx('absolute w-[32em] aspect-[16/9] cursor-pointer', evidence.className)}
        >
          <Image
            src={evidence.src}
            alt={evidence.alt}
            objectFit="contain"
            layout="fill"
            quality={80}
          />
        </motion.div>
      ))}
    </>
  )
}