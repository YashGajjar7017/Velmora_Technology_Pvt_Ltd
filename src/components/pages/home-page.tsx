'use client'

import { motion } from 'framer-motion'
import { SERVICES, STATS, WHY_US, TESTIMONIALS, TRUSTED_BY } from '@/lib/data'
import { Button } from '@/components/ui/button'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Avatar, AvatarFallback } from '@/components/ui/avatar'
import { ArrowRight, CheckCircle2, Star, ChevronRight } from 'lucide-react'

interface HomePageProps {
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

export default function HomePage({ onNavigate }: HomePageProps) {
  return (
    <div className="flex flex-col">
      {/* ─── Hero Section ─── */}
      <section className="relative overflow-hidden py-20 md:py-28">
        {/* Decorative blurred circles */}
        <div className="pointer-events-none absolute -top-32 -left-32 h-96 w-96 rounded-full bg-emerald-400/20 blur-3xl" />
        <div className="pointer-events-none absolute -right-24 -bottom-24 h-80 w-80 rounded-full bg-emerald-300/20 blur-3xl" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid items-center gap-12 lg:grid-cols-2">
            {/* Left content */}
            <motion.div
              variants={staggerContainer}
              initial="hidden"
              animate="visible"
              className="flex flex-col items-start gap-6"
            >
              <motion.h1
                variants={fadeUp}
                custom={0.1}
                className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl"
              >
                Transforming Ideas Into{' '}
                <span className="text-emerald-600">Digital Reality</span>
              </motion.h1>

              <motion.p
                variants={fadeUp}
                custom={0.2}
                className="max-w-lg text-lg text-muted-foreground"
              >
                Velmora delivers end-to-end IT services — from custom software
                development and cloud migration to cybersecurity and AI-powered solutions. We
                partner with businesses to drive digital transformation and lasting results.
              </motion.p>

              <motion.div variants={fadeUp} custom={0.3} className="flex flex-wrap gap-4">
                <Button
                  size="lg"
                  className="bg-emerald-600 text-white hover:bg-emerald-700"
                  onClick={() => onNavigate('services')}
                >
                  Our Services
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  onClick={() => onNavigate('contact')}
                >
                  Contact Us
                </Button>
              </motion.div>
            </motion.div>

            {/* Right image */}
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, delay: 0.3, ease: 'easeOut' }}
              className="relative hidden lg:block"
            >
              <div className="relative overflow-hidden rounded-2xl shadow-2xl">
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/20 to-transparent z-10" />
                <img
                  src="/hero-image.png"
                  alt="Velmora — IT services hero"
                  className="h-auto w-full object-cover"
                />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── Trusted By Section ─── */}
      <section className="border-y bg-muted/30 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0}
            className="text-center"
          >
            <p className="mb-6 text-sm font-semibold uppercase tracking-wider text-muted-foreground">
              Trusted by Industry Leaders
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4">
              {TRUSTED_BY.map((name) => (
                <Badge
                  key={name}
                  variant="outline"
                  className="px-4 py-2 text-sm font-medium text-muted-foreground"
                >
                  {name}
                </Badge>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* ─── Featured Services Section ─── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.div variants={fadeUp} custom={0}>
              <Badge variant="secondary" className="mb-4 px-3 py-1.5 text-sm font-medium">
                What We Do
              </Badge>
            </motion.div>
            <motion.h2
              variants={fadeUp}
              custom={0.1}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our Core Services
            </motion.h2>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICES.slice(0, 3).map((service, index) => {
              const Icon = service.icon
              return (
                <motion.div
                  key={service.title}
                  variants={fadeUp}
                  custom={0.15 + index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <div className="mb-3 flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600 transition-colors group-hover:bg-emerald-600 group-hover:text-white">
                        <Icon className="h-6 w-6" />
                      </div>
                      <CardTitle className="text-xl">{service.title}</CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {service.shortDescription}
                      </CardDescription>
                    </CardHeader>
                    <CardContent>
                      <Button
                        variant="ghost"
                        className="group p-0 text-emerald-600 hover:text-emerald-700"
                        onClick={() => onNavigate('services')}
                      >
                        Learn more
                        <ChevronRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </div>

          <motion.div
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={0.4}
            className="mt-12 text-center"
          >
            <Button
              size="lg"
              variant="outline"
              className="gap-2"
              onClick={() => onNavigate('services')}
            >
              View All Services
              <ArrowRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us Section ─── */}
      <section className="bg-muted/40 py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              We combine expertise, innovation, and dedication to deliver exceptional results for
              every client.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2">
            {WHY_US.map((item, index) => {
              const Icon = item.icon
              return (
                <motion.div
                  key={item.title}
                  variants={fadeUp}
                  custom={0.15 + index * 0.1}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  whileHover={{ y: -6 }}
                  transition={{ duration: 0.3 }}
                >
                  <Card className="h-full">
                    <CardHeader className="flex flex-row items-start gap-4 space-y-0">
                      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{item.title}</CardTitle>
                        <CardDescription className="mt-1.5 text-muted-foreground">
                          {item.description}
                        </CardDescription>
                      </div>
                    </CardHeader>
                  </Card>
                </motion.div>
              )
            })}
          </div>
        </div>
      </section>

      {/* ─── Testimonials Section ─── */}
      <section className="py-20 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            className="text-center"
          >
            <motion.h2
              variants={fadeUp}
              custom={0}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Our Clients Say
            </motion.h2>
            <motion.p
              variants={fadeUp}
              custom={0.1}
              className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground"
            >
              Don&apos;t just take our word for it — hear from the businesses we&apos;ve helped
              succeed.
            </motion.p>
          </motion.div>

          <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {TESTIMONIALS.map((testimonial, index) => (
              <motion.div
                key={testimonial.name}
                variants={fadeUp}
                custom={0.15 + index * 0.1}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                whileHover={{ y: -6 }}
                transition={{ duration: 0.3 }}
              >
                <Card className="h-full">
                  <CardContent className="pt-6">
                    {/* Stars */}
                    <div className="mb-4 flex gap-1">
                      {Array.from({ length: testimonial.stars }).map((_, i) => (
                        <Star
                          key={i}
                          className="h-4 w-4 fill-amber-400 text-amber-400"
                        />
                      ))}
                    </div>

                    {/* Quote */}
                    <p className="mb-6 text-muted-foreground leading-relaxed">
                      &ldquo;{testimonial.quote}&rdquo;
                    </p>

                    {/* Author */}
                    <div className="flex items-center gap-3">
                      <Avatar className="h-10 w-10">
                        <AvatarFallback className="bg-emerald-100 text-emerald-700 text-sm font-semibold">
                          {testimonial.initials}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <p className="text-sm font-semibold">{testimonial.name}</p>
                        <p className="text-xs text-muted-foreground">{testimonial.role}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-20 md:py-24">
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
              Ready to Transform Your Business?
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-lg text-emerald-100">
              Let&apos;s discuss how Velmora can help you achieve your technology goals
              and drive measurable growth.
            </p>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-4">
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50"
                onClick={() => onNavigate('contact')}
              >
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button
                size="lg"
                className="border-2 border-white bg-transparent text-white hover:bg-white/15"
                onClick={() => onNavigate('about')}
              >
                Learn More
              </Button>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
