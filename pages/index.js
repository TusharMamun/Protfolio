import Head from 'next/head'
import Navigation from '../components/Navigation'
import Hero from '../components/Hero'
import TechMarquee from '../components/TechMarquee'
import AboutSection from '../components/AboutSection'
import Education from '../components/Education'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import Testimonials from '../components/Testimonials'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <>
      <Head>
        <title>Tushar Mamun | Full-Stack Developer</title>
        <meta name="description" content="Full-Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies. Building scalable solutions with JavaScript, Node.js, MongoDB, Firebase, and Tailwind CSS." />
        <meta name="keywords" content="Full-Stack Developer, MERN Stack, Next.js, React, JavaScript, Node.js, MongoDB, Firebase, Tailwind CSS, Web Development" />
        <meta name="author" content="Tushar Mamun" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        
        {/* Open Graph Meta Tags */}
        <meta property="og:title" content="Tushar Mamun | Full-Stack Developer" />
        <meta property="og:description" content="Full-Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://tusharmamun.com" />
        <meta property="og:image" content="/og-image.jpg" />
        
        {/* Twitter Card Meta Tags */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Tushar Mamun | Full-Stack Developer" />
        <meta name="twitter:description" content="Full-Stack Developer specializing in MERN Stack, Next.js, React, and modern web technologies." />
        <meta name="twitter:image" content="/twitter-image.jpg" />
        
        {/* Additional Meta Tags */}
        <meta name="robots" content="index, follow" />
        <meta name="language" content="English" />
        <meta name="theme-color" content="#6366f1" />
      </Head>

      <div className="min-h-screen bg-black text-gray-100">
        <Navigation />
        <main>
          <Hero />
          <TechMarquee />
          <AboutSection />
          <Education />
          <Projects />
          <Skills />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  )
}