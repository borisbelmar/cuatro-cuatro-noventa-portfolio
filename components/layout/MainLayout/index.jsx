import { NavigationProvider } from 'components/context/NavigationContext'
import Footer from './components/Footer'
import Navigation from './components/Navigation'

export default function MainLayout ({ children }) {
  return (
    <main className="flex flex-col min-h-screen font-body w-full relative">
      <NavigationProvider>
        <Navigation/>
        <div className="flex flex-col flex-1">
          {children}
        </div>
        <Footer />
      </NavigationProvider>
    </main>
  )
}