import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function MainLayout ({ children, navTransparentAtStart }) {
  return (
    <main className="flex flex-col min-h-screen font-body w-full">
      <Navigation
        transparentAtStart={navTransparentAtStart}
      />
      <div className="flex flex-col flex-1">
        {children}
      </div>
      <Footer />
    </main>
  )
}