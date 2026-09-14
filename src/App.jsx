import { Box } from '@mui/material'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import Home from './Pages/Home'
import AboutMe from './Pages/AboutMe'
import Projects from './Pages/Projects'
import NotFound from './Pages/NotFound'
import ContactMe from './Pages/ContactMe'
import Navbar from './Components/Navbar'
import Footer from './Components/Footer'

export default function App() {
  return (
    <>
      <Navbar />
      
      <Box component={'main'} sx={{ flex: 1 }}>
        <Routes>
          <Route exact path='/' element={<Home />} />
          <Route path='/about-me' element={<AboutMe />} />
          <Route path='/contact-me' element={<ContactMe />} />
          <Route path='/projects' element={<Projects />} />
          <Route path='*' element={<NotFound />} />
        </Routes>
      </Box>

      <Footer />
    </>
  )
}
