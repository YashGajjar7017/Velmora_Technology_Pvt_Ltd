'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import {
  Globe,
  Cloud,
  Shield,
  Smartphone,
  Brain,
  Lightbulb,
  Users,
  Cpu,
  Headphones,
  Maximize,
  Star,
  MapPin,
  Mail,
  Phone,
  ChevronRight,
  Menu,
  Send,
  ArrowRight,
  CheckCircle2,
} from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import {
  Sheet,
  SheetContent,
  SheetTrigger,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'

/* ─────────────── animation helpers ─────────────── */

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
}

/* ─────────────── data ─────────────── */

const NAV_ITEMS = [
  { label: 'Services', href: '#services' },
  { label: 'About', href: '#about' },
  { label: 'Why Us', href: '#why-us' },
  { label: 'Contact', href: '#contact' },
]

const SERVICES = [
  {
    icon: Globe,
    title: 'Web Development',
    description:
      'Custom web applications built with modern frameworks and best practices. From single-page apps to complex enterprise platforms.',
  },
  {
    icon: Cloud,
    title: 'Cloud Solutions',
    description:
      'Scalable cloud infrastructure design and migration services on AWS, Azure, and GCP. Optimize performance and reduce costs.',
  },
  {
    icon: Shield,
    title: 'Cybersecurity',
    description:
      'Comprehensive security assessments, penetration testing, and compliance solutions to protect your digital assets.',
  },
  {
    icon: Smartphone,
    title: 'Mobile App Development',
    description:
      'Native and cross-platform mobile applications for iOS and Android. Engaging experiences that users love.',
  },
  {
    icon: Brain,
    title: 'AI & Machine Learning',
    description:
      'Intelligent solutions powered by cutting-edge AI. Automate processes, gain insights, and drive innovation.',
  },
  {
    icon: Lightbulb,
    title: 'IT Consulting',
    description:
      'Strategic technology consulting to align IT investments with business goals. Roadmaps for digital transformation.',
  },
]

const STATS = [
  { value: '8+', label: 'Years Experience' },
  { value: '200+', label: 'Projects Completed' },
  { value: '150+', label: 'Happy Clients' },
  { value: '50+', label: 'Team Members' },
]

const WHY_US = [
  {
    icon: Users,
    title: 'Expert Team',
    description:
      'Our team of certified professionals brings deep expertise across technologies and industries, ensuring top-quality solutions.',
  },
  {
    icon: Cpu,
    title: 'Cutting-Edge Technology',
    description:
      'We leverage the latest tools and frameworks to build future-proof solutions that keep you ahead of the competition.',
  },
  {
    icon: Headphones,
    title: '24/7 Support',
    description:
      'Round-the-clock support and monitoring ensure your systems stay online and your issues are resolved promptly.',
  },
  {
    icon: Maximize,
    title: 'Scalable Solutions',
    description:
      'Architecture designed to grow with your business. Our solutions adapt seamlessly as your needs evolve and expand.',
  },
]

const TESTIMONIALS = [
  {
    name: 'Sarah Mitchell',
    role: 'CTO, FinVault Inc.',
    initials: 'SM',
    quote:
      'NexaTech transformed our legacy systems into a modern cloud platform. The team was professional, responsive, and delivered beyond our expectations.',
    stars: 5,
  },
  {
    name: 'David Chen',
    role: 'Founder, GreenLeaf Apps',
    initials: 'DC',
    quote:
      'Their mobile app development team created an incredible product that our users love. The attention to detail and performance optimization was outstanding.',
    stars: 5,
  },
  {
    name: 'Emily Rodriguez',
    role: 'VP Engineering, LogiCore',
    initials: 'ER',
    quote:
      'The cybersecurity audit NexaTech conducted revealed critical vulnerabilities we had missed. Their remediation plan was thorough and effective.',
    stars: 5,
  },
]

/* ─────────────── page component ─────────────── */

export default function Home() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleNavClick = (href: string) => {
    setMobileOpen(false)
    const el = document.querySelector(href)
    el?.scrollIntoView({ behavior: 'smooth' })
  }

  const handleFormChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormState((prev) => ({ ...prev, [e.target.name]: e.target.value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitting(true)
    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formState),
      })
      if (res.ok) {
        setSubmitted(true)
        setFormState({
          name: '',
          email: '',
          phone: '',
          subject: '',
          message: '',
        })
      }
    } finally {
      setSubmitting(false)
    }
  }

  return (
    <div className="min-h-screen flex flex-col">
      {/* ───── Navigation ───── */}
      <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md">
        <nav
          className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8"
          aria-label="Main navigation"
        >
          {/* Logo */}
          <a
            href="#"
            onClick={(e) => {
              e.preventDefault()
              window.scrollTo({ top: 0, behavior: 'smooth' })
            }}
            className="flex items-center gap-2"
            aria-label="NexaTech Solutions home"
          >
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
              <Cpu className="h-5 w-5" />
            </div>
            <span className="text-xl font-bold tracking-tight">
              Nexa<span className="text-emerald-600">Tech</span>
            </span>
          </a>

          {/* Desktop menu */}
          <ul className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <li key={item.href}>
                <button
                  onClick={() => handleNavClick(item.href)}
                  className="px-3 py-2 text-sm font-medium text-muted-foreground transition-colors hover:text-foreground rounded-md hover:bg-accent"
                >
                  {item.label}
                </button>
              </li>
            ))}
          </ul>

          <div className="hidden md:flex items-center gap-3">
            <Button
              onClick={() => handleNavClick('#contact')}
              className="bg-emerald-600 hover:bg-emerald-700 text-white"
            >
              Get Started
              <ArrowRight className="h-4 w-4" />
            </Button>
          </div>

          {/* Mobile hamburger */}
          <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden" aria-label="Open menu">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-72">
              <SheetHeader>
                <SheetTitle className="flex items-center gap-2">
                  <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-emerald-600 text-white">
                    <Cpu className="h-4 w-4" />
                  </div>
                  Nexa<span className="text-emerald-600">Tech</span>
                </SheetTitle>
              </SheetHeader>
              <nav className="flex flex-col gap-1 px-4 mt-2">
                {NAV_ITEMS.map((item) => (
                  <SheetClose asChild key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="flex items-center justify-between rounded-md px-3 py-2.5 text-sm font-medium transition-colors hover:bg-accent"
                    >
                      {item.label}
                      <ChevronRight className="h-4 w-4 text-muted-foreground" />
                    </button>
                  </SheetClose>
                ))}
                <Separator className="my-2" />
                <SheetClose asChild>
                  <Button
                    onClick={() => handleNavClick('#contact')}
                    className="mt-1 bg-emerald-600 hover:bg-emerald-700 text-white w-full"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </nav>
            </SheetContent>
          </Sheet>
        </nav>
      </header>

      {/* ───── Main content ───── */}
      <main className="flex-1">
        {/* ───── Hero ───── */}
        <section className="relative overflow-hidden">
          {/* Background decorative elements */}
          <div className="absolute inset-0 -z-10">
            <div className="absolute top-0 right-0 w-[600px] h-[600px] rounded-full bg-emerald-500/5 blur-3xl" />
            <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full bg-emerald-400/5 blur-3xl" />
          </div>

          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-28">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Text side */}
              <motion.div
                initial="hidden"
                animate="visible"
                variants={staggerContainer}
                className="text-center lg:text-left"
              >
                <motion.div variants={fadeUp} custom={0}>
                  <Badge
                    variant="secondary"
                    className="mb-4 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                  >
                    🚀 Innovating since 2018
                  </Badge>
                </motion.div>
                <motion.h1
                  variants={fadeUp}
                  custom={1}
                  className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-tight"
                >
                  Transforming Ideas Into{' '}
                  <span className="text-emerald-600">Digital Reality</span>
                </motion.h1>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-5 text-lg sm:text-xl text-muted-foreground max-w-xl mx-auto lg:mx-0"
                >
                  We deliver cutting-edge IT services that empower businesses to
                  thrive in the digital age. From cloud solutions to AI, we turn
                  your vision into scalable, secure technology.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={3}
                  className="mt-8 flex flex-wrap gap-4 justify-center lg:justify-start"
                >
                  <Button
                    size="lg"
                    onClick={() => handleNavClick('#services')}
                    className="bg-emerald-600 hover:bg-emerald-700 text-white h-12 px-8 text-base"
                  >
                    Our Services
                    <ArrowRight className="h-5 w-5" />
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    onClick={() => handleNavClick('#contact')}
                    className="h-12 px-8 text-base border-emerald-300 text-emerald-700 hover:bg-emerald-50 dark:border-emerald-700 dark:text-emerald-400 dark:hover:bg-emerald-950"
                  >
                    Contact Us
                  </Button>
                </motion.div>
              </motion.div>

              {/* Image side */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, ease: 'easeOut' }}
                className="relative"
              >
                <div className="relative rounded-2xl overflow-hidden shadow-2xl border">
                  <img
                    src="/hero-image.png"
                    alt="NexaTech Solutions — modern IT infrastructure"
                    className="w-full h-auto object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/20 to-transparent" />
                </div>
                {/* Floating accent card */}
                <motion.div
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.8, duration: 0.5 }}
                  className="absolute -bottom-4 -left-4 sm:-bottom-6 sm:-left-6 rounded-xl bg-background border shadow-lg p-3 sm:p-4"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                      <CheckCircle2 className="h-5 w-5" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold">200+ Projects</p>
                      <p className="text-xs text-muted-foreground">Delivered on time</p>
                    </div>
                  </div>
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── Services ───── */}
        <section id="services" className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <Badge
                variant="secondary"
                className="mb-3 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
              >
                What We Do
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Our Services
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Comprehensive IT solutions tailored to your business needs,
                delivered by experts who care about your success.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {SERVICES.map((service, i) => (
                <motion.div key={service.title} variants={fadeUp} custom={i}>
                  <motion.div
                    whileHover={{ y: -6, scale: 1.02 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="h-full group hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                      <CardHeader>
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400 group-hover:bg-emerald-600 group-hover:text-white transition-colors">
                          <service.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">{service.title}</CardTitle>
                        <CardDescription>{service.description}</CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── About ───── */}
        <section id="about" className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              {/* Image */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={fadeUp}
                className="relative"
              >
                <div className="rounded-2xl overflow-hidden shadow-xl border">
                  <img
                    src="/about-image.png"
                    alt="NexaTech team collaborating on innovative solutions"
                    className="w-full h-auto object-cover"
                  />
                </div>
                {/* Decorative background */}
                <div className="absolute -z-10 -inset-4 rounded-3xl bg-emerald-500/5" />
              </motion.div>

              {/* Text */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-80px' }}
                variants={staggerContainer}
              >
                <motion.div variants={fadeUp} custom={0}>
                  <Badge
                    variant="secondary"
                    className="mb-3 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
                  >
                    About Us
                  </Badge>
                </motion.div>
                <motion.h2
                  variants={fadeUp}
                  custom={1}
                  className="text-3xl sm:text-4xl font-bold tracking-tight"
                >
                  Building the Future of{' '}
                  <span className="text-emerald-600">Technology</span>
                </motion.h2>
                <motion.p
                  variants={fadeUp}
                  custom={2}
                  className="mt-4 text-muted-foreground text-lg leading-relaxed"
                >
                  Founded in 2018, NexaTech Solutions started with a simple
                  mission: make world-class IT services accessible to businesses
                  of every size. What began as a small team of passionate
                  engineers has grown into a full-service technology partner
                  trusted by over 150 organizations worldwide.
                </motion.p>
                <motion.p
                  variants={fadeUp}
                  custom={3}
                  className="mt-4 text-muted-foreground leading-relaxed"
                >
                  We believe technology should be an enabler, not a barrier. Our
                  approach combines deep technical expertise with a genuine
                  understanding of business challenges, ensuring every solution
                  we deliver creates real, measurable impact.
                </motion.p>
                <motion.div
                  variants={fadeUp}
                  custom={4}
                  className="mt-8 grid grid-cols-2 gap-6"
                >
                  {STATS.map((stat) => (
                    <div key={stat.label}>
                      <p className="text-3xl font-extrabold text-emerald-600">
                        {stat.value}
                      </p>
                      <p className="text-sm text-muted-foreground mt-1">
                        {stat.label}
                      </p>
                    </div>
                  ))}
                </motion.div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* ───── Why Choose Us ───── */}
        <section id="why-us" className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <Badge
                variant="secondary"
                className="mb-3 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
              >
                Why NexaTech
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Why Choose NexaTech?
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                We combine expertise, innovation, and dedication to deliver
                results that exceed expectations.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2"
            >
              {WHY_US.map((item, i) => (
                <motion.div key={item.title} variants={fadeUp} custom={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-lg hover:border-emerald-200 dark:hover:border-emerald-800 transition-colors">
                      <CardHeader>
                        <div className="mb-2 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                          <item.icon className="h-6 w-6" />
                        </div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="leading-relaxed">
                          {item.description}
                        </CardDescription>
                      </CardHeader>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── Testimonials ───── */}
        <section className="py-20 sm:py-28">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <Badge
                variant="secondary"
                className="mb-3 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
              >
                Testimonials
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                What Our Clients Say
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Don&apos;t just take our word for it — hear from the businesses
                we&apos;ve helped transform.
              </p>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-60px' }}
              variants={staggerContainer}
              className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3"
            >
              {TESTIMONIALS.map((t, i) => (
                <motion.div key={t.name} variants={fadeUp} custom={i}>
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                    className="h-full"
                  >
                    <Card className="h-full hover:shadow-lg transition-shadow">
                      <CardHeader>
                        <div className="flex gap-0.5 mb-2">
                          {Array.from({ length: t.stars }).map((_, si) => (
                            <Star
                              key={si}
                              className="h-4 w-4 fill-amber-400 text-amber-400"
                            />
                          ))}
                        </div>
                        <CardDescription className="text-sm italic leading-relaxed">
                          &ldquo;{t.quote}&rdquo;
                        </CardDescription>
                      </CardHeader>
                      <CardContent>
                        <div className="flex items-center gap-3">
                          <Avatar className="h-10 w-10 bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300">
                            <AvatarFallback>{t.initials}</AvatarFallback>
                          </Avatar>
                          <div>
                            <p className="text-sm font-semibold">{t.name}</p>
                            <p className="text-xs text-muted-foreground">
                              {t.role}
                            </p>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* ───── Contact ───── */}
        <section id="contact" className="py-20 sm:py-28 bg-muted/40">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: '-80px' }}
              variants={fadeUp}
              className="text-center max-w-2xl mx-auto mb-14"
            >
              <Badge
                variant="secondary"
                className="mb-3 bg-emerald-50 text-emerald-700 border-emerald-200 dark:bg-emerald-950 dark:text-emerald-300 dark:border-emerald-800"
              >
                Contact
              </Badge>
              <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
                Get In Touch
              </h2>
              <p className="mt-3 text-muted-foreground text-lg">
                Have a project in mind? We&apos;d love to hear from you. Send us
                a message and we&apos;ll respond within 24 hours.
              </p>
            </motion.div>

            <div className="grid lg:grid-cols-3 gap-10">
              {/* Form */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                className="lg:col-span-2"
              >
                {submitted ? (
                  <Card className="p-8 text-center">
                    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-emerald-100 text-emerald-700 dark:bg-emerald-900 dark:text-emerald-300 mx-auto mb-4">
                      <CheckCircle2 className="h-8 w-8" />
                    </div>
                    <h3 className="text-xl font-semibold mb-2">
                      Message Sent!
                    </h3>
                    <p className="text-muted-foreground">
                      Thank you for reaching out. We&apos;ll get back to you
                      within 24 hours.
                    </p>
                    <Button
                      variant="outline"
                      className="mt-6"
                      onClick={() => setSubmitted(false)}
                    >
                      Send Another Message
                    </Button>
                  </Card>
                ) : (
                  <Card className="p-6 sm:p-8">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="text-sm font-medium"
                          >
                            Name <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your full name"
                            required
                            value={formState.name}
                            onChange={handleFormChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="text-sm font-medium"
                          >
                            Email <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="you@company.com"
                            required
                            value={formState.email}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      <div className="grid sm:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">
                            Phone
                          </label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            placeholder="+1 (555) 000-0000"
                            value={formState.phone}
                            onChange={handleFormChange}
                          />
                        </div>
                        <div className="space-y-2">
                          <label
                            htmlFor="subject"
                            className="text-sm font-medium"
                          >
                            Subject <span className="text-destructive">*</span>
                          </label>
                          <Input
                            id="subject"
                            name="subject"
                            placeholder="How can we help?"
                            required
                            value={formState.subject}
                            onChange={handleFormChange}
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="text-sm font-medium"
                        >
                          Message <span className="text-destructive">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          rows={5}
                          placeholder="Tell us about your project..."
                          required
                          value={formState.message}
                          onChange={handleFormChange}
                        />
                      </div>
                      <Button
                        type="submit"
                        size="lg"
                        disabled={submitting}
                        className="bg-emerald-600 hover:bg-emerald-700 text-white w-full sm:w-auto"
                      >
                        {submitting ? 'Sending...' : 'Send Message'}
                        <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  </Card>
                )}
              </motion.div>

              {/* Contact info sidebar */}
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                variants={fadeUp}
                custom={1}
                className="space-y-6"
              >
                <Card className="p-6">
                  <h3 className="font-semibold mb-4">Contact Information</h3>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                        <MapPin className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Office Address</p>
                        <p className="text-sm text-muted-foreground">
                          1234 Innovation Drive, Suite 500
                          <br />
                          San Francisco, CA 94105
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                        <Mail className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Email</p>
                        <p className="text-sm text-muted-foreground">
                          hello@nexatech.io
                        </p>
                      </div>
                    </div>
                    <Separator />
                    <div className="flex items-start gap-3">
                      <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-700 dark:bg-emerald-900/50 dark:text-emerald-400">
                        <Phone className="h-5 w-5" />
                      </div>
                      <div>
                        <p className="text-sm font-medium">Phone</p>
                        <p className="text-sm text-muted-foreground">
                          +1 (555) 987-6543
                        </p>
                      </div>
                    </div>
                  </div>
                </Card>

                <Card className="p-6 bg-emerald-600 text-white border-emerald-600">
                  <h3 className="font-semibold mb-2">Need Immediate Help?</h3>
                  <p className="text-emerald-100 text-sm mb-4">
                    Our support team is available 24/7 for urgent inquiries and
                    technical assistance.
                  </p>
                  <Button
                    variant="secondary"
                    className="w-full bg-white text-emerald-700 hover:bg-emerald-50"
                    onClick={() => handleNavClick('#contact')}
                  >
                    Call Now
                  </Button>
                </Card>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      {/* ───── Footer ───── */}
      <footer className="border-t bg-background mt-auto">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Company info */}
            <div className="sm:col-span-2 lg:col-span-1">
              <div className="flex items-center gap-2 mb-4">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-emerald-600 text-white">
                  <Cpu className="h-5 w-5" />
                </div>
                <span className="text-lg font-bold">
                  Nexa<span className="text-emerald-600">Tech</span>
                </span>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Transforming ideas into digital reality. Your trusted partner
                for innovative IT solutions.
              </p>
              {/* Social icons */}
              <div className="flex gap-3 mt-4">
                {['X', 'Li', 'Gh', 'Yt'].map((icon) => (
                  <a
                    key={icon}
                    href="#"
                    aria-label={`Follow us on ${icon}`}
                    className="flex h-9 w-9 items-center justify-center rounded-md bg-muted text-muted-foreground transition-colors hover:bg-emerald-100 hover:text-emerald-700 dark:hover:bg-emerald-900 dark:hover:text-emerald-300"
                  >
                    <span className="text-xs font-bold">{icon}</span>
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Quick Links</h4>
              <ul className="space-y-2">
                {NAV_ITEMS.map((item) => (
                  <li key={item.href}>
                    <button
                      onClick={() => handleNavClick(item.href)}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {item.label}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Services</h4>
              <ul className="space-y-2">
                {SERVICES.slice(0, 5).map((s) => (
                  <li key={s.title}>
                    <button
                      onClick={() => handleNavClick('#services')}
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {s.title}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-semibold mb-3">Contact Info</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li className="flex items-center gap-2">
                  <MapPin className="h-4 w-4 shrink-0 text-emerald-600" />
                  San Francisco, CA
                </li>
                <li className="flex items-center gap-2">
                  <Mail className="h-4 w-4 shrink-0 text-emerald-600" />
                  hello@nexatech.io
                </li>
                <li className="flex items-center gap-2">
                  <Phone className="h-4 w-4 shrink-0 text-emerald-600" />
                  +1 (555) 987-6543
                </li>
              </ul>
            </div>
          </div>

          <Separator className="my-8" />

          <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-sm text-muted-foreground">
            <p>&copy; {new Date().getFullYear()} NexaTech Solutions. All rights reserved.</p>
            <div className="flex gap-4">
              <a href="#" className="hover:text-foreground transition-colors">
                Privacy Policy
              </a>
              <a href="#" className="hover:text-foreground transition-colors">
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
