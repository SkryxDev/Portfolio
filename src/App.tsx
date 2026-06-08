import { About } from './components/About'
import { Contact } from './components/Contact'
import { Footer } from './components/Footer'
import { Header } from './components/Header'
import { Hero } from './components/Hero'
import { Skills } from './components/Skills'
import { Work } from './components/Work'
import './App.css'

function App() {
  return (
    <main className="app-shell">
      <Header />
      <Hero />
      <About />
      <Work />
      <Skills />
      <Contact />
      <Footer />
    </main>
  )
}

export default App
