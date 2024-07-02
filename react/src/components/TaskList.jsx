import React, { useEffect, useState } from 'react'
import { getAllTask } from '../api/task.api'
import TaskCard from './TaskCard';


import Perfil from './Perfil';
import Navbar from './Navbar';
import ForMe from './navbar/ForMe';
import Home from './navbar/Home';
import Header from './Headers';
import Experience from './navbar/Experience';
import Skills from './navbar/Skills';
import Projects from './navbar/Projects';

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
      <Header />
      <main>
        <div className='grid grid-cols-2 gap-4' >
          {tasks.map(task => (
            <TaskCard key={task.id} task={task} />
          ))}
        </div>
            <Perfil/>
        <Home />
        <Projects />
        <Experience />
        <ForMe />
        <Skills />

      </main>







    </>



  )
}
