import React from 'react'

interface Props {
  title: string
}

const PageTitle: React.FC<Props> = ({ title }) => <h1 className='mt-0'>{title}</h1>

export default PageTitle
