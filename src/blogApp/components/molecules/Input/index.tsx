import React from 'react'
import Label from '@/blogApp/components/atoms/Label'
import InputText from '@/blogApp/components/atoms/InputText'

interface Props {
  readonly label: string
  readonly value: string
  readonly onChange: (text: string) => void
}

export const Input: React.FC<Props> = ({ label, value, onChange }) => (
  <div className='mb-4'>
    <Label text={label} />
    <InputText value={value} onChange={onChange} />
  </div>
)

export default Input
