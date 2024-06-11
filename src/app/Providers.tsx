'use client'

import { ToDoListContextProvider } from '@/toDoApp/contexts/ToDoListContext'

export default function Providers({ children }) {
  return <ToDoListContextProvider>{children}</ToDoListContextProvider>
}
