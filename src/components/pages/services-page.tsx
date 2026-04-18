'use client'

import { motion } from 'framer-motion'
import { SERVICES, TECH_STACK } from '@/lib/data'
import { Button } from '@/components/ui/button'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { ArrowRight, CheckCircle2 } from 'lucide-react'

interface ServicesPageProps {
  onNavigate: (page: string) => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (delay: number = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay, ease: 'easeOut' },
  }),
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
}

export default function ServicesPage({ onNavigate }: ServicesPageProps) {
  return (
    <div className="flex flex-col">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-emerald-600 to-emerald-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-4xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0}
          >
            <Badge className="mb-4 border-emerald-400/30 bg-emerald-500/20 text-emerald-100 hover:bg-emerald-500/30">
              Our Services
            </Badge>
          </motion.div>
          <motion.h1
            className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.1}
          >
            Comprehensive IT Solutions
          </motion.h1>
          <motion.p
            className="mx-auto mt-6 max-w-2xl text-lg text-emerald-100/80"
            initial="hidden"
            animate="visible"
            variants={fadeUp}
            custom={0.2}
          >
            From web development to AI, we deliver end-to-end technology
            services that drive real business results.
          </motion.p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="grid gap-6 md:grid-cols-2"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {SERVICES.map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={index * 0.1}
                >
                  <motion.div
                    whileHover={{ y: -4 }}
                    transition={{ duration: 0.2 }}
                    className="h-full"
                  >
                    <Card className="group h-full border-border/50 transition-shadow duration-300 hover:shadow-lg">
                      <CardHeader>
                        <div className="mb-4 flex items-center gap-4">
                          <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 transition-colors duration-300 group-hover:bg-emerald-600">
                            <Icon className="h-6 w-6 text-emerald-600 transition-colors duration-300 group-hover:text-white" />
                          </div>
                          <CardTitle className="text-xl font-semibold">
                            {service.title}
                          </CardTitle>
                        </div>
                        <CardDescription className="text-base leading-relaxed">
                          {service.description}
                        </CardDescription>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <ul className="grid gap-2">
                          {service.features.map((feature) => (
                            <li
                              key={feature}
                              className="flex items-start gap-2 text-sm text-muted-foreground"
                            >
                              <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                              <span>{feature}</span>
                            </li>
                          ))}
                        </ul>
                        <Button
                          variant="ghost"
                          className="group/btn mt-2 text-emerald-600 hover:text-emerald-700 hover:bg-emerald-50"
                          onClick={() => onNavigate('contact')}
                        >
                          Learn More
                          <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover/btn:translate-x-1" />
                        </Button>
                      </CardContent>
                    </Card>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* Technology Stack Section */}
      <section className="bg-muted/40 py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="mb-12 text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
              Our Technology Stack
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted-foreground">
              We leverage industry-leading tools and frameworks to build
              reliable, scalable, and future-proof solutions.
            </p>
          </motion.div>
          <motion.div
            className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:grid-cols-4"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            {TECH_STACK.map((tech, index) => {
              const Icon = tech.icon
              return (
                <motion.div
                  key={tech.name}
                  variants={fadeUp}
                  custom={index * 0.05}
                >
                  <motion.div
                    whileHover={{ y: -2, scale: 1.02 }}
                    transition={{ duration: 0.2 }}
                    className="flex items-center gap-3 rounded-lg border border-border/50 bg-background p-4 shadow-sm transition-shadow duration-300 hover:shadow-md"
                  >
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-md bg-emerald-100">
                      <Icon className="h-5 w-5 text-emerald-600" />
                    </div>
                    <span className="text-sm font-medium">{tech.name}</span>
                  </motion.div>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            className="rounded-2xl bg-gradient-to-br from-emerald-600 to-emerald-800 p-8 text-center shadow-xl sm:p-12 md:p-16"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            custom={0}
          >
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to Get Started?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-emerald-100/80">
              Contact us today to discuss your project requirements
            </p>
            <Button
              size="lg"
              className="mt-8 bg-white text-emerald-700 hover:bg-emerald-50"
              onClick={() => onNavigate('contact')}
            >
              Contact Us
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
