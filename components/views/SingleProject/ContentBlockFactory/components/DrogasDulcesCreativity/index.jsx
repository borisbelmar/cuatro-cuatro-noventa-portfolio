import { useState, useCallback } from 'react'
import useBreakpoint from 'hooks/useBreakpoint'
import DesktopView from './DesktopView'
import MobileView from './MobileView'
import PopupSlider from './PopupSlider'

export default function DrogasDulcesCreativity () {
  const { isMdBreakpointOrLesser } = useBreakpoint()
  const [evidenceImages, setEvidenceImages] = useState(null)

  const handleEvidenceClick = useCallback(evidence => {
    setEvidenceImages(evidence.images)
  }, [])

  const handleClose = useCallback(() => {
    setEvidenceImages(null)
  }, [])

  const ViewComponent = isMdBreakpointOrLesser ? MobileView : DesktopView

  return (
    <>
      <ViewComponent onItemClick={handleEvidenceClick} />
      <PopupSlider
        images={evidenceImages}
        onClose={handleClose}
      />
    </>
  )
}