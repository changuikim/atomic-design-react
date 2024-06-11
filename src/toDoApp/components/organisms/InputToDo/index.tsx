import React, { useState, useContext } from 'react'
import { useRouter } from 'next/router'
import Input from '@/toDoApp/components/atoms/Input'
import Button from '@/toDoApp/components/atoms/Button'
import { ToDoListContext } from '@/toDoApp/contexts/ToDoListContext'

const InputToDo: React.FC = () => {
  const [toDo, setToDo] = useState('')
  const { onAdd } = useContext(ToDoListContext)
  const router = useRouter()

  const onAddTodo = () => {
    if (toDo === '') return

    onAdd(toDo)
    setToDo('')
    router.push('/')
  }

  return (
    <div className='flex items-center justify-center'>
      <Input value={toDo} onChange={setToDo} />
      <Button label='추가' color='#304FFE' onClick={onAddTodo} />
    </div>
  )
}

export default InputToDo
