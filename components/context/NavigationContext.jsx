import {
  createContext,
  useContext,
  useState,
  useCallback,
  useRef,
  useEffect
} from 'react'

const NavigationContext = createContext({
  navRef: null,
  transparentNav: false,
  subscribeNode: () => {},
  unsubscribeNode: () => {}
})

export function NavigationProvider ({ children }) {
  const subscribedNodes = useRef({})
  const navRef = useRef(null)
  const [transparentNav, setTransparentNav] = useState(false)
  
  const subscribeNode = useCallback((id, intersecting) => {
    subscribedNodes.current = {
      ...subscribedNodes.current,
      [id]: intersecting
    }
  }, [])

  const unsubscribeNode = useCallback((id) => {
    delete subscribedNodes.current[id]
  }, [])

  useEffect(() => {
    const handleScroll = () => {
      const navHeight = navRef.current?.getBoundingClientRect().height || 0

      const nodeStates = Object.keys(subscribedNodes.current).map(id => {
        const nodeRef = subscribedNodes.current[id]
        const nodeRects = nodeRef.current?.getBoundingClientRect() || {}
        return (nodeRects.top - navHeight) < 0 && (nodeRects.top - navHeight) > -nodeRects.height
      })
      
      setTransparentNav(nodeStates.some(state => state))
    }
    document.addEventListener('scroll', handleScroll)
    const timeout = setTimeout(handleScroll, 100)
    return () => {
      clearTimeout(timeout)
      document.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return (
    <NavigationContext.Provider
      value={{
        navRef,
        transparentNav,
        subscribeNode,
        unsubscribeNode
      }}
    >
      {children}
    </NavigationContext.Provider>
  )
}

export const useNavigation = () => useContext(NavigationContext)
