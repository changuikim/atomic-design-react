import React, { createContext, useState, ReactNode } from 'react'

interface Context {
  readonly toDoList: string[]
  readonly onAdd: (toDo: string) => void
  readonly onDelete: (toDo: string) => void
}

const ToDoListContext = createContext<Context>({
  toDoList: [],
  onAdd: (): void => {},
  onDelete: (): void => {},
})

interface Props {
  children: ReactNode
}

const ToDoListContextProvider: React.FC<Props> = ({ children }) => {
  const [toDoList, setToDoList] = useState(['리액트 공부하기', '운동하기', '책 읽기'])

  const onDelete = (todo: string) => {
    setToDoList(toDoList.filter(item => item !== todo))
  }

  const onAdd = (toDo: string) => {
    setToDoList([...toDoList, toDo])
  }

  return (
    <ToDoListContext.Provider
      value={{
        toDoList,
        onAdd,
        onDelete,
      }}>
      {children}
    </ToDoListContext.Provider>
  )
}

export { ToDoListContext, ToDoListContextProvider }
