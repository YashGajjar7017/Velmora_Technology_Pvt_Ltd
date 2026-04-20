'use client'

import { motion } from 'framer-motion'
import { STATS, TEAM, FOUNDERS, WHY_US } from '@/lib/data'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { ArrowRight, Target, Eye, Heart, Linkedin, Twitter } from 'lucide-react'

interface AboutPageProps {
  onNavigate: (page: string) => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
}

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
}

const missionVisionValues = [
  {
    icon: Target,
    title: 'Our Mission',
    description:
      'To make world-class IT services accessible to businesses of every size, empowering them to thrive in the digital age.',
  },
  {
    icon: Eye,
    title: 'Our Vision',
    description:
      'To be the most trusted technology partner for businesses worldwide, known for innovation, reliability, and impact.',
  },
  {
    icon: Heart,
    title: 'Our Values',
    description:
      'Integrity, Innovation, Excellence, and Collaboration guide every decision we make and every solution we deliver.',
  },
]

export default function AboutPage({ onNavigate }: AboutPageProps) {
  return (
    <div className="flex flex-col">
      {/* ─── Page Header ─── */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800 py-20 md:py-28">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10" />
        <div className="relative mx-auto max-w-7xl px-4 text-center sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
            className="flex flex-col items-center gap-4"
          >
            <motion.div variants={fadeUp}>
              <Badge className="bg-emerald-500/30 text-emerald-100 border-emerald-400/30 hover:bg-emerald-500/40">
                About Us
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-4xl font-bold tracking-tight text-white sm:text-5xl md:text-6xl"
            >
              Building the Future of Technology
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-2xl text-lg text-emerald-100/90"
            >
              We are a passionate team of technologists dedicated to transforming businesses through innovative IT solutions and unwavering commitment to excellence.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* ─── Our Story ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-12 lg:grid-cols-2 lg:items-center"
          >
            {/* Left: Image */}
            <motion.div variants={fadeUp} className="relative">
              <img
                src="/about-image.png"
                alt="Velmora team collaborating"
                className="w-full rounded-2xl shadow-xl object-cover"
              />
            </motion.div>

            {/* Right: Story text */}
            <motion.div variants={fadeUp} className="flex flex-col gap-6">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                Our Story
              </h2>
              <p className="text-muted-foreground leading-relaxed">
                Founded in 2018, Velmora started with a simple mission: to
                bridge the gap between complex technology and everyday business needs.
                What began as a small team of three passionate engineers has grown into a
                full-service IT company serving clients across industries and continents.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                We believe technology should be an enabler, not a barrier. Our approach
                combines deep technical expertise with a genuine understanding of business
                challenges, allowing us to deliver solutions that create real, measurable
                impact. From startups to enterprises, we help organizations harness the
                power of technology to achieve their goals.
              </p>

              {/* Stats Grid */}
              <div className="mt-4 grid grid-cols-2 gap-6">
                {STATS.map((stat) => (
                  <div key={stat.label} className="flex flex-col">
                    <span className="text-3xl font-bold text-emerald-600 dark:text-emerald-400">
                      {stat.value}
                    </span>
                    <span className="text-sm text-muted-foreground dark:text-slate-400">{stat.label}</span>
                  </div>
                ))}
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ─── Mission, Vision, Values ─── */}
      <section className="py-16 md:py-24 bg-muted/30 dark:bg-slate-900/30">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              What Drives Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground mx-auto max-w-2xl"
            >
              Our core principles shape everything we do — from the solutions we build to the relationships we nurture.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-3"
          >
            {missionVisionValues.map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -6 }}>
                <Card className="h-full text-center py-8 dark:border-slate-700 dark:bg-slate-900">
                  <CardHeader className="items-center gap-4">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100 dark:bg-emerald-900/30 text-emerald-600 dark:text-emerald-400">
                      <item.icon className="h-7 w-7" />
                    </div>
                    <CardTitle className="text-xl">{item.title}</CardTitle>
                    <CardDescription className="text-muted-foreground dark:text-slate-400 leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Founder & Co-Founder ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Our Leadership
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground mx-auto max-w-2xl"
            >
              The visionary leaders who founded Velmora and continue to steer the company toward excellence.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-8 md:grid-cols-2 max-w-4xl mx-auto"
          >
            {FOUNDERS.map((leader) => (
              <motion.div
                key={leader.name}
                variants={fadeUp}
                whileHover={{ y: -6 }}
                className="flex flex-col items-center rounded-2xl border dark:border-slate-700 bg-card dark:bg-slate-900 p-8 text-center shadow-sm transition-shadow hover:shadow-lg dark:hover:shadow-emerald-900/20"
              >
                {/* Founder Image */}
                <div className="mb-6 h-48 w-48 overflow-hidden rounded-full border-4 border-emerald-100 dark:border-emerald-900/30 shadow-md">
                  <img
                    src={leader.image}
                    alt={leader.name}
                    className="h-full w-full object-cover"
                  />
                </div>

                {/* Name & Role */}
                <h3 className="text-xl font-bold">{leader.name}</h3>
                <Badge className="mt-2 bg-emerald-100 text-emerald-700 border-emerald-200 hover:bg-emerald-200">
                  {leader.role}
                </Badge>

                {/* Bio */}
                <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                  {leader.bio}
                </p>

                {/* Social Links */}
                <div className="mt-5 flex items-center gap-3">
                <a
                  href={leader.linkedin}   // add this field in your FOUNDERS data
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-emerald-600 hover:text-white"
                   >
                   <Linkedin className="h-4 w-4" />
                </a>
                <a href={leader.twitter} 
                target="_blank" rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-muted text-muted-foreground hover:bg-emerald-600 hover:text-white">
                   <Twitter className="h-4 w-4" />
               </a>
                </div>
               </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Our Team (text-only) ─── */}
      <section className="py-16 md:py-24 bg-muted/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Meet Our Team
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground mx-auto max-w-2xl"
            >
              Tower 2 ,Gifr City , Gandhinagar , Gujarat , India.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
          >
            {TEAM.map((member) => (
              <motion.div
                key={member.name}
                variants={fadeUp}
                whileHover={{ y: -4 }}
                className="flex flex-col items-center gap-2 rounded-xl border bg-card p-5 text-center shadow-sm transition-shadow hover:shadow-md"
              >
                <h3 className="text-base font-semibold">{member.name}</h3>
                <p className="text-sm text-emerald-600 font-medium">{member.role}</p>
                <Badge variant="outline" className="text-xs text-muted-foreground">
                  {member.department}
                </Badge>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── Why Choose Us ─── */}
      <section className="py-16 md:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-12"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight sm:text-4xl"
            >
              Why Choose Us
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mt-4 text-muted-foreground mx-auto max-w-2xl"
            >
              What sets Velmora apart from the rest — and why our clients keep coming back.
            </motion.p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid gap-6 md:grid-cols-2"
          >
            {WHY_US.map((item) => (
              <motion.div key={item.title} variants={fadeUp} whileHover={{ y: -4 }}>
                <Card className="h-full">
                  <CardHeader className="gap-4">
                    <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-emerald-100 text-emerald-600">
                      <item.icon className="h-6 w-6" />
                    </div>
                    <CardTitle className="text-lg">{item.title}</CardTitle>
                    <CardDescription className="leading-relaxed">
                      {item.description}
                    </CardDescription>
                  </CardHeader>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ─── CTA Section ─── */}
      <section className="py-16 md:py-24 bg-gradient-to-br from-emerald-600 via-emerald-700 to-emerald-800">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="flex flex-col items-center gap-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-3xl font-bold tracking-tight text-white sm:text-4xl"
            >
              Want to Work With Us?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="mx-auto max-w-xl text-emerald-100/90"
            >
              Let&apos;s discuss how Velmora can help transform your business with innovative technology solutions.
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-white text-emerald-700 hover:bg-emerald-50 font-semibold"
                onClick={() => onNavigate('contact')}
              >
                Contact Us
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
