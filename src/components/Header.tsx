'use client'

import React, { useState, useEffect } from 'react'
import { Menu, X, Droplets } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20)
    }

    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
    setIsMobileMenuOpen(false)
  }

  const menuItems = [
    { id: 'home', label: 'হোম' },
    { id: 'showcase', label: 'পণ্য দেখুন' },
    { id: 'features', label: 'বৈশিষ্ট্য' },
    { id: 'testimonials', label: 'গ্রাহক মন্তব্য' },
    { id: 'cta', label: 'অর্ডার করুন' }
  ]

  return (
    <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-gray-200' 
        : 'bg-transparent'
    }`}>
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-br from-rose-500 to-pink-600 rounded-full flex items-center justify-center shadow-lg">
              <Droplets className="h-6 w-6 lg:h-7 lg:w-7 text-white" />
            </div>
            <span className={`text-xl lg:text-2xl font-bold bg-gradient-to-r from-rose-600 to-pink-600 bg-clip-text text-transparent ${
              isScrolled ? 'text-gray-900' : 'text-gray-900'
            }`}>
              PKG
            </span>
          </div>

          {/* Desktop Menu */}
          <nav className="hidden lg:flex items-center space-x-8">
            {menuItems.map((item, index) => (
              <React.Fragment key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={`font-medium transition-all duration-300 hover:text-rose-600 hover:scale-105 ${
                    isScrolled ? 'text-gray-700' : 'text-gray-900'
                  }`}
                >
                  {item.label}
                </button>
                {index < menuItems.length - 1 && (
                  <div className={`w-px h-4 ${
                    isScrolled ? 'bg-rose-200' : 'bg-rose-300'
                  }`}></div>
                )}
              </React.Fragment>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="icon"
            className="lg:hidden"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? (
              <X className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            ) : (
              <Menu className={`h-6 w-6 ${isScrolled ? 'text-gray-900' : 'text-gray-900'}`} />
            )}
          </Button>
        </div>

        {/* Mobile Menu */}
        {isMobileMenuOpen && (
          <div className="lg:hidden border-t border-gray-200 bg-white/95 backdrop-blur-xl">
            <nav className="py-4 space-y-2">
              {menuItems.map((item, index) => (
                <React.Fragment key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left px-4 py-3 text-gray-700 hover:bg-rose-50 hover:text-rose-600 font-medium transition-all duration-300"
                  >
                    {item.label}
                  </button>
                  {index < menuItems.length - 1 && (
                    <div className="w-full h-px bg-rose-200 mx-4"></div>
                  )}
                </React.Fragment>
              ))}
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}