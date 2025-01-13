import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Board from './Board';
import BoardList from './BoardList';
import BoardDetail from './BoardDetail';
import Navbar from './Navbar';

const Router = () => {
  return (
    <div>
        <BrowserRouter>
          <Navbar/>
            <Routes>

                <Route path='/list' element={<BoardList/>}/>
                <Route path='/register' element={<Board/>}/>
                <Route path='/detail/:bno' element={<BoardDetail/>}/>
        
            </Routes>
        </BrowserRouter>
      
    </div>
  )
}

export default Router
