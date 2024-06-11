import { useRouter } from 'next/router'

import React from 'react'
import PageTitle from '@/toDoApp/components/atoms/PageTitle'
import ToDoItem from '@/toDoApp/components/organisms/ToDoItem'
import Button from '@/toDoApp/components/atoms/Button'

interface Props {
  readonly toDoList: ReadonlyArray<string>
  readonly onDelete?: (toDo: string) => void
}

const ToDoList: React.FC<Props> = ({ toDoList, onDelete }) => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <div className='flex flex-col items-center justify-center p-8 bg-white rounded-lg'>
        <PageTitle title='할 일 목록' />
        <div className='flex flex-col'>
          {toDoList.map(toDo => (
            <ToDoItem
              key={toDo}
              label={toDo}
              onDelete={() => {
                if (typeof onDelete === 'function') onDelete(toDo)
              }}
            />
          ))}
        </div>
      </div>
      <div className='absolute z-10 bottom-10 right-10'>
        <Button label='할 일 추가' color='#304FFE' onClick={() => router.push('/add')} />
      </div>
    </div>
  )
}

export default ToDoList
