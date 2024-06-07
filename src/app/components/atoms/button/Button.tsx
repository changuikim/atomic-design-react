interface Props {
  readonly label: string
  readonly onClick?: () => void
}

const Button: React.FC<Props> = ({ label, onClick }) => (
  <button
    className='px-4 py-2 text-white transition duration-300 ease-in-out bg-orange-500 border-0 rounded-md cursor-pointer hover:bg-orange-600 active:shadow-inner'
    onClick={onClick}>
    {label}
  </button>
)

export default Button
