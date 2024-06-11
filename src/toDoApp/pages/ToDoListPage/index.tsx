'use client'

import React, { useContext } from 'react'
import { ToDoListContext } from '@/toDoApp/contexts/ToDoListContext'
import ToDoList from '@/toDoApp/components/templates/ToDoList'

const ToDoListPage: React.FC = () => {
  const { toDoList, onDelete } = useContext(ToDoListContext)

  return <ToDoList toDoList={toDoList} onDelete={onDelete} />
}

export default ToDoListPage
