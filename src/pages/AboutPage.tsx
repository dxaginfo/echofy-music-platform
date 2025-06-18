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

const AboutPage = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-background to-accent/20">
        <div className="container mx-auto px-4">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            className="max-w-3xl mx-auto text-center"
          >
            <h1 className="text-4xl md:text-5xl font-bold mb-6">About Echofy</h1>
            <p className="text-xl text-muted-foreground">
              We're building a new foundation for the music industry that puts artists and fans at the center.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
              <p className="text-muted-foreground mb-6">
                At Echofy, we believe music is more than entertainment—it's a vital connection between people. Our mission is to create technology that strengthens those connections while ensuring artists can build sustainable careers.
              </p>
              <p className="text-muted-foreground">
                We're focused on solving the biggest challenges in the music industry: fragmented fan relationships, complex monetization, and career development obstacles. By integrating these elements into one intelligent platform, we're creating a new ecosystem where everyone benefits.
              </p>
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="rounded-lg overflow-hidden shadow-lg"
            >
              <div className="aspect-[4/3] bg-echofy-blue/10 flex items-center justify-center">
                <span className="text-6xl">🎵</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-16 bg-accent/20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Values</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              These core principles guide everything we do at Echofy.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {/* Value 1 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Artist-Centered Innovation</h3>
              <p className="text-muted-foreground">
                We build technology that serves real needs of musicians, not the other way around. Every feature begins with the question: "How does this help artists thrive?"
              </p>
            </motion.div>

            {/* Value 2 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Ethical Technology</h3>
              <p className="text-muted-foreground">
                We believe in transparent, fair systems that respect the rights and dignity of artists and fans. We'll never exploit user data or compromise on privacy.
              </p>
            </motion.div>

            {/* Value 3 */}
            <motion.div variants={fadeIn} className="bg-background p-6 rounded-lg shadow-md border">
              <h3 className="text-xl font-semibold mb-3">Community First</h3>
              <p className="text-muted-foreground">
                Music thrives through community. We foster genuine connections between artists and fans, creating spaces for collaboration rather than just consumption.
              </p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4">Our Team</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              We're a diverse group of musicians, technologists, and industry veterans united by our passion for music.
            </p>
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-4 gap-6"
          >
            {/* Team member placeholders */}
            {[1, 2, 3, 4].map((item) => (
              <motion.div key={item} variants={fadeIn} className="text-center">
                <div className="w-40 h-40 mx-auto rounded-full bg-echofy-blue/10 mb-4 flex items-center justify-center">
                  <span className="text-2xl">👤</span>
                </div>
                <h3 className="text-lg font-semibold">Team Member {item}</h3>
                <p className="text-muted-foreground">Role Title</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  )
}

export default AboutPage