import { useRef, useCallback } from 'react'
import { motion, useAnimation } from 'framer-motion'
import ProjectItem from "./ProjectItem";
import useIntersectionObserver from 'hooks/useIntersectionObserver';
import Link from 'next/link';

export default function ProjectGrid ({ projects }) {
  const nodeRef = useRef(null)
  const intersected = useRef(false)

  const titleControls = useAnimation()

  const handleIntersected = useCallback(() => {
    if (intersected.current) return
    intersected.current = true

    titleControls.start({
      opacity: [0, 1]
    })
  }, [titleControls])

  useIntersectionObserver(nodeRef, {
    onIntersecting: handleIntersected
  })

  return (
    <div className="pb-16">
      <motion.h2
        ref={nodeRef}
        initial={{ opacity: 0 }}
        transition={{ duration: 1 }}
        animate={titleControls}
        className="text-center text-2xl sm:text-7xl lg:text-9xl uppercase font-display font-bold tracking-widest py-8 md:py-32 mb-18"
      >
        Proyectos
      </motion.h2>
      <div className="md:grid md:grid-cols-2 xl:grid-cols-3 px-8 md:px-32">
        {projects.map((project, idx) => (
          <Link key={project.id} href={`/projects/${project.id}`}>
            <div className="cursor-pointer">
              <ProjectItem project={project.content} idx={idx} />
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}