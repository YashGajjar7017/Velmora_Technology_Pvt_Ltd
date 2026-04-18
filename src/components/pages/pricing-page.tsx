'use client'

import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { PRICING_PLANS } from '@/lib/data'
import {
  Card,
  CardHeader,
  CardTitle,
  CardDescription,
  CardContent,
} from '@/components/ui/card'
import { Badge } from '@/components/ui/badge'
import { Button } from '@/components/ui/button'
import { Separator } from '@/components/ui/separator'
import { Check, ArrowRight, HelpCircle, ChevronDown } from 'lucide-react'

interface PricingPageProps {
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
    transition: { staggerChildren: 0.15, delayChildren: 0.1 },
  },
}

interface FAQItem {
  question: string
  answer: string
}

const FAQ_DATA: FAQItem[] = [
  {
    question: 'How long does a typical project take?',
    answer:
      'Project timelines vary based on scope and complexity. A simple website takes 2-4 weeks, while enterprise solutions may take 3-6 months. We provide detailed timelines during our initial consultation.',
  },
  {
    question: 'Do you offer ongoing maintenance and support?',
    answer:
      'Yes! All our plans include post-launch support, and we offer extended maintenance contracts for ongoing updates, security patches, and performance monitoring.',
  },
  {
    question: 'Can I start with a smaller project and scale up?',
    answer:
      'Absolutely. Many of our clients start with a MVP and expand over time. Our architectures are designed to scale with your business needs.',
  },
  {
    question: 'What technologies do you use?',
    answer:
      'We use modern, industry-standard technologies including React, Next.js, Node.js, Python, AWS, Azure, and more. We choose the best stack for each project\'s requirements.',
  },
  {
    question: 'How do you handle project communication?',
    answer:
      'We assign a dedicated project manager, provide weekly progress updates, and use tools like Slack and Jira for real-time collaboration and transparency.',
  },
]

function FAQSectionItem({ item }: { item: FAQItem }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="border rounded-lg overflow-hidden">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex items-center justify-between p-4 sm:p-5 text-left hover:bg-muted/50 transition-colors"
      >
        <span className="font-semibold text-sm sm:text-base pr-4">{item.question}</span>
        <motion.div
          animate={{ rotate: isOpen ? 180 : 0 }}
          transition={{ duration: 0.25 }}
          className="shrink-0"
        >
          <ChevronDown className="h-5 w-5 text-muted-foreground" />
        </motion.div>
      </button>
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="overflow-hidden"
          >
            <div className="px-4 sm:px-5 pb-4 sm:pb-5 text-muted-foreground text-sm leading-relaxed">
              {item.answer}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  )
}

export default function PricingPage({ onNavigate }: PricingPageProps) {
  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="relative bg-gradient-to-br from-emerald-600 via-emerald-500 to-teal-500 py-16 sm:py-20 lg:py-24">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(255,255,255,0.1),transparent)] pointer-events-none" />
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            <motion.div variants={fadeUp}>
              <Badge className="bg-white/20 text-white hover:bg-white/30 border-white/30 backdrop-blur-sm">
                Pricing
              </Badge>
            </motion.div>
            <motion.h1
              variants={fadeUp}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight"
            >
              Simple, Transparent Pricing
            </motion.h1>
            <motion.p
              variants={fadeUp}
              className="text-lg sm:text-xl text-emerald-100 max-w-2xl mx-auto"
            >
              Fair pricing for quality work. No hidden fees, no surprises — just honest
              solutions that deliver real value for your business.
            </motion.p>
          </motion.div>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start"
          >
            {PRICING_PLANS.map((plan) => {
              const PlanIcon = plan.icon
              return (
                <motion.div
                  key={plan.name}
                  variants={fadeUp}
                  whileHover={{ y: -6, transition: { duration: 0.25 } }}
                  className={`relative ${plan.highlighted ? 'lg:scale-105 z-10' : ''}`}
                >
                  <Card
                    className={`relative h-full transition-shadow duration-300 ${
                      plan.highlighted
                        ? 'border-emerald-600 shadow-lg shadow-emerald-600/20'
                        : 'border-border hover:shadow-md'
                    }`}
                  >
                    {plan.highlighted && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                        <Badge className="bg-emerald-600 text-white hover:bg-emerald-700 px-3 py-1 shadow-sm">
                          Most Popular
                        </Badge>
                      </div>
                    )}
                    <CardHeader className="text-center pb-2 pt-6">
                      <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-emerald-100">
                        <PlanIcon className="h-7 w-7 text-emerald-600" />
                      </div>
                      <CardTitle className="text-xl font-bold">{plan.name}</CardTitle>
                      <div className="mt-3">
                        <span
                          className={`text-4xl font-extrabold ${
                            plan.highlighted ? 'text-emerald-600' : 'text-foreground'
                          }`}
                        >
                          {plan.price}
                        </span>
                        {plan.period && (
                          <span className="text-muted-foreground text-sm ml-1">
                            {plan.period}
                          </span>
                        )}
                      </div>
                      <CardDescription className="mt-2 text-sm">
                        {plan.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="pt-4 pb-6">
                      <Separator className="mb-5" />
                      <ul className="space-y-3 mb-6">
                        {plan.features.map((feature) => (
                          <li key={feature} className="flex items-start gap-3">
                            <Check className="h-5 w-5 text-emerald-600 shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">{feature}</span>
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`w-full gap-2 ${
                          plan.highlighted
                            ? 'bg-emerald-600 hover:bg-emerald-700 text-white'
                            : 'border-emerald-600 text-emerald-600 hover:bg-emerald-50'
                        }`}
                        variant={plan.highlighted ? 'default' : 'outline'}
                        onClick={() => onNavigate('contact')}
                      >
                        Get Started
                        <ArrowRight className="h-4 w-4" />
                      </Button>
                    </CardContent>
                  </Card>
                </motion.div>
              )
            })}
          </motion.div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 sm:py-20 lg:py-24 bg-muted/40">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="text-center mb-10 sm:mb-12"
          >
            <motion.div variants={fadeUp} className="flex items-center justify-center gap-2 mb-4">
              <HelpCircle className="h-6 w-6 text-emerald-600" />
              <h2 className="text-2xl sm:text-3xl font-bold tracking-tight">
                Frequently Asked Questions
              </h2>
            </motion.div>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-3"
          >
            {FAQ_DATA.map((item, index) => (
              <motion.div key={index} variants={fadeUp}>
                <FAQSectionItem item={item} />
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
            className="space-y-4 sm:space-y-6"
          >
            <motion.h2
              variants={fadeUp}
              className="text-2xl sm:text-3xl font-bold tracking-tight"
            >
              Not Sure Which Plan Is Right?
            </motion.h2>
            <motion.p
              variants={fadeUp}
              className="text-muted-foreground text-base sm:text-lg max-w-xl mx-auto"
            >
              Schedule a free consultation and we&apos;ll help you find the perfect fit
            </motion.p>
            <motion.div variants={fadeUp}>
              <Button
                size="lg"
                className="bg-emerald-600 hover:bg-emerald-700 text-white gap-2 mt-2"
                onClick={() => onNavigate('contact')}
              >
                Book a Consultation
                <ArrowRight className="h-4 w-4" />
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
