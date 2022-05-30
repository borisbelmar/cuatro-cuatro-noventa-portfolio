import Image from 'next/image'
import useTransparentNavigation from 'hooks/useTransparentNavigation'
import DrogasDulcesEvidences from './Evidences'
import DrogasDulcesLogo from './Logo'

export default function DesktopView ({ onItemClick }) {
  const ref = useTransparentNavigation()
  return (
    <>
      <div ref={ref} className="relative w-full mb-16 aspect-[16/10] 2xl:aspect-[16/8]">
        <Image
          src="https://res.cloudinary.com/dzpkmjaih/image/upload/v1653610004/Portfolio%20Cuatrocuatronoventa/Drogas%20Dulces/Interactivo/01_Fondo-Droga-Dulces_vknbuj.png"
          alt="Background Drogas Dulces"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        <div className="absolute inset-0 text-[0.5rem] lg:text-[0.75rem] xl:text-base 3xl:text-lg">
          <DrogasDulcesLogo />
          <DrogasDulcesEvidences onItemClick={onItemClick} />
        </div>
      </div>
    </>
  )
}