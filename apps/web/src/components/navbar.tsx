'use client'

import React, { useState } from 'react'
import { CgClose, CgMenu } from 'react-icons/cg'
import { usePathname } from 'next/navigation'
import Link from 'next/link'
import { Button } from '@/components/button'
import Toggle from '@/components/toggle'

// Navigation items constant to prevent recreation on each render
const NAVIGATION_ITEMS = [
  { name: 'Home', route: '/' },
  { name: 'Projects', route: '/projects' },
  { name: 'About', route: '/about' },
  { name: 'Contact', route: '/contact' },
]

function classNames(...classes: (string | boolean | undefined)[]): string {
  return classes.filter(Boolean).join(' ')
}

const Navbar = () => {
  const pathname = usePathname()
  const [open, setOpen] = useState(false)

  return (
    <div className="dark:bg-black border-b border-border/40" id="header">
      <div
        className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8 relative flex items-center justify-between h-16"
        id="headerContent"
      >
        {/* Logo/Brand */}
        <div
          className="absolute inset-y-0 left-0 flex items-center px-2 sm:static sm:inset-auto sm:pr-0"
          id="logoSection"
        >
          <div className="group transition duration-300 text-gray-400 font-source">
            <Link
              href="/"
              className="text-[#007EA7] hover:text-[#00A8E8] font-semibold text-lg"
              aria-label="Home page"
            >
              DiegoCisneros.dev
              <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <div
          className="absolute inset-y-0 right-0 flex items-center lg:hidden"
          id="mobile-menu-icon"
        >
          <Button
            variant="ghost"
            size="icon"
            onClick={() => setOpen(!open)}
            className="h-9 w-9"
            aria-expanded={open}
            aria-label={open ? 'Close main menu' : 'Open main menu'}
          >
            <span className="sr-only">
              {open ? 'Close main menu' : 'Open main menu'}
            </span>
            {open ? (
              <CgClose className="block h-5 w-5" aria-hidden="true" />
            ) : (
              <CgMenu className="block h-5 w-5" aria-hidden="true" />
            )}
          </Button>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden lg:flex space-x-2 items-center">
          {NAVIGATION_ITEMS.map((item) => (
            <div
              key={item.name}
              className={classNames(
                pathname === item.route
                  ? 'dark:text-white text-black font-semibold'
                  : 'text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold',
                'py-2 rounded-md flex items-center'
              )}
            >
              <Link
                href={item.route}
                className={classNames(
                  'text-[#007EA7] hover:text-[#00A8E8] px-3 py-2 rounded-md transition-colors',
                  pathname === item.route ? 'font-semibold' : ''
                )}
                aria-current={pathname === item.route ? 'page' : undefined}
              >
                <div className="group transition duration-300">
                  {item.name}
                  <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-[#00A8E8]"></span>
                </div>
              </Link>
              <span className="ml-1 text-base self-center text-muted-foreground">/</span>
            </div>
          ))}
          <Toggle />
        </div>
      </div>

      {/* Mobile Navigation */}
      <div className="lg:hidden">
        {open && (
          <div className="flex flex-col px-2 space-y-1 pb-3 border-t border-border/40">
            {NAVIGATION_ITEMS.map((item) => (
              <div
                key={item.name}
                className={classNames(
                  pathname === item.route
                    ? 'dark:text-white text-black font-semibold'
                    : 'text-gray-400 hover:text-black dark:hover:text-white font-normal hover:font-semibold',
                  'px-3 py-2 border-b-2 hover:border-[#00A8E8] dark:hover:text-white transition-all duration-300'
                )}
              >
                <Link
                  href={item.route}
                  className="text-[#007EA7] hover:text-[#00A8E8] block"
                  onClick={() => setOpen(false)}
                  aria-current={pathname === item.route ? 'page' : undefined}
                >
                  {item.name}
                </Link>
              </div>
            ))}
            <div className="px-3 pt-2">
              <Toggle />
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

export default React.memo(Navbar)
