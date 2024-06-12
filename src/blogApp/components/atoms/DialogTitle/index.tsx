import React from 'react'

interface Props {
  readonly title: string
}

const DialogTitle: React.FC<Props> = ({ title }) => (
  <div className='mb-4 text-xl font-bold'>{title}</div>
)

export default DialogTitle
