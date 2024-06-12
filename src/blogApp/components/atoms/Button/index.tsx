import React from 'react'
import clsx from 'clsx'

interface Props {
  readonly label: string
  readonly color?: string
  readonly onClick?: () => void
}

const Button: React.FC<Props> = ({ label, color = '#ff5722', onClick }) => {
  const buttonClass = clsx(
    'cursor-pointer rounded border-0 px-4 py-2 text-white',
    'hover:opacity-80',
    'active:shadow-inner active:shadow-black/20',
  )

  const customStyle = {
    backgroundColor: color,
  }

  return (
    <button className={buttonClass} onClick={onClick} style={customStyle}>
      {label}
    </button>
  )
}
export default Button
