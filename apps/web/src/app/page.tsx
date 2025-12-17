import { Hero } from '@/components/home/hero'
import { Projects } from '@/components/home/projects'
import Script from 'next/script';

export default function Home() {
  return (
    <main>
      <Script src="/tagcanvas.min.js" strategy="beforeInteractive" />

      <Hero />
      <Projects />
    </main>
  )
}
