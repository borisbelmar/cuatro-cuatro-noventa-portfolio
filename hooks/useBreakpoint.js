import { useState, useEffect } from 'react'

export const breakpoints = {
  SM: 'sm',
  MD: 'md',
  LG: 'lg',
  XL: 'xl',
  XXL: '2xl'
}

const { SM, MD, LG, XL, XXL } = breakpoints

export default function useBreakpoint () {
  const [breakpoint, setBreakpoint] = useState(null)

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 640) {
        setBreakpoint(SM)
        return
      }
      if (window.innerWidth <= 768) {
        setBreakpoint(MD)
        return
      }
      if (window.innerWidth <= 1024) {
        setBreakpoint(LG)
        return
      }
      if (window.innerWidth <= 1280) {
        setBreakpoint(XL)
        return
      }
      setBreakpoint(XXL)
    }
    window.addEventListener('resize', handleResize)
    handleResize()
    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return {
    breakpoint,
    isSmBreakpointOrLesser: [SM].includes(breakpoint),
    isMdBreakpointOrLesser: [SM, MD].includes(breakpoint),
    isLgBreakpointOrLesser: [SM, MD, LG].includes(breakpoint),
    isXlBreakpointOrLesser: [SM, MD, LG, XL].includes(breakpoint),
    is2xlBreakpointOrLesser: [SM, MD, LG, XL, XXL].includes(breakpoint),
    isSmBreakpointOrLarger: [SM, MD, LG, XL, XXL].includes(breakpoint),
    isMdBreakpointOrLarger: [MD, LG, XL, XXL].includes(breakpoint),
    isLgBreakpointOrLarger: [LG, XL, XXL].includes(breakpoint),
    isXlBreakpointOrLarger: [XL, XXL].includes(breakpoint),
    is2xlBreakpointOrLarger: [XXL].includes(breakpoint),
    isSmBreakpointOnly: SM === breakpoint,
    isMdBreakpointOnly: MD === breakpoint,
    isLgBreakpointOnly: LG === breakpoint,
    isXlBreakpointOnly: XL === breakpoint,
    is2xlBreakpointOnly: XXL === breakpoint,
    
  }
}