import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'


import { HomeScreen } from './components/HomeScreen'
import { Quiz } from './components/Quiz'
import { AddQuestionForm } from './components/AddQuestionForm'

import './styles/global.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
      <Route path='/' element=  {<HomeScreen />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/add-question" element={<AddQuestionForm />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
