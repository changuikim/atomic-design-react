interface Props {
  readonly value: number
}

const Count: React.FC<Props> = ({ value }) => <span className='px-4 m-0 text-lg'>{value}</span>

export default Count
