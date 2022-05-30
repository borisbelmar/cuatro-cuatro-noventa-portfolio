import Image from 'next/image'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faBehanceSquare } from '@fortawesome/free-brands-svg-icons'
import { faEnvelopeSquare } from '@fortawesome/free-solid-svg-icons'

export default function Profile ({ profile }) {
  return (
    <div className='flex-1 py-4 px-6'>
      <div className="aspect-[5/6] overflow-hidden mb-4">
        <div className="hover:scale-105 transition duration-500">
          <Image
            src={profile.photo}
            alt={profile.fullName}
            width={500}
            height={600}
            quality={80}
          />
        </div>
      </div>
      <h3 className='text-center text-2xl font-semibold font-display tracking-widest mb-2'>
        {profile.fullName}
      </h3>
      <div className="text-center flex items-center justify-center gap-4 mb-6">
        <a href={profile.socials.behance} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faBehanceSquare} className="h-8" />
        </a>
        <a href={profile.socials.linkedin} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faLinkedin} className="h-8" />
        </a>
        <a href={profile.socials.email} target="_blank" rel="noreferrer">
          <FontAwesomeIcon icon={faEnvelopeSquare} className="h-8" />
        </a>
      </div>
      <p className="text-justify">
        {profile.description}
      </p>
    </div>
  )
}