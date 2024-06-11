import React from 'react'

interface Props {
  readonly value: string
  readonly onChange: (text: string) => void
}

const Input: React.FC<Props> = ({ value, onChange }) => (
  <input
    className='p-2 text-lg'
    type='text'
    value={value}
    onChange={event => onChange(event.target.value)}
  />
)

export default Input
