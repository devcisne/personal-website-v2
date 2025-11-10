'use client'

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/card'
import { useRef, useEffect, useState } from 'react'

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
  const scrollRef = useRef<HTMLDivElement>(null)
  const [isHovering, setIsHovering] = useState(false)

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

  const handleMouseEnter = () => setIsHovering(true)
  const handleMouseLeave = () => setIsHovering(false)

  return (
    <section
      className="py-16 px-4 bg-gray-50 dark:bg-gray-900"

    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          Top Projects
        </h2>
        <div
          ref={scrollRef}
          className="max-w-full overflow-x-auto pb-4"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <div className="flex gap-8" style={{ width: 'fit-content' }}>
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
      </div>
    </section>
  )
}
