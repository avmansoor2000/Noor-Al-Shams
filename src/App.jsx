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
        <Route path='/' element={<Home/>}/>
        <Route path='/about' element={<History/>}/>
        <Route path='/products' element={<Products/>}/>
      </Routes>
    </Router>
      
    </>
  )
}

export default App