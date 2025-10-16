import React from 'react'
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import Navbar from './components/Navbar'
import Fotter from './components/Fotter'
import Ready from './pages/Ready'
import Fruits from './pages/Fruits'
import Oils from './pages/Oils'
import Dairy from './pages/Dairy'
import Flours from './pages/Flours'
import Vege from './pages/Vege'
import Dry from './pages/Dry'
import Chutney from './pages/Chutney'
import Salad from './pages/Salad'
import Mango from './pages/Mango'
import Rose from './pages/Rose'
import Cope from './pages/Cope'
import Home from './pages/Home'
import Profile from './pages/Profile'
import Orders from './pages/Orders'
import Share from './pages/Share'
import Favorite from './pages/Favorite'
import Farmers from './pages/Farmers'
import Head from './pages/Head'
import Categories from './pages/categories'
import Farmer from './pages/Farmer'
import About from './pages/About'
import Signin from './pages/Signin'
import Signup from './pages/Signup'
import Nest from './pages/Nest'


const App = () => {
  return (
    <BrowserRouter>
    
    <Routes>
     <Route path='/' element={<Head />} />

      <Route path='/navbar' element={<Navbar />} />
      <Route path='/ready' element={<Ready />} />
      <Route path='/home' element={<Home />} />
      <Route path='/cope' element={<Cope />} />
      <Route path='/oils' element={<Oils />} />
      <Route path='/fruits' element={<Fruits />} />
      <Route path='/dairy' element={<Dairy />} />
      <Route path='/flours' element={<Flours />} />
      <Route path='/vege' element={<Vege />} />
      <Route path='/dry' element={<Dry/>} />
      <Route path="/chutney" element={<Chutney />} />
      <Route path="/mango" element={<Mango />} />
      <Route path="/rose" element={<Rose />} />
      <Route path="/salad" element={<Salad />} />

      <Route path='/profile' element={<Profile />} />
      <Route path='/orders' element={<Orders />} />
      <Route path='/share' element={<Share />} />
      <Route path='/favorite' element={<Favorite />} />
      <Route path='/farmers' element={<Farmers />} />
      
      <Route path='/categories'  element={<Categories/>} />
      <Route path='/farmer'  element={<Farmer/>} />
      <Route path='/about'  element={<About/>} />
      <Route path='/signin'  element={<Signin/>} />
      <Route path='/signup'  element={<Signup/>} />
      
      <Route path='/nest'  element={<Nest/>} />
      
      <Route path='/fotter' element={<Fotter />} />

    </Routes>
    </BrowserRouter>
  )
}

export default App