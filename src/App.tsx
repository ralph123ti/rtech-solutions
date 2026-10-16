import Navbar from './components/layout/Navbar'
import Footer from './components/layout/Footer'
import Hero from './components/sections/Hero'
import Services from './components/sections/Services'
import Projects from './components/sections/Projects'
import CodeLab from './components/sections/CodeLab'
import AiSolutions from './components/sections/AiSolutions'
import About from './components/sections/About'
import Contact from './components/sections/Contact'

function App() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Projects />
        <CodeLab />
        <AiSolutions />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  )
}

export default App