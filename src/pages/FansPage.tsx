import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, HeartHandshake, Award, Radio, Music, Gift } from 'lucide-react'

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

const FansPage = () => {
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
            <h1 className="text-4xl md:text-5xl font-bold mb-6">For Music Fans</h1>
            <p className="text-xl text-muted-foreground mb-8">
              Discover new music, connect directly with your favorite artists, and enjoy exclusive experiences unavailable anywhere else.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/signup"
                className="inline-flex items-center justify-center rounded-md bg-echofy-blue px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-echofy-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Join for Free
              </Link>
              <Link
                to="/explore"
                className="inline-flex items-center justify-center rounded-md border border-input bg-background px-6 py-3 text-base font-medium shadow-sm transition-colors hover:bg-accent hover:text-accent-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
              >
                Explore Music
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Fans Love Echofy</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Experience music in a whole new way with features designed to bring you closer to the artists you love.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Benefit 1 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Star className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Exclusive Content</h3>
              <p className="text-muted-foreground">
                Get access to behind-the-scenes content, early releases, and special versions of tracks directly from artists.
              </p>
            </motion.div>

            {/* Benefit 2 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <HeartHandshake className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Direct Artist Interaction</h3>
              <p className="text-muted-foreground">
                Connect directly with artists through virtual meet-and-greets, private chats, and exclusive community spaces.
              </p>
            </motion.div>

            {/* Benefit 3 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Music className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Personalized Discovery</h3>
              <p className="text-muted-foreground">
                Find new music tailored to your unique taste with our smart recommendation engine that understands your preferences.
              </p>
            </motion.div>

            {/* Benefit 4 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Radio className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Live Experiences</h3>
              <p className="text-muted-foreground">
                Attend exclusive virtual concerts, listening parties, and interactive events with your favorite artists.
              </p>
            </motion.div>

            {/* Benefit 5 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Award className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Rewards Program</h3>
              <p className="text-muted-foreground">
                Earn points for supporting artists that can be redeemed for merchandise, tickets, and unique experiences.
              </p>
            </motion.div>

            {/* Benefit 6 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <div className="mb-4 p-3 bg-echofy-blue/10 rounded-full w-fit">
                <Gift className="h-6 w-6 text-echofy-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Limited Edition Items</h3>
              <p className="text-muted-foreground">
                Shop for exclusive merchandise, limited releases, and collectibles available only through Echofy.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Fan Stories Section */}
      <section className="py-16 bg-accent/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Fan Stories</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Hear what other music lovers are saying about their experience with Echofy.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-background p-6 rounded-lg shadow-md border"
            >
              <div className="flex flex-col">
                <blockquote className="text-lg mb-4">
                  "I've discovered so many amazing independent artists through Echofy that I would have never found otherwise. The personalized recommendations are spot on!"
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-echofy-blue/20 flex items-center justify-center mr-3">
                    <span className="text-sm">AJ</span>
                  </div>
                  <div>
                    <p className="font-semibold">Alex J.</p>
                    <p className="text-sm text-muted-foreground">Chicago, IL</p>
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
                  "Being able to directly interact with my favorite artists has completely changed how I experience music. I feel like I'm part of their creative journey."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-echofy-blue/20 flex items-center justify-center mr-3">
                    <span className="text-sm">SK</span>
                  </div>
                  <div>
                    <p className="font-semibold">Sarah K.</p>
                    <p className="text-sm text-muted-foreground">Portland, OR</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="bg-background p-6 rounded-lg shadow-md border"
            >
              <div className="flex flex-col">
                <blockquote className="text-lg mb-4">
                  "The exclusive listening parties and virtual concerts are incredible. I've attended events I never would have been able to experience otherwise."
                </blockquote>
                <div className="mt-4 flex items-center">
                  <div className="h-10 w-10 rounded-full bg-echofy-blue/20 flex items-center justify-center mr-3">
                    <span className="text-sm">RM</span>
                  </div>
                  <div>
                    <p className="font-semibold">Ryan M.</p>
                    <p className="text-sm text-muted-foreground">Austin, TX</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Featured Artists Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Featured Artists</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Discover some of the talented artists who are creating unique experiences for their fans on Echofy.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[1, 2, 3, 4].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: item * 0.1 }}
                className="group relative rounded-lg overflow-hidden shadow-md"
              >
                <div className="aspect-square bg-gradient-to-br from-echofy-blue/30 to-echofy-accent/20">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <Music className="h-16 w-16 text-white/70" />
                  </div>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4 text-white">
                  <h3 className="font-semibold">Artist Name</h3>
                  <p className="text-sm opacity-90">Genre</p>
                </div>
                <div className="absolute inset-0 bg-echofy-blue/80 opacity-0 group-hover:opacity-90 transition-opacity flex items-center justify-center">
                  <Link
                    to="/artist"
                    className="inline-flex items-center justify-center rounded-md bg-white px-4 py-2 text-sm font-medium text-echofy-blue shadow transition-colors"
                  >
                    View Profile
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to="/explore"
              className="inline-flex items-center justify-center rounded-md bg-echofy-blue px-6 py-3 text-base font-medium text-white shadow transition-colors hover:bg-echofy-blue/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Explore All Artists
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-echofy-blue text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Music Experience?</h2>
          <p className="text-xl opacity-90 max-w-2xl mx-auto mb-8">
            Join thousands of fans who are discovering new music and connecting with their favorite artists in meaningful ways.
          </p>
          <Link
            to="/signup"
            className="inline-flex items-center justify-center rounded-md bg-white text-echofy-blue px-6 py-3 text-base font-medium shadow transition-colors hover:bg-white/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
          >
            Sign Up For Free
          </Link>
        </div>
      </section>
    </div>
  )
}

export default FansPage