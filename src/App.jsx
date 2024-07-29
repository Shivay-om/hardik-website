import { useState } from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import Services from './components/services/Services'
import Project from './components/projects/Project'
import Footer from './components/Footer'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className='bg-[#0E1630] text-[#808dad]'>
     <Header />
     <Home />
     <Services />
     <Project />
     <Footer />
    </div>
  )
}

export default App
