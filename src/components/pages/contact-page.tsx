'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { Card, CardHeader, CardTitle, CardDescription, CardContent } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Separator } from '@/components/ui/separator'
import { MapPin, Mail, Phone, Send, CheckCircle2, Clock, MessageSquare } from 'lucide-react'

interface ContactPageProps {
  onNavigate: (page: string) => void
}

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
}

export default function ContactPage({ onNavigate }: ContactPageProps) {
  const [formState, setFormState] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    subject: '',
    message: '',
  })
  const [submitting, setSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormState((prev) => ({ ...prev, [name]: value }))
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
      }
    } catch {
      // handle error silently
    } finally {
      setSubmitting(false)
    }
  }

  const handleReset = () => {
    setFormState({ name: '', email: '', phone: '', company: '', subject: '', message: '' })
    setSubmitted(false)
  }

  return (
    <div className="min-h-screen">
      {/* Page Header */}
      <section className="bg-gradient-to-br from-emerald-600 to-emerald-800 text-white py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp}>
            <span className="inline-block bg-white/20 backdrop-blur-sm text-white text-sm font-medium px-4 py-1.5 rounded-full mb-6">
              Contact Us
            </span>
            <h1 className="text-4xl md:text-5xl font-bold mb-4">Get In Touch</h1>
            <p className="text-emerald-100 text-lg md:text-xl max-w-2xl mx-auto">
              Have a project in mind or need expert IT consulting? Reach out to our team and we&apos;ll get back to you promptly.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-12 md:py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Form Side */}
            <motion.div
              className="lg:col-span-2"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
            >
              <Card className="p-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl">
                    <MessageSquare className="h-5 w-5 text-emerald-600" />
                    Send Us a Message
                  </CardTitle>
                  <CardDescription>
                    Fill out the form below and our team will respond within 24 hours.
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <motion.div
                      className="flex flex-col items-center justify-center py-12 text-center"
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ duration: 0.4 }}
                    >
                      <CheckCircle2 className="h-16 w-16 text-emerald-500 mb-4" />
                      <h3 className="text-2xl font-bold mb-2">Message Sent!</h3>
                      <p className="text-muted-foreground mb-6">
                        We&apos;ll get back to you within 24 hours.
                      </p>
                      <Button onClick={handleReset} variant="outline" className="border-emerald-600 text-emerald-600 hover:bg-emerald-50">
                        Send Another Message
                      </Button>
                    </motion.div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      {/* Name + Email Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="name" className="text-sm font-medium">
                            Name <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="name"
                            name="name"
                            value={formState.name}
                            onChange={handleChange}
                            required
                            placeholder="Your full name"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="email" className="text-sm font-medium">
                            Email <span className="text-red-500">*</span>
                          </label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            value={formState.email}
                            onChange={handleChange}
                            required
                            placeholder="you@example.com"
                          />
                        </div>
                      </div>

                      {/* Phone + Company Row */}
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <label htmlFor="phone" className="text-sm font-medium">Phone</label>
                          <Input
                            id="phone"
                            name="phone"
                            type="tel"
                            value={formState.phone}
                            onChange={handleChange}
                            placeholder="+1 (555) 000-0000"
                          />
                        </div>
                        <div className="space-y-2">
                          <label htmlFor="company" className="text-sm font-medium">Company</label>
                          <Input
                            id="company"
                            name="company"
                            value={formState.company}
                            onChange={handleChange}
                            placeholder="Your company name"
                          />
                        </div>
                      </div>

                      {/* Subject */}
                      <div className="space-y-2">
                        <label htmlFor="subject" className="text-sm font-medium">
                          Subject <span className="text-red-500">*</span>
                        </label>
                        <Input
                          id="subject"
                          name="subject"
                          value={formState.subject}
                          onChange={handleChange}
                          required
                          placeholder="How can we help you?"
                        />
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label htmlFor="message" className="text-sm font-medium">
                          Message <span className="text-red-500">*</span>
                        </label>
                        <Textarea
                          id="message"
                          name="message"
                          value={formState.message}
                          onChange={handleChange}
                          required
                          rows={5}
                          placeholder="Tell us about your project or inquiry..."
                        />
                      </div>

                      {/* Submit Button */}
                      <Button
                        type="submit"
                        disabled={submitting}
                        className="w-full sm:w-auto bg-emerald-600 hover:bg-emerald-700 text-white"
                      >
                        {submitting ? (
                          <>
                            <span className="mr-2 inline-block h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
                            Sending...
                          </>
                        ) : (
                          <>
                            <Send className="mr-2 h-4 w-4" />
                            Send Message
                          </>
                        )}
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </motion.div>

            {/* Info Sidebar */}
            <motion.div
              className="space-y-6"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={{ ...fadeUp, visible: { ...fadeUp.visible, transition: { duration: 0.5, delay: 0.2 } } }}
            >
              {/* Contact Information */}
              <Card>
                <CardHeader>
                  <CardTitle className="text-lg">Contact Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex items-start gap-3">
                    <MapPin className="h-5 w-5 text-emerald-600 mt-0.5 shrink-0" />
                    <span className="text-sm text-muted-foreground">
                      Tower 2 ,Gifr City , Gandhinagar , Gujarat , India.
                    </span>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-sm text-muted-foreground">hello@velmora.io</span>
                  </div>
                  <Separator />
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-emerald-600 shrink-0" />
                    <span className="text-sm text-muted-foreground">+91 000-000-000-0</span>
                  </div>
                </CardContent>
              </Card>

              {/* Business Hours */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Clock className="h-5 w-5 text-emerald-600" />
                    Business Hours
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-2 text-sm text-muted-foreground">
                  <p>Mon - Fri: 9:00 AM - 6:00 PM</p>
                  <p>Sat: 10:00 AM - 2:00 PM</p>
                  <p>Sun: Closed</p>
                </CardContent>
              </Card>

              {/* Emergency Support */}
              <Card className="bg-emerald-600 text-white border-0">
                <CardHeader>
                  <CardTitle className="text-lg text-white">Need Immediate Help?</CardTitle>
                  <CardDescription className="text-emerald-100">
                    24/7 support for urgent inquiries
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <Button
                    className="bg-white text-emerald-600 hover:bg-emerald-50 font-semibold"
                    onClick={() => (window.location.href = 'tel:+15559876543')}
                  >
                    <Phone className="mr-2 h-4 w-4" />
                    Call Now
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Map Section (Decorative) */}
      <section className="pb-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
          >
            <div className="rounded-xl border-2 border-dashed border-emerald-300 bg-emerald-50/50 p-8 md:p-12 text-center">
              <MapPin className="h-10 w-10 text-emerald-500 mx-auto mb-3" />
              <h3 className="text-lg font-semibold text-emerald-800 mb-1">Gujarat, IN</h3>
              <p className="text-sm text-emerald-600">
                📍 Tower 2, Gift City, GJ 382355
              </p>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
