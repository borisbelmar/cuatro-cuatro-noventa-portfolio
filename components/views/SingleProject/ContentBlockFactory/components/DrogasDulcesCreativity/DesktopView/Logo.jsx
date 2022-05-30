import Image from 'next/image'
import { motion } from 'framer-motion'

export default function DrogasDulcesLogo () {
  return (
    <motion.div
      className="relative w-[24em] h-full aspect-[4/3] m-auto"
      initial={{ opacity: 0, scale: 1.1 }}
      animate={{ opacity: [0, 1], scale: [1.1, 1] }}
    >
      <Image
        src="https://res.cloudinary.com/dzpkmjaih/image/upload/v1653769458/Portfolio%20Cuatrocuatronoventa/Drogas%20Dulces/Interactivo/02_Nombre-Droga-Dulces_jexvwi.png"
        alt="Logo Drogas Dulces"
        layout="fill"
        objectFit="contain"
        quality={80}
      />
    </motion.div>
  )
}