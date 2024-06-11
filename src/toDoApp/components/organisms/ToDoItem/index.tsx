import React from 'react'
import Label from '@/toDoApp/components/atoms/Label'
import Button from '@/toDoApp/components/atoms/Button'

interface Props {
  readonly label: string
  readonly onDelete?: () => void
}

const ToDoItem: React.FC<Props> = ({ label, onDelete }) => (
  <div className='flex flex-row items-center justify-center mb-4'>
    <Label label={label} />
    <Button label='삭제' onClick={onDelete} />
  </div>
)

export default ToDoItem
