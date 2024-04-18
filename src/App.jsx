import './App.css'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='Noor-Al-Shams/' element={<Home/>}/>
        <Route path='Noor-Al-Shams/contact' element={<Contact/>}/>
        <Route path='Noor-Al-Shams/about' element={<About/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App
