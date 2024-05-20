import './App.css'
import About from './pages/About/About';
import Home from './pages/Home/Home'

import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Products from './pages/Products/Products';
import History from './Components/History/History';

function App() {

  return (
    <>
    <Router>
      <Routes>
        <Route path='/Noor-Al-Shams/' element={<Home/>}/>
        
        <Route path='/Noor-Al-Shams/about' element={<History/>}/>
        <Route path='/Noor-Al-Shams/products' element={<Products/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App