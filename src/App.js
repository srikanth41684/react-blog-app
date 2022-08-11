import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Data from './components/Data';
import Fitness from './components/Fitness';
import './style.css';
import Tourism from './components/Tourism';
import Home from './components/Home';
import Technology from './components/Technology';
import Bollywood from './components/Bollywood';
import Food from './components/Food';
import FinalPage from './components/FinalPage';

const App = () => {
  return (
    <div>
      
      <Data>
      
        <BrowserRouter>

        <Navbar />

          <Routes>

            <Route path='/' element={ <Home /> } />            
            <Route path='/home' element={ <Home /> } />  
            <Route path='/category/tourism' element={ <Tourism /> } />
            <Route path='/category/fitness' element={ <Fitness />} />
            <Route path='/category/technology' element={ <Technology /> } />
            <Route path='/category/bollywood' element={ <Bollywood /> } />
            <Route path='/category/food' element={ <Food /> } />
            <Route path='/category/article/:itemTitle/:itemCategoryName' element={ <FinalPage />} />

          </Routes>
          
        </BrowserRouter>
      </Data>
    </div>
  )
}

export default App;