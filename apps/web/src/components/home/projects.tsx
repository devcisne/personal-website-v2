'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { useRef, useEffect, useState, useContext } from 'react'
import ThemeContext from '@/lib/context/ThemeContext'

const projects = [
  {
    id: 1,
    title: 'Project One',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.',
    tech: ['React', 'TypeScript', 'Tailwind'],
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
    tech: ['Next.js', 'Node.js', 'MongoDB'],
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
    tech: ['Vue.js', 'Express', 'PostgreSQL'],
  },
  {
    id: 4,
    title: 'Project Four',
    description: 'Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    tech: ['Angular', 'Python', 'Django'],
  },
]

export function Projects() {
  const { isDarkModeEnabled } = useContext(ThemeContext)
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)
  const [showLeftGradient, setShowLeftGradient] = useState(false)
  const [showRightGradient, setShowRightGradient] = useState(false)

  const updateGradients = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current
      const hasOverflow = scrollWidth > clientWidth

      setShowLeftGradient(hasOverflow && scrollLeft > 0)
      setShowRightGradient(hasOverflow && scrollLeft < scrollWidth - clientWidth - 1)
    }
  }

  useEffect(() => {
    const handleGlobalWheel = (e: WheelEvent) => {
      if (isHovering && scrollRef.current) {
        e.preventDefault()
        const scrollAmount = e.deltaY * 0.8
        scrollRef.current.scrollLeft += scrollAmount
      }
    }

    if (isHovering) {
      document.addEventListener('wheel', handleGlobalWheel, { passive: false })
    }

    return () => {
      document.removeEventListener('wheel', handleGlobalWheel)
    }
  }, [isHovering])

  useEffect(() => {
    const scrollElement = scrollRef.current
    if (!scrollElement) return

    // Initial check
    updateGradients()

    // Listen for scroll events
    scrollElement.addEventListener('scroll', updateGradients)

    // Listen for resize events
    const resizeObserver = new ResizeObserver(updateGradients)
    resizeObserver.observe(scrollElement)

    return () => {
      scrollElement.removeEventListener('scroll', updateGradients)
      resizeObserver.disconnect()
    }
  }, [])

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <section
      className="py-16 px-4 relative"
      style={{
        backgroundImage: `url('/backgrounds/${isDarkModeEnabled ? 'backgroundDark' : 'backgroundLight'}.svg')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="max-w-7xl mx-auto">
        <h2
          className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white"
          style={{ textShadow: '2px 2px 4px rgba(0,0,0,0.5)' }}
        >
          Projects
        </h2>
        <div className="relative">
          <div
            ref={scrollRef}
            className="max-w-full overflow-x-auto pb-4 scrollbar-hide px-6"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <div className="flex gap-8 pl-2 pr-2" style={{ width: 'fit-content' }}>
              {projects.map((project) => (
                <Card key={project.id} className="hover:shadow-lg transition-shadow duration-300 flex-shrink-0 w-80">
                  <CardHeader>
                    <CardTitle className="text-xl">{project.title}</CardTitle>
                    <CardDescription className="text-sm text-muted-foreground">
                      {project.tech.join(' • ')}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700 dark:text-gray-300 mb-4">
                      {project.description}
                    </p>
                    <button className="text-blue-600 dark:text-blue-400 hover:underline font-medium">
                      View Project →
                    </button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          {showLeftGradient && (
            <div className="absolute left-0 top-0 bottom-0 w-6 bg-gradient-to-r from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none"></div>
          )}
          {showRightGradient && (
            <div className="absolute right-0 top-0 bottom-0 w-6 bg-gradient-to-l from-white via-white/80 to-transparent dark:from-gray-900 dark:via-gray-900/80 z-10 pointer-events-none"></div>
          )}
        </div>
      </div>
    </section>
  )
}
