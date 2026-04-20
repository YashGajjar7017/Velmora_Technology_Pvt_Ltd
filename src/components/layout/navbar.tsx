'use client'

import { Menu, ArrowRight, ChevronRight, Moon, Sun } from 'lucide-react'
import { Button } from '@/components/ui/button'
import {
  Sheet,
  SheetTrigger,
  SheetContent,
  SheetClose,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import { Separator } from '@/components/ui/separator'
import { type PageName, NAV_ITEMS } from '@/lib/data'
import { useTheme } from '@/lib/theme-provider'

interface NavbarProps {
  currentPage: string
  onNavigate: (page: string) => void
}

export function Navbar({ currentPage, onNavigate }: NavbarProps) {
  const { theme, toggleTheme } = useTheme()

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Logo */}
        <button
          onClick={() => onNavigate('home')}
          className="flex items-center gap-2.5 transition-opacity hover:opacity-80"
        >
          <img
            src="/logo.svg"
            alt="Velmora"
            className="h-8 w-8"
          />
          <span className="text-xl font-bold tracking-tight">
            Velmora
          </span>
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden items-center gap-1 md:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = currentPage === item.page
            return (
              <button
                key={item.page}
                onClick={() => onNavigate(item.page)}
                className={`relative px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                  isActive
                    ? 'text-emerald-600'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {item.label}
                {isActive && (
                  <span className="absolute bottom-0 left-3 right-3 h-0.5 rounded-full bg-emerald-600" />
                )}
              </button>
            )
          })}
        </nav>

        {/* Desktop CTA */}
        <div className="hidden md:flex items-center gap-3">
          <Button
            variant="ghost"
            size="icon"
            className="h-9 w-9 rounded-full hover:bg-accent"
            title="Switch to dark mode"
          >
            <Moon className="h-5 w-5" />
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Button
            onClick={() => onNavigate('contact')}
            className="bg-emerald-600 text-white hover:bg-emerald-700 gap-2"
          >
            Get Started
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        {/* Mobile Menu */}
        <div className="md:hidden flex items-center gap-2">
          <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="h-9 w-9 rounded-full hover:bg-accent"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? (
              <Moon className="h-5 w-5" />
            ) : (
              <Sun className="h-5 w-5" />
            )}
            <span className="sr-only">Toggle theme</span>
          </Button>
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="h-9 w-9">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Open menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] p-0">
              <SheetHeader className="border-b p-4">
                <SheetTitle className="flex items-center gap-2.5">
                  <img
                    src="/logo.svg"
                    alt="Velmora"
                    className="h-7 w-7"
                  />
                  <span className="text-lg font-bold tracking-tight">
                    Velmora
                  </span>
                </SheetTitle>
              </SheetHeader>

              <nav className="flex flex-col px-2 py-4">
                {NAV_ITEMS.map((item) => {
                  const isActive = currentPage === item.page
                  return (
                    <SheetClose asChild key={item.page}>
                      <button
                        onClick={() => onNavigate(item.page)}
                        className={`flex items-center justify-between rounded-lg px-4 py-3 text-sm font-medium transition-colors duration-200 ${
                          isActive
                            ? 'bg-emerald-50 text-emerald-600 dark:bg-emerald-950/30'
                            : 'text-muted-foreground hover:bg-accent hover:text-foreground'
                        }`}
                      >
                        {item.label}
                        {isActive && (
                          <ChevronRight className="h-4 w-4 text-emerald-600" />
                        )}
                      </button>
                    </SheetClose>
                  )
                })}
              </nav>

              <Separator />

              <div className="p-4">
                <SheetClose asChild>
                  <Button
                    onClick={() => onNavigate('contact')}
                    className="w-full bg-emerald-600 text-white hover:bg-emerald-700 gap-2"
                  >
                    Get Started
                    <ArrowRight className="h-4 w-4" />
                  </Button>
                </SheetClose>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </header>
  )
}
