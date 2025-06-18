import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Moon, Sun, Menu, X } from 'lucide-react'
import { cn } from '@/lib/utils'

interface NavbarProps {
  theme: 'light' | 'dark'
  toggleTheme: () => void
}

const Navbar = ({ theme, toggleTheme }: NavbarProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2">
          <Link to="/" className="flex items-center gap-2">
            <span className="text-echofy-accent font-bold text-2xl">Echofy</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-6">
          <Link to="/" className="text-foreground/80 hover:text-foreground transition">Home</Link>
          <Link to="/about" className="text-foreground/80 hover:text-foreground transition">About</Link>
          <Link to="/features" className="text-foreground/80 hover:text-foreground transition">Features</Link>
          <Link to="/pricing" className="text-foreground/80 hover:text-foreground transition">Pricing</Link>
          <Link to="/contact" className="text-foreground/80 hover:text-foreground transition">Contact</Link>
        </nav>

        <div className="flex items-center gap-4">
          <button
            onClick={toggleTheme}
            className="rounded-full p-2 hover:bg-accent transition"
            aria-label="Toggle theme"
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
          </button>

          <Link
            to="/login"
            className="hidden md:inline-flex items-center justify-center rounded-md bg-echofy-blue px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-echofy-blue/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
          >
            Get Started
          </Link>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 hover:bg-accent rounded-full transition"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Menu */}
      <div
        className={cn(
          "md:hidden fixed inset-x-0 top-16 z-50 w-full transform transition-all duration-300 ease-in-out",
          isMenuOpen
            ? "translate-y-0 opacity-100"
            : "pointer-events-none -translate-y-8 opacity-0"
        )}
      >
        <div className="container bg-background border-b shadow-lg rounded-b-lg py-4">
          <nav className="flex flex-col space-y-4">
            <Link to="/" className="px-4 py-2 hover:bg-accent rounded-md transition" onClick={toggleMenu}>Home</Link>
            <Link to="/about" className="px-4 py-2 hover:bg-accent rounded-md transition" onClick={toggleMenu}>About</Link>
            <Link to="/features" className="px-4 py-2 hover:bg-accent rounded-md transition" onClick={toggleMenu}>Features</Link>
            <Link to="/pricing" className="px-4 py-2 hover:bg-accent rounded-md transition" onClick={toggleMenu}>Pricing</Link>
            <Link to="/contact" className="px-4 py-2 hover:bg-accent rounded-md transition" onClick={toggleMenu}>Contact</Link>
            
            <div className="border-t pt-4 mt-2">
              <Link
                to="/login"
                className="flex items-center justify-center rounded-md bg-echofy-blue px-4 py-2 text-sm font-medium text-white shadow transition-colors hover:bg-echofy-blue/80 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50"
                onClick={toggleMenu}
              >
                Get Started
              </Link>
            </div>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Navbar