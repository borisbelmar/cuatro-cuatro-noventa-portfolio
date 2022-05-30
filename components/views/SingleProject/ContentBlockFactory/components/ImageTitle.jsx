import { useRef } from 'react'
import Image from "next/image";
import useTransparentNavigation from 'hooks/useTransparentNavigation';

export default function ImageTitle ({ content }) {
  const ref = useTransparentNavigation()

  return (
    <div ref={ref} className="relative w-full h-screen mb-16">
      <Image src={content.image} alt={content.title} layout="fill" objectFit="cover" />
      <div className="absolute top-0 left-0 flex items-center justify-center w-full h-full z-10 bg-gray-900 bg-opacity-50">
        <h1 className="font-semibold font-display tracking-widest text-4xl sm:text-5xl text-center uppercase text-white">
          {content.title}
        </h1>
      </div>
    </div>
  )
}