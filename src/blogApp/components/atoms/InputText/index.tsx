import React from 'react'

interface Props {
  readonly value: string
  readonly onChange: (text: string) => void
}

const InputText: React.FC<Props> = ({ value, onChange }) => (
  <input className='text-xl' value={value} onChange={event => onChange(event.target.value)} />
)

export default InputText
