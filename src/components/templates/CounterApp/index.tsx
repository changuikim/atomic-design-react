import Title from 'components/atoms/Title'
import Counter from 'components/organisms/Counter'

const CounterApp: React.FC = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <Title title='카운터 앱' />
    <Counter />
  </div>
)

export default CounterApp
