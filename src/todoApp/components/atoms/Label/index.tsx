import React from 'react'

interface Props {
  readonly label: string
}

const Label: React.FC<Props> = ({ label }) => <div className='flex-1 mr-4 text-lg'>{label}</div>

export default Label
