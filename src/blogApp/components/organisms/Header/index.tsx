import React from 'react'
import AppTitle from '@/blogApp/components/atoms/AppTitle'

const Header: React.FC = () => (
  <div className='mb-5 w-[calc(100%-40px)] bg-white p-5'>
    <AppTitle />
  </div>
)

export default Header
