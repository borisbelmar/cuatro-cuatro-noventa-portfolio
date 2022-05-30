import Link from "next/link"
import Logo from "components/common/Logo"
import clsx from "clsx"
import useBreakpoint from "hooks/useBreakpoint"
import { useNavigation } from "components/context/NavigationContext"

export default function Navigation () {
  const { transparentNav, navRef } = useNavigation()
  const { isMdBreakpointOrLarger } = useBreakpoint()

  const overVideoStyles = transparentNav
    ? 'text-white drop-shadow-lg'
    : 'bg-white shadow-lg bg-opacity-75 backdrop-blur'

  return (
    isMdBreakpointOrLarger ? (
      <nav
        ref={navRef}
        className={clsx(
          'fixed flex justify-between w-full items-center px-16 py-6 text-xl font-light z-20 transition',
          overVideoStyles
        )}
      >
        <div>
          <Link href="/projects">
            <span className="cursor-pointer">
              Work
            </span>
          </Link>
        </div>
        <div>
          <Link href="/">
            <div className="h-12 cursor-pointer">
              <Logo />
            </div>
          </Link>
        </div>
        <div>
          <Link href="/about">
            <span className="cursor-pointer">
              About
            </span>
          </Link>
        </div>
      </nav>
    ) : (
      <nav
        ref={navRef}
        className={clsx(
          'fixed w-full z-20 transition py-6',
          overVideoStyles
        )}
      >
        <div className="mb-8">
          <Link href="/">
            <div className="h-12 cursor-pointer">
              <Logo />
            </div>
          </Link>
        </div>
        <div className="flex justify-between w-full items-center px-8 text-xl font-light">
          <div>
            <Link href="/projects">
              <span className="cursor-pointer">
                Work
              </span>
            </Link>
          </div>
          <div>
            <Link href="/about">
              <span className="cursor-pointer">
                About
              </span>
            </Link>
          </div>
        </div>
      </nav>
    ) 
  )
}