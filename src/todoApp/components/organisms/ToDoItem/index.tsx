import React from 'react'
import Label from '@/todoApp/components/atoms/Label'
import Button from '@/todoApp/components/atoms/Button'

interface Props {
  readonly label: string
  readonly onDelete?: () => void
}

const ToDoItem: React.FC<Props> = ({ label, onDelete }) => (
  <div className='flex items-center justify-center mb-4'>
    <Label label={label} />
    <Button label='삭제' onClick={onDelete} />
  </div>
)

export default ToDoItem
