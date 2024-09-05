import { ChangeEvent, useState } from 'react'
import { Button } from './components/button'
import { Header } from './components/header'
import { Input } from './components/input'
import { Tasks } from './components/tasks'
import './App.css'

function App() {

  const [inputTask,setInputTask] = useState('')

  const [tasks, setTasks] = useState<{task: string, isDone: boolean}[]>([])

  function deleteTask(taskToDelete: string){
    const newList = tasks.filter((tasks) => tasks.task !== taskToDelete)
    setTasks(newList)
  }

  function updateTask(taskToUpdate: string){
    const updatedTasks = tasks.map((task) => {
      if(task.task === taskToUpdate){
        return { ...task, isDone: !task.isDone }
      }
      return task
    })

    setTasks(updatedTasks)
  }

  function handleTask(event: ChangeEvent<HTMLInputElement>){
    setInputTask(event.target.value) 
  }

  function createNewTask(){
    const newTask = { task: inputTask, isDone: false }

    for(let task in tasks){
      if(tasks[task].task === newTask.task){
        alert('Essa tarefa já existe!')
        return
      }
    }

    setTasks([...tasks,newTask])

    setInputTask('')
  }

  return (
    <div className='flex flex-col items-center '>
      <Header />
      <div className='w-[736px] mt-[-27px] flex gap-2'>
        <Input value={inputTask} handleTask={handleTask}/>
        <Button onClick={createNewTask}/>
      </div>

      <div className='mt-16 mb-16 w-[733px]'>
        <Tasks 
          tasks={tasks}
          deleteTask={deleteTask}
          updateTask={updateTask}
        />
      </div>
    </div>
  )
}

export default App
