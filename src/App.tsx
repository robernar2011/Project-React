import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage/homepage.tsx'
import Login from './pages/Login/login.tsx'
import Contact from './pages/Contact/contact.tsx'

function App() {

  return (

    <BrowserRouter>
     <Routes>
      <Route path="/" element={<Login/>}/>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/Contact" element={<Contact/>}/>
     </Routes>
    </BrowserRouter>
  )
}

export default App