import heroImg from './assets/logo.png'
import lightImg from './assets/light.png'
import mobileImg from './assets/mobile.png'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Card from './components/Card'
import Contact from './components/Contact'

function App() {

  const services = [
    {
      iconUrl: heroImg,
      title: "Fast Performance",
      description: "Our landing page loads quickly and runs smoothly across all devices."
    },
    {
      iconUrl: lightImg,
      title: "Easy to Use",
      description: "Our landing page is simple and intuitive for users to navigate."
    },
    {
      iconUrl: mobileImg,
      title: "Modern Design",
      description: "Our landing page features a clean, modern, and responsive design."
    }
  ]

  const contacts = {
    title: 'Contact Us',
    description: "Have any questions? Send us a message and we'll get back to you as soon as possible."
  }

  return (
    <div className="min-h-screen bg-[#F8FAFC] flex flex-col font-['Inter'] text-slate-800">
      <Navbar imgUrl={heroImg} />

      <main className="flex-grow">
        <Hero />

        <section id='features' className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              services.map((service, index) => (
                <Card key={index} iconUrl={service.iconUrl} title={service.title} description={service.description} />
              ))
            }
          </div>
        </section>
            <div id="contact" className="shadow-lg shadow-black/30 rounded-xl">
              <Contact title={contacts.title} description={contacts.description} />
            </div>
      </main>
    </div>
  )
}

export default App
