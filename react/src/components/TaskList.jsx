import React, { useEffect, useState } from 'react'
import { getAllTask } from '../api/task.api'
import TaskCard from './TaskCard';

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
    <div className='grid grid-cols-3 gap-3' >
      {tasks.map(task => (
        <TaskCard key={task.id} task={task} />
      ))}
    </div>
  )
}
