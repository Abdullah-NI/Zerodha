import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import HomePage from './landing_page/home/HomePage'
import AboutPage from './landing_page/abouts/AboutPage'
import ProductPage from './landing_page/products/ProductPage'
import PricingPage from './landing_page/pricing/PricingPage'
import SupportPage from './landing_page/support/SupportPage'
import SignUp from './landing_page/signup/SignUp'
import Login from './landing_page/signup/Login'
import './index.css'
import Navbar from './landing_page/Navbar'
import Footer from './landing_page/Footer'
import NoteFound from './landing_page/NoteFound'
import { CookiesProvider } from 'react-cookie';
import UserPage from './landing_page/signup/UserPage'
// import FooterCopy from './landing_page/FooterCopy'

createRoot(document.getElementById('root')).render(
  <CookiesProvider>
  <BrowserRouter>
  <Navbar/>
      <Routes>
        <Route path="/" element={<HomePage/>}/>
        <Route path="/signup" element={<SignUp/>}/>
        <Route path="/login" element={<Login/>}/>
        <Route path='/userpage' element={<UserPage/>}/>
        <Route path="/about" element={<AboutPage/>}/>
        <Route path="/product" element={<ProductPage/>}/>
        <Route path="/pricing/*" element={<PricingPage/>}/>
        <Route path="/support" element={<SupportPage/>}/>
        <Route path="*" element={<NoteFound/>}/>
      </Routes>
    <Footer/>
  </BrowserRouter>
</CookiesProvider>


)
