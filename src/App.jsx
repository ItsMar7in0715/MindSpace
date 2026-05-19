import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Store from './pages/Store'
import Contact from './pages/Contact'
import Dofa from './pages/Dofa'

function App() {
  return (
    <Router>
      <div className="app">
        <Navbar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tienda" element={<Store />} />
            <Route path="/contacto" element={<Contact />} />
            <Route path="/dofa" element={<Dofa />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
