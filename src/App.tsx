import { useState } from 'react'
import { Button } from './components/button'
import { Header } from './components/header'
import { Input } from './components/input'
import { Tasks } from './components/tasks'
import './App.css'

function App() {

  const [tasks, setTasks] = useState([
    {
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer',
      isDone: false
    },
    {
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer....',
      isDone: true
    },
    {
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer..',
      isDone: true
    },
    {
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer......',
      isDone: true
    },
    {
      task: 'Integer urna interdum massa libero auctor neque turpis turpis semper. Duis vel sed fames integer.........',
      isDone: true
    },
  ])

  function deleteTask(taskToDelete: string){
    const newList = tasks.filter((tasks) => tasks.task !== taskToDelete)
    setTasks(newList)
  }

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className='w-[736px] mt-[-27px] flex gap-2'>
        <Input />
        <Button />
      </div>

      <div className='mt-16 w-[733px]'>
        <Tasks 
          tasks={tasks}
          deleteTask={deleteTask}
        />
      </div>
    </div>
  )
}

export default App
