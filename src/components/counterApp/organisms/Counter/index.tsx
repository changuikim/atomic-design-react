import { useState } from 'react'

import Button from '@/components/counterApp/atoms/Button'
import Count from '@/components/counterApp/atoms/Count'

const Counter: React.FC = () => {
  const [count, setCount] = useState(0)
  return (
    <div className='flex items-center justify-center'>
      <Button label='-' onClick={() => setCount(prev => prev - 1)} />
      <Count value={count} />
      <Button label='+' onClick={() => setCount(prev => prev + 1)} />
    </div>
  )
}

export default Counter
