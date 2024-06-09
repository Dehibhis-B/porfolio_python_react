import React from 'react'
import { Link } from 'react-router-dom'

export default function Navigation() {
  return (
    <div className='flex justify-between py-3 bg-blue-500 p-4' > 
        <Link to="/tasks" > <h1>Tasks App</h1></Link>
        <Link to="/tasks-create" > 
          <button className='bg-indigo-500 px-3 py-1 rounded-lg' >create task</button>
        </Link>
        
    </div>
  )
}
