import { useEffect, useRef } from 'react'
import { nanoid } from 'nanoid'
import { useNavigation } from 'components/context/NavigationContext'

export default function useTransparentNavigation () {
  const { subscribeNode, unsubscribeNode } = useNavigation()
  const ref = useRef(null)
  const nanoIdRef = useRef(nanoid())

  useEffect(() => {
    const nodeId = nanoIdRef.current
    subscribeNode(nodeId, ref)
    return () => {
      unsubscribeNode(nodeId)
    }
  }, [unsubscribeNode, subscribeNode])

  return ref
}