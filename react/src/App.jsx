import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom"

import './App.css'
import TaskFormPage from './pages/TaskFormPage'
import TaskPage from './pages/TaskPage'
import Navigation from './components/Navigation'
import { Toaster } from "react-hot-toast"

function App() {
  const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <div className='container mx-auto max-w-[1024px] py-3 bg-zinc-700' >
        <Navigation />
        <Routes>
          <Route path='/' element={<Navigate to="/tasks" />} />
          <Route path='/tasks' element={<TaskPage />} />
          <Route path='/tasks-create' element={< TaskFormPage />} />
          <Route path='/tasks/:id' element={< TaskFormPage />} />


        </Routes>
        <Toaster />
      </div>

    </BrowserRouter>
  )
}

export default App
