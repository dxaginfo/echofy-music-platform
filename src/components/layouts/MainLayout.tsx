import { ReactNode } from 'react'
import Navbar from '../navigation/Navbar'
import Footer from '../navigation/Footer'

interface MainLayoutProps {
  children: ReactNode
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const MainLayout = ({ children, theme, toggleTheme }: MainLayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar theme={theme} toggleTheme={toggleTheme} />
      
      <main className="flex-1">
        {children}
      </main>
      
      <Footer />
    </div>
  )
}

export default MainLayout