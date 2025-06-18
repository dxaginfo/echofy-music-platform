import { Link } from "react-router-dom"
import { HomeIcon } from "lucide-react"

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-[calc(100vh-200px)] px-4 text-center">
      <h1 className="text-6xl md:text-8xl font-bold text-echofy-blue mb-4">404</h1>
      <h2 className="text-2xl md:text-3xl font-semibold mb-6">Page Not Found</h2>
      <p className="text-muted-foreground mb-8 max-w-lg">
        We couldn't find the page you're looking for. It might have been moved, deleted, or never existed.
      </p>
      <Link 
        to="/" 
        className="inline-flex items-center justify-center rounded-md bg-echofy-blue px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-echofy-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
      >
        <HomeIcon className="mr-2 h-5 w-5" />
        Back to Home
      </Link>
    </div>
  )
}

export default NotFoundPage