import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/home/Home"
import Navbar from "./components/navbar/Navbar"
import QuemSomos from "./pages/quemSomos/QuemSomos"
import Footer from "./components/footer/Footer"
import Cursos from "./pages/cursos/Cursos"

function App() {
  

  return (
    <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/quemsomos' element={<QuemSomos/>}/>
        <Route path='/cursos' element={<Cursos/>}/>
      </Routes> 
      <Footer/>
    </BrowserRouter>
    )
}

export default App
