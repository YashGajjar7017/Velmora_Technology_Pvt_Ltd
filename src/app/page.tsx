'use client'

import { useState, useEffect, useCallback, useRef } from 'react'
import { AnimatePresence, motion } from 'framer-motion'
import { Navbar } from '@/components/layout/navbar'
import Footer from '@/components/layout/footer'
import HomePage from '@/components/pages/home-page'
import ServicesPage from '@/components/pages/services-page'
import AboutPage from '@/components/pages/about-page'
import PortfolioPage from '@/components/pages/portfolio-page'
import PricingPage from '@/components/pages/pricing-page'
import ContactPage from '@/components/pages/contact-page'
import LoginPage from '@/components/pages/login-page'
import SignupPage from '@/components/pages/signup-page'
import { CursorFollower } from '@/components/ui/cursor-follower'
import type { PageName } from '@/lib/data'

const VALID_PAGES: PageName[] = ['home', 'services', 'about', 'portfolio', 'pricing', 'contact', 'login', 'signup']

function getInitialPage(): PageName {
  if (typeof window === 'undefined') return 'home'
  const hash = window.location.hash.replace('#', '') as PageName
  return hash && VALID_PAGES.includes(hash) ? hash : 'home'
}

const pageVariants = {
  initial: { opacity: 0, y: 12 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.35, ease: 'easeOut' } },
  exit: { opacity: 0, y: -8, transition: { duration: 0.2, ease: 'easeIn' } },
}

export default function Home() {
  const [currentPage, setCurrentPage] = useState<PageName>(getInitialPage)
  const isInternalNav = useRef(false)

  const handleNavigate = useCallback((page: string) => {
    isInternalNav.current = true
    setCurrentPage(page as PageName)
    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [])

  // Handle browser back/forward with hash
  useEffect(() => {
    const handlePopState = () => {
      // Skip if this popstate was triggered by our own pushState
      if (isInternalNav.current) {
        isInternalNav.current = false
        return
      }
      const h = window.location.hash.replace('#', '') as PageName
      if (h && VALID_PAGES.includes(h)) {
        setCurrentPage(h)
      } else {
        setCurrentPage('home')
      }
    }

    window.addEventListener('popstate', handlePopState)
    return () => window.removeEventListener('popstate', handlePopState)
  }, [])

  // Update hash when page changes
  useEffect(() => {
    if (currentPage === 'home') {
      window.history.replaceState(null, '', window.location.pathname)
    } else {
      window.history.pushState(null, '', `#${currentPage}`)
    }
  }, [currentPage])

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomePage onNavigate={handleNavigate} />
      case 'services':
        return <ServicesPage onNavigate={handleNavigate} />
      case 'about':
        return <AboutPage onNavigate={handleNavigate} />
      case 'portfolio':
        return <PortfolioPage onNavigate={handleNavigate} />
      case 'pricing':
        return <PricingPage onNavigate={handleNavigate} />
      case 'contact':
        return <ContactPage onNavigate={handleNavigate} />
      case 'login':
        return <LoginPage onNavigate={handleNavigate} />
      case 'signup':
        return <SignupPage onNavigate={handleNavigate} />
      default:
        return <HomePage onNavigate={handleNavigate} />
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      <CursorFollower />
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      <main className="flex-1">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentPage}
            variants={pageVariants}
            initial="initial"
            animate="animate"
            exit="exit"
          >
            {renderPage()}
          </motion.div>
        </AnimatePresence>
      </main>
      <Footer currentPage={currentPage} onNavigate={handleNavigate} />
    </div>
  )
}
