import React from 'react'
import clsx from 'clsx'

interface Props {
  readonly label: string
  readonly color?: string
  readonly onClick?: () => void
}

const Button: React.FC<Props> = ({ label, color = '#ff5722', onClick }) => {
  const buttonClass = clsx(
    'border-0 text-white cursor-pointer py-2 px-4 rounded',
    'hover:opacity-80',
    'active:shadow-[inset_5px_5px_10px_rgba(0,0,0,0.2)]',
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
