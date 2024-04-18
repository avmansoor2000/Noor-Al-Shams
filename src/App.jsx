import './App.css'
import Contact from './pages/Contact/Contact';
import About from './pages/About/About';
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/contact' element={<Contact/>}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App