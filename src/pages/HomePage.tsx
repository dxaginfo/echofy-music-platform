import { Link } from 'react-router-dom'
import { ArrowRight, Music, BadgeCheck, HeartHandshake, Award } from 'lucide-react'
import { motion } from 'framer-motion'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: { duration: 0.6 } 
  }
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
}

const HomePage = () => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="py-20 md:py-28 px-4">
        <div className="container mx-auto text-center">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto mb-8"
          >
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
              The Nervous System of <span className="text-echofy-blue">Music</span>
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Echofy connects artists, fans, and the industry in an intelligent network that adapts, learns, and grows with the music ecosystem.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-md bg-echofy-blue px-6 py-3 text-lg font-medium text-white shadow transition-colors hover:bg-echofy-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-lg font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="relative mx-auto mt-12 max-w-5xl overflow-hidden rounded-xl shadow-2xl"
          >
            <div className="aspect-video bg-echofy-dark rounded-xl overflow-hidden">
              <div className="bg-gradient-to-r from-echofy-blue/20 to-echofy-accent/20 w-full h-full flex items-center justify-center">
                <div className="bg-black/50 p-8 rounded-full">
                  <Music className="h-16 w-16 text-white" />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Artists Choose Echofy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides the tools and insights needed to thrive in today's complex music landscape.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Feature 1 */}
            <motion.div
              variants={fadeIn}
              className="bg-background rounded-lg p-6 shadow-md border flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full">
                <BadgeCheck className="h-8 w-8 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Smart Audience Insights</h3>
              <p className="text-muted-foreground">
                Understand your fans like never before with AI-powered analytics that reveal engagement patterns and opportunities.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div
              variants={fadeIn}
              className="bg-background rounded-lg p-6 shadow-md border flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full">
                <HeartHandshake className="h-8 w-8 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Fan Connections</h3>
              <p className="text-muted-foreground">
                Build meaningful relationships with your audience through personalized interaction tools and direct monetization channels.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div
              variants={fadeIn}
              className="bg-background rounded-lg p-6 shadow-md border flex flex-col items-center text-center"
            >
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full">
                <Award className="h-8 w-8 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Development</h3>
              <p className="text-muted-foreground">
                Access industry opportunities, collaborations, and growth strategies tailored to your unique musical journey.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-echofy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Music Career?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of artists who are building sustainable careers using Echofy's platform.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md bg-white text-echofy-blue px-6 py-3 text-lg font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Start Free Trial
          </Link>
        </div>
      </section>
    </div>
  )
}

export default HomePage