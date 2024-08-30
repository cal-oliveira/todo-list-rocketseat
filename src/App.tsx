import './App.css'
import { Button } from './components/button'
import { Header } from './components/header'
import { Input } from './components/input'
import { Tasks } from './components/tasks'

function App() {

  return (
    <div className='flex flex-col items-center'>
      <Header />
      <div className='w-[736px] mt-[-27px] flex gap-2'>
        <Input />
        <Button />
      </div>

      <div className='mt-16 w-[733px]'>
        <Tasks />
      </div>
    </div>
  )
}

export default App
