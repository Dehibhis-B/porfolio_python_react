import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form';
import { createTasks, deleteTask, getTask, updateTask } from '../api/task.api';
import { useNavigate, useParams } from 'react-router-dom';
import { toast } from 'react-hot-toast';


export default function TaskFormPage() {

  const { register, handleSubmit, formState: { errors }, setValue } = useForm();
  const navigate = useNavigate();
  const params = useParams();

  const onSubmit = handleSubmit(async (data) => {
    if (params.id) {
      await updateTask(params.id, data);
      toast.success('Tarea Actualizada', {
        position: "botton up",
        style: {
          background: "green",
          color: "#fff"
        }
      })

    } else {
      await createTasks(data)
      toast.success('Tarea Resgistrada', {
        position: "bottom-right",
        style: {
          background: "green",
          color: "#fff"
        }
      })
    }
    navigate("/tasks")

  })

  useEffect(() => {
    async function loadTask() {
      if (params.id) {
        const { data: { title, description },
        } = await getTask(params.id);
        setValue("title", title);
        setValue("description", description);

      }
    }
    loadTask();

  }, [])

  return (
    <div className='max-w-xl mx-auto' >
      <form onSubmit={onSubmit} >
        <input type="text" placeholder='title'
          {...register("title", { required: true })}
          className='bg-zinc-700 p-3 rounded block w-full mb-3'
        />
        {errors.title && <span>este campo es requerido</span>}

        <textarea name="" rows="3" placeholder='Description'
          {...register("description", { required: true })}
          className='bg-zinc-700 p-3 rounded block w-full mb-3'
        />
        {errors.description && <span>este campo es requerido</span>}

        <button className='bg-indigo-500 p-2 rounded block w-full mt-3' >Save</button>
      </form>
      {params.id &&
        <div className='flex justify-end' >
          <button
            className='bg-red-500 p-2 rounded w-48 mt-3' onClick={async () => {
              const accepted = window.confirm("estas seguro")
              if (accepted) {
                await deleteTask(params.id)
                toast.success('Tarea eliminada', {
                  position: "botton up",
                  style: {
                    background: "green",
                    color: "#fff"
                  }
                })
                navigate("/tasks")
              }
            }} >Delete

          </button>
        </div>
      }
    </div>
  )
}

