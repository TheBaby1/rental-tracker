import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage'
import CreateRentalPage from './pages/CreateRentalPage';

function App() {

  return (
    <>
      <Router>
        <Routes>
          <Route path='/homepage/view-rentals' element={<HomePage/>} />
          <Route path='/create-rental' element={<CreateRentalPage/>} />
        </Routes>
      </Router>
    </>
  )
}

export default App
