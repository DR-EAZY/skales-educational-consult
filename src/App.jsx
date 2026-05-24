import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Services from './components/Services'
import Hostels from './components/Hostels'
import Contact from './components/Contact'
import Footer from './components/Footer'
import WhatsAppButton from './components/WhatsAppButton'

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Services />
      <Hostels />
      <Contact />
      <Footer />


      <WhatsAppButton/>
    </div>
  )
}

export default App