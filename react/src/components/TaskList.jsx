import React, { useEffect, useState } from 'react'
import { getAllTask } from '../api/task.api'
import TaskCard from './TaskCard';

import Menu from './Menu';
import Perfil from './Perfil';
import Navbar from './Navbar';

export const TaskList = () => {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    async function loadTasks() {
      try {
        const res = await getAllTask();
        setTasks(res.data);
      } catch (error) {
        console.error("Error loading tasks:", error);
      }
    }

    loadTasks();
  }, []);

  return (
    <>
      <Navbar />
      <Perfil/>
      <div className='grid grid-cols-2 gap-4' >
        {tasks.map(task => (
          <TaskCard key={task.id} task={task} />
        ))}
      </div>




    </>



  )
}
