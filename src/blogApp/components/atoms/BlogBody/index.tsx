import React from 'react'

interface Props {
  readonly body: string
}

const BlogBody: React.FC<Props> = ({ body }) => (
  <div className='overflow-hidden text-ellipsis whitespace-nowrap'>{body}</div>
)

export default BlogBody
