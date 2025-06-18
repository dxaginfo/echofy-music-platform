import { useState, useEffect } from 'react'
import { Routes, Route } from 'react-router-dom'

// Page components
import HomePage from '@/pages/HomePage'
import AboutPage from '@/pages/AboutPage'
import ArtistsPage from '@/pages/ArtistsPage'
import FansPage from '@/pages/FansPage'
import NotFoundPage from '@/pages/NotFoundPage'

// Layout components
import MainLayout from '@/components/layouts/MainLayout'

function App() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light')

  // Initialize theme based on user preference
  useEffect(() => {
    const storedTheme = localStorage.getItem('theme') as 'light' | 'dark' | null
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches
    
    if (storedTheme) {
      setTheme(storedTheme)
      document.documentElement.classList.toggle('dark', storedTheme === 'dark')
    } else if (prefersDark) {
      setTheme('dark')
      document.documentElement.classList.add('dark')
    }
  }, [])

  // Theme toggle handler
  const toggleTheme = () => {
    const newTheme = theme === 'light' ? 'dark' : 'light'
    setTheme(newTheme)
    document.documentElement.classList.toggle('dark', newTheme === 'dark')
    localStorage.setItem('theme', newTheme)
  }

  return (
    <MainLayout theme={theme} toggleTheme={toggleTheme}>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/artists" element={<ArtistsPage />} />
        <Route path="/fans" element={<FansPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </MainLayout>
  )
}

export default App