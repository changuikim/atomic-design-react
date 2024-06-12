import React from 'react'

interface Props {
  readonly text: string
}

const Label: React.FC<Props> = ({ text }) => <div className='text-xl'>{text}</div>

export default Label
