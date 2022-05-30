import useTransparentNavigation from 'hooks/useTransparentNavigation'
import Image from 'next/image'
import evidences from './data/evidences'

export default function MobileView ({ onItemClick }) {
  const ref = useTransparentNavigation()

  return (
    <div ref={ref} className="relative pt-48 pb-8 px-8">
      <Image
        src="https://res.cloudinary.com/dzpkmjaih/image/upload/v1653610004/Portfolio%20Cuatrocuatronoventa/Drogas%20Dulces/Interactivo/01_Fondo-Droga-Dulces_vknbuj.png"
        alt="Background Drogas Dulces"
        layout="fill"
        objectFit="cover"
        quality={100}
      />
      <div>
        <Image
          src="https://res.cloudinary.com/dzpkmjaih/image/upload/v1653769458/Portfolio%20Cuatrocuatronoventa/Drogas%20Dulces/Interactivo/02_Nombre-Droga-Dulces_jexvwi.png"
          alt="Logo Drogas Dulces"
          width={640}
          height={480}
          objectFit="contain"
          quality={80}
        />
        {evidences.map((evidence, index) => (
          <Image
            key={index}
            onClick={() => onItemClick(evidence)}
            src={evidence.src}
            alt={evidence.alt}
            objectFit="contain"
            width={640}
            height={480}
            quality={80}
          />
        ))}
      </div>
    </div>
  )
}