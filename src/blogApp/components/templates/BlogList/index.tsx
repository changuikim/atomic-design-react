import React, { useState } from 'react'
import Header from '@/blogApp/components/organisms/Header'
import BlogItem from '@/blogApp/components/organisms/BlogItem'
import Button from '@/blogApp/components/atoms/Button'
import RegisterBlogDialog from '@/blogApp/components/organisms/RegisterBlogDialog'

export interface Post {
  readonly id: number
  readonly title: string
  readonly body: string
}

interface Props {
  readonly posts?: ReadonlyArray<Post>
}

const BlogList: React.FC<Props> = ({ posts = [] }) => {
  const [showDialog, setShowDialog] = useState(false)

  return (
    <div className='flex flex-col items-center h-screen overflow-scroll bg-gray-200'>
      <Header />
      {posts.map(blog => (
        <BlogItem key={blog.id} title={blog.title} body={blog.body} />
      ))}
      <div className='absolute bottom-10 right-10'>
        <Button label='등록' onClick={() => setShowDialog(true)} />
      </div>
      {showDialog && <RegisterBlogDialog onClose={() => setShowDialog(false)} />}
    </div>
  )
}

export default BlogList
