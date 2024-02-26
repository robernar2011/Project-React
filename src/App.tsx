import { BrowserRouter, Route, Routes } from 'react-router-dom'
import './index.css'
import Homepage from './pages/Homepage/homepage.tsx'
import Login from './pages/Login/login.tsx'
import Contact from './pages/Contact/contact.tsx'
import About from './pages/About/about.tsx'
import History from './pages/History/history.tsx'
import InfosEvent from './pages/InfosEvent/infosEvent.tsx'

import './index.css'


function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path="/homepage" element={<Homepage/>}/>
      <Route path="/login" element={<Login/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>
      <Route path="/history" element={<History/>}/>
      <Route path="/event/:id" element={<InfosEvent/>}/>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
