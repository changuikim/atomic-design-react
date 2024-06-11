import React from 'react'
import AppTitle from '@/toDoApp/components/atoms/AppTitle'

const Header: React.FC = () => (
  <div className='absolute left-0 right-0 top-0 bg-blue-600 py-2 text-center'>
    <AppTitle />
  </div>
)

export default Header
