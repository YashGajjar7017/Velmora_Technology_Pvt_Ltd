'use client'

import { Cpu, MapPin, Mail, Phone, Twitter, Linkedin, Github, Youtube } from 'lucide-react'
import { NAV_ITEMS, SERVICES } from '@/lib/data'
import { Separator } from '@/components/ui/separator'

interface FooterProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export default function Footer({ currentPage, onNavigate }: FooterProps) {
  return (
    <footer className="mt-auto bg-gray-900 text-gray-300">
      <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {/* Column 1: Company Info */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <Cpu className="h-7 w-7 text-emerald-500" />
              <span className="text-xl font-bold text-white">Vel<span className="text-emerald-400">mora</span></span>
            </div>
            <p className="text-sm leading-relaxed text-gray-400">
              Empowering businesses through innovative technology solutions. Your trusted partner for digital transformation.
            </p>
            <div className="flex items-center gap-3">
              <button
                aria-label="Twitter"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Twitter className="h-4 w-4" />
              </button>
              <button
                aria-label="LinkedIn"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Linkedin className="h-4 w-4" />
              </button>
              <button
                aria-label="GitHub"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Github className="h-4 w-4" />
              </button>
              <button
                aria-label="YouTube"
                className="flex h-9 w-9 items-center justify-center rounded-lg bg-gray-800 text-gray-400 transition-colors hover:bg-emerald-600 hover:text-white"
              >
                <Youtube className="h-4 w-4" />
              </button>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Quick Links
            </h3>
            <ul className="space-y-2">
              {NAV_ITEMS.map((item) => (
                <li key={item.page}>
                  <button
                    onClick={() => onNavigate(item.page)}
                    className={`text-sm transition-colors hover:text-emerald-400 ${
                      currentPage === item.page ? 'text-emerald-400' : 'text-gray-400'
                    }`}
                  >
                    {item.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 3: Services */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Services
            </h3>
            <ul className="space-y-2">
              {SERVICES.slice(0, 5).map((service) => (
                <li key={service.title}>
                  <span className="text-sm text-gray-400 hover:text-emerald-400 transition-colors cursor-pointer">
                    {service.title}
                  </span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Contact Info */}
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Contact Info
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-emerald-600" />
                <span className="text-sm text-gray-400">
                  1234 Innovation Drive, Suite 500<br />
                  San Francisco, CA 94107
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 shrink-0 text-emerald-600" />
                <a
                  href="mailto:hello@velmora.io"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  hello@velmora.io
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 shrink-0 text-emerald-600" />
                <a
                  href="tel:+14155551234"
                  className="text-sm text-gray-400 transition-colors hover:text-emerald-400"
                >
                  +1 (415) 555-1234
                </a>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="my-8 bg-gray-700" />

        <div className="text-center text-sm text-gray-500">
          © 2026 Velmora. All rights reserved.
        </div>
      </div>
    </footer>
  )
}
