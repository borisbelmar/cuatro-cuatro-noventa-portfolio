import Image from "next/image";

export default function LogoShowCase ({ content }) {
  return (
    <div>
      <div className="max-w-screen-lg mx-auto py-8 px-8 w-full">
        <div className="flex flex-col md:flex-row justify-center items-center gap-2">
          {content.map(item => (
            <div key={item.alt} className="relative h-16 max-w-sm w-full mx-auto mb-8 md:mb-0">
              <Image
                src={item.src}
                alt={item.alt}
                layout="fill"
                objectFit="contain"
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}