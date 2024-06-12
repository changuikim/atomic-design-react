import React from 'react'
import clsx from 'clsx'
import BlogTitle from '@/blogApp/components/atoms/BlogTitle'
import BlogBody from '@/blogApp/components/atoms/BlogBody'

interface Props {
  readonly title: string
  readonly body: string
}

const BlogItem: React.FC<Props> = ({ title, body }) => {
  const containerClass = clsx(
    'bg-white p-5 mb-5 rounded-lg shadow-lg w-[800px]',
    'shadow-[10px_10px_30px_rgba(217,217,217,0.75),-10px_-10px_30px_rgba(255,255,255,0.75)]',
  )

  return (
    <div className={containerClass}>
      <BlogTitle title={title} />
      <BlogBody body={body} />
    </div>
  )
}

export default BlogItem
