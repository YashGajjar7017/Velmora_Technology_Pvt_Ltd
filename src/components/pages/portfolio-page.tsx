'use client'

import { useState, useMemo } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PROJECTS } from '@/lib/data'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ExternalLink, ArrowRight } from 'lucide-react'

interface PortfolioPageProps {
  onNavigate: (page: string) => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

export default function PortfolioPage({ onNavigate }: PortfolioPageProps) {
  const [activeCategory, setActiveCategory] = useState('All')

  const categories = useMemo(() => {
    const uniqueCategories = Array.from(new Set(PROJECTS.map((p) => p.category)))
    return ['All', ...uniqueCategories]
  }, [])

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'All') return PROJECTS
    return PROJECTS.filter((p) => p.category === activeCategory)
  }, [activeCategory])

  return (
    <div className="flex flex-col">
      {/* ─── Page Header ─── */}
      <section className="relative overflow-hidden bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28">
        <div className="pointer-events-none absolute -top-20 -left-20 h-72 w-72 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-16 -bottom-16 h-64 w-64 rounded-full bg-emerald-300/15 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge className="bg-emerald-500/30 text-white border-emerald-400/40 px-3 py-1.5 text-sm font-medium hover:bg-emerald-500/40">
                Our Work
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              custom={0.1}
              className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl"
            >
              Portfolio & Case Studies
            </motion.h1>
            <motion.p
              variants={fadeUp}
              custom={0.2}
              className="mx-auto mt-2 max-w-2xl text-lg text-emerald-100"
            >
              Showcasing our most successful projects and the transformative results we&apos;ve
              delivered for clients across industries.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Filter Bar ─── */}
      <section className="border-b bg-background py-6">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-none">
            {categories.map((category) => (
              <Button
                key={category}
                variant="outline"
                size="sm"
                onClick={() => setActiveCategory(category)}
                className={`shrink-0 rounded-full px-4 transition-colors ${
                  activeCategory === category
                    ? 'bg-emerald-600 text-white border-emerald-600 hover:bg-emerald-700 hover:text-white'
                    : 'hover:bg-muted'
                }`}
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Projects Grid ─── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              exit={{ opacity: 0 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {filteredProjects.map((project, index) => (
                <motion.div
                  key={project.title}
                  variants={fadeUp}
                  custom={index * 0.1}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full overflow-hidden transition-shadow hover:shadow-xl py-0 gap-0 flex flex-col dark:border-slate-700 dark:bg-slate-900">
                    {/* Image Area */}
                    <div className="relative h-48 w-full overflow-hidden rounded-t-xl bg-gradient-to-br from-gray-200 to-gray-300 dark:from-slate-700 dark:to-slate-800">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="h-full w-full object-cover"
                      />
                      {/* Gradient overlay at bottom */}
                      <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/50 to-transparent" />
                      {/* Category badge */}
                      <Badge className="absolute top-3 left-3 bg-emerald-600 text-white border-emerald-500 hover:bg-emerald-700">
                        {project.category}
                      </Badge>
                    </div>

                    <CardHeader className="pt-5 pb-3">
                      <CardTitle className="text-lg">{project.title}</CardTitle>
                      <CardDescription className="text-muted-foreground leading-relaxed">
                        {project.description}
                      </CardDescription>
                    </CardHeader>

                    <CardContent className="pb-5 pt-0 flex flex-col gap-4 flex-1">
                      {/* Stats row */}
                      {project.stats && project.stats.length > 0 && (
                        <div className="grid grid-cols-3 gap-3 py-3 px-2 rounded-lg bg-muted/50 dark:bg-slate-800/50">
                          {project.stats.map((stat) => (
                            <div key={stat.label} className="text-center">
                              <div className="text-sm font-bold text-emerald-600 dark:text-emerald-400">{stat.value}</div>
                              <div className="text-xs text-muted-foreground dark:text-slate-400">{stat.label}</div>
                            </div>
                          ))}
                        </div>
                      )}

                      {/* Tags row */}
                      <div className="flex flex-wrap gap-1.5">
                        {project.tags.map((tag) => (
                          <span
                            key={tag}
                            className="inline-flex items-center rounded-md bg-muted px-2 py-0.5 text-xs font-medium text-muted-foreground dark:bg-slate-800 dark:text-slate-300"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>

                      {/* View Case Study link */}
                      <div className="mt-auto">
                        <Button
                          variant="ghost"
                          className="group p-0 text-emerald-600 hover:text-emerald-700 dark:text-emerald-400 dark:hover:text-emerald-300"
                        >
                          View Case Study
                          <ExternalLink className="ml-1.5 h-3.5 w-3.5 transition-transform group-hover:translate-x-0.5" />
                        </Button>
                      </div>
                    </CardContent>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </AnimatePresence>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-20">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="rounded-2xl bg-gradient-to-r from-emerald-600 to-emerald-700 px-6 py-16 text-center sm:px-12 sm:py-20"
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Have a Project in Mind?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100">
              Let&apos;s discuss how we can bring your vision to life
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
                onClick={() => onNavigate('contact')}
              >
                Start a Project
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
