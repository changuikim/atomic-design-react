'use client'

import React from 'react'
import { useRouter } from 'next/navigation'
import PageTitle from '@/toDoApp/components/atoms/PageTitle'
import Button from '@/toDoApp/components/atoms/Button'
import InputToDo from '@/toDoApp/components/organisms/InputToDo'

const ToDoInput: React.FC = () => {
  const router = useRouter()

  return (
    <div className='flex flex-col items-center justify-center h-screen bg-gray-200'>
      <div className='flex flex-col items-center justify-center p-8 bg-white rounded-lg'>
        <PageTitle title='할 일 추가' />
        <InputToDo />
      </div>
      <div className='absolute z-10 bottom-10 right-10'>
        <Button label='닫기' onClick={() => router.push('/toDo')} />
      </div>
    </div>
  )
}

export default ToDoInput
