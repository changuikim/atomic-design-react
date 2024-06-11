import React from 'react'
import Link from 'next/link'

const AppTitle: React.FC = () => (
  <Link href='/' className='text-2xl text-white no-underline cursor-pointer'>
    할 일 목록 앱
  </Link>
)

export default AppTitle
