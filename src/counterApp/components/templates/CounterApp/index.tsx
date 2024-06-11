import Title from '@/counterApp/components/atoms/Title'
import Counter from '@/counterApp/components/organisms/Counter'

const CounterApp: React.FC = () => (
  <div className='flex flex-col items-center justify-center h-screen'>
    <Title title='카운터 앱' />
    <Counter />
  </div>
)

export default CounterApp
