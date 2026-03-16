import heroImg from './assets/logo.png'
import lightImg from './assets/light.png'
import mobileImg from './assets/mobile.png'
import Navbar from './components/Navbar'
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
        <section className="text-center py-20 px-4">
          <h1 className="text-4xl md:text-5xl font-bold text-[#1E293B] max-w-2xl mx-auto leading-tight mb-4">
            Build a Responsive Landing Page with React
          </h1>
          <p className="text-slate-500 text-lg max-w-lg mx-auto mb-10 leading-relaxed">
            A mini-project to practice building responsive landing pages using React components.
          </p>
          <button className="bg-[#E74C3C] hover:bg-[#D33C2C] text-white font-medium py-3 px-8 rounded-md text-lg transition-colors shadow-sm">
            Get Started
          </button>
        </section>

        <section id='features' className="max-w-6xl mx-auto px-4 pb-20">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {
              services.map((service, index) => (
                <Card key={index} iconUrl={service.iconUrl} title={service.title} description={service.description} />
              ))
            }
          </div>
        </section>
            <div id="contact">
              <Contact title={contacts.title} description={contacts.description} />
            </div>
      </main>
    </div>
  )
}

export default App
