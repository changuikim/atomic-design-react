interface Props {
  readonly title: string
}

const Title: React.FC<Props> = ({ title }) => <h1 className='mb-8'>{title}</h1>

export default Title
