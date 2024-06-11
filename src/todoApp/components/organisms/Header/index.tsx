import React from 'react'
import AppTitle from '@/todoApp/components/atoms/AppTitle'

const Header: React.FC = () => (
  <div className='absolute top-0 left-0 right-0 py-2 text-center bg-blue-600'>
    <AppTitle />
  </div>
)

export default Header
