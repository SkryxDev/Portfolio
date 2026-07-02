import { About } from './components/About'
import { Background } from './components/Background'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Work } from './components/Work'

function App() {
  return (
    <>
      <a className="skip-link" href="#top">
        Skip to content
      </a>
      <Background />
      <Header />
      <main id="top">
        <Hero />
        <About />
        <Work />
        <Skills />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App
