import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Zap, BarChart3, Users, Pencil, MessageSquare, DollarSign } from 'lucide-react'

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

const ArtistsPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 px-4 bg-gradient-to-b from-background via-background to-accent/20">
        <div className="container mx-auto">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Artists</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Build your career on your terms with powerful tools designed to help you connect with fans, grow your audience, and earn sustainable income.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-md bg-echofy-blue px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-echofy-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Get Started Free
              </Link>
              <Link
                to="/demo"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Watch Demo
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Everything You Need</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our platform provides a comprehensive suite of tools designed specifically for today's independent artists.
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
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <BarChart3 className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Audience Analytics</h3>
              <p className="text-muted-foreground">
                Gain deep insights into your audience demographics, listening habits, and engagement patterns to inform your strategy.
              </p>
            </motion.div>

            {/* Feature 2 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Users className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Fan Relationship Management</h3>
              <p className="text-muted-foreground">
                Build direct relationships with your most dedicated fans through customizable engagement tools and messaging.
              </p>
            </motion.div>

            {/* Feature 3 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <DollarSign className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multi-Stream Monetization</h3>
              <p className="text-muted-foreground">
                Create diverse revenue streams through subscriptions, exclusive content, merchandise, and digital goods.
              </p>
            </motion.div>

            {/* Feature 4 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Zap className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Promotional Tools</h3>
              <p className="text-muted-foreground">
                Powerful marketing capabilities to promote your music across platforms, including release strategies and campaign management.
              </p>
            </motion.div>

            {/* Feature 5 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Pencil className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Creative Resources</h3>
              <p className="text-muted-foreground">
                Access to collaboration tools, production resources, and creative assets to enhance your music and visual branding.
              </p>
            </motion.div>

            {/* Feature 6 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <MessageSquare className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Community & Mentorship</h3>
              <p className="text-muted-foreground">
                Connect with other artists, industry professionals, and mentors to grow your network and learn from peers.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Testimonial Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Artist Success Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear from artists who are building sustainable careers with Echofy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-6 rounded-lg shadow-md border"
            >
              <div className="flex flex-col">
                <blockquote className="text-lg mb-4">
                  "Echofy has completely transformed how I connect with my fans. I've been able to build a dedicated community that directly supports my work, giving me the freedom to create on my own terms."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-echofy-blue/20 flex items-center justify-center mr-4">
                    <span className="text-lg">JS</span>
                  </div>
                  <div>
                    <p className="font-semibold">Jamie Smith</p>
                    <p className="text-sm text-muted-foreground">Independent Artist, Los Angeles</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-background p-6 rounded-lg shadow-md border"
            >
              <div className="flex flex-col">
                <blockquote className="text-lg mb-4">
                  "The analytics tools have been invaluable for understanding my audience. I've been able to plan tours in cities where I have the most engaged fans, resulting in sold-out shows and better revenue."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="h-12 w-12 rounded-full bg-echofy-blue/20 flex items-center justify-center mr-4">
                    <span className="text-lg">MR</span>
                  </div>
                  <div>
                    <p className="font-semibold">Maya Rodriguez</p>
                    <p className="text-sm text-muted-foreground">Singer-Songwriter, Austin</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing CTA */}
      <section className="py-20 bg-echofy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Take Your Music Career to the Next Level?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of artists who are building sustainable careers with Echofy.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/signup"
              className="inline-flex items-center justify-center rounded-md bg-white text-echofy-blue px-6 py-3 text-base font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Start Free Trial
            </Link>
            <Link
              to="/pricing"
              className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-white/10 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              View Pricing
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ArtistsPage