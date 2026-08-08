import { About } from '../components/About'
import { Contact } from '../components/Contact'
import { Hero } from '../components/Hero'
import { Skills } from '../components/Skills'
import { Work } from '../components/Work'

export default function HomePage() {
  return (
    <>
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
    </>
  )
}
