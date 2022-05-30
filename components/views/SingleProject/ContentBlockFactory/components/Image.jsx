import Image from 'next/image'

export default function ImageBlock ({ content }) {
  return (
    <div className="py-8">
      <div className="relative max-w-screen-lg mx-auto py-8 px-8 w-full aspect-video">
        <Image
          src={content.src}
          alt={content.alt}
          layout="fill"
          objectFit="contain"
        />
      </div>
    </div>
  )
}