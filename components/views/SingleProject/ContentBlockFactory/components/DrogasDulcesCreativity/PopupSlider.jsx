import { Fragment, useEffect } from 'react'
import { Transition, Dialog } from '@headlessui/react'
import { Swiper, SwiperSlide } from 'swiper/react'
import Image from 'next/image'

export default function PopupSlider ({ images, onClose }) {
  useEffect(() => {
    if (!!images) {
      setTimeout(() => {
        document.documentElement.style.paddingRight = '0px';
      }, 10);
    }
  }, [images]);

  return (
    <Transition show={!!images} as={Fragment}>
      <Dialog as="div" className="relative z-30" onClose={onClose}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-black bg-opacity-25" />
        </Transition.Child>
        <div className="fixed inset-0 flex items-center justify-center overflow-hidden bg-black bg-opacity-50">
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0 scale-95"
            enterTo="opacity-100 scale-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100 scale-100"
            leaveTo="opacity-0 scale-95"
          >
            <Dialog.Panel className="w-full">
              <Swiper slidesPerView={1.5} slidesPerGroup={1} >
                {images?.map((image, idx) => (
                  <SwiperSlide key={idx}>
                    <div>
                      <Image
                        src={image}
                        alt={`Evidencia 1-${idx}`}
                        width="960"
                        height="650"
                        objectFit="contain"
                      />
                    </div>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Dialog.Panel>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition>
  )
}