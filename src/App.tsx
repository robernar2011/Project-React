import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage/homepage.tsx'
import Login from './pages/Login/login.tsx'
import Contact from './pages/Contact/contact.tsx'
import About from './pages/Contact/About/about.tsx'
import History from './pages/History/history.tsx'

function App() {

  return (

    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/history" element={<History/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App