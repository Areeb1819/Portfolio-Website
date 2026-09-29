import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Background from './components/Background'
import Home from './pages/Home'

function App() {
  return (
    <div className="relative min-h-screen w-full text-zinc-100">
      <Background />
      <Navbar />
      <main className="relative z-10 pt-16 sm:pt-20">
        <Home />
      </main>
      <Footer />
    </div>
  )
}

export default App
