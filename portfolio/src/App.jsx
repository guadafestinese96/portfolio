import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import Inicio from './Components/Inicio/Inicio'
import CvPdf from './Components/CvPdf/CvPdf'

function App() {
  
  return (
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<Inicio/>}/>
      <Route path='/cv' element={<CvPdf/>}/>
    </Routes>
    </BrowserRouter>
   
  )
}

export default App
