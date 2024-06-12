import React from 'react'

interface Props {
  readonly title: string
}

const BlogTitle: React.FC<Props> = ({ title }) => <div className='mb-2.5 font-bold'>{title}</div>

export default BlogTitle
